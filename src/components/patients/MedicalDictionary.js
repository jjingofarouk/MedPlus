import React, { useState } from 'react';
import axios from 'axios';

const MedicalDictionary = () => {
    const [term, setTerm] = useState('');
    const [data, setData] = useState(null);

    const fetchTerm = async () => {
        const apiKey = '93185942-c015-4c67-b5c3-bfe498597dd0'; // Your actual API key
        const url = `https://www.dictionaryapi.com/api/v3/references/medical/json/${term}?key=${apiKey}`;

        try {
            const response = await axios.get(url);
            console.log(response.data); // Log the response data for debugging
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Enter a medical term"
            />
            <button onClick={fetchTerm}>Search</button>

            {data ? (
                data.length > 0 ? (
                    <div>
                        <h2>Definitions for "{term}":</h2>
                        {data.map((entry, index) => (
                            <div key={index}>
                                <h3>ID: {entry.meta?.id}</h3>
                                <p>Pronunciation: {entry.hwi?.prs?.[0]?.mw || 'N/A'}</p>
                                {entry.def?.map((def, idx) => (
                                    <div key={idx}>
                                        {def.sseq?.map((sense, senseIdx) => (
                                            <div key={senseIdx}>
                                                <h4>Definition:</h4>
                                                {sense[0][1].dt?.map((definition, defIdx) => (
                                                    <p key={defIdx}>
                                                        {definition.text || 'N/A'}
                                                        <br />
                                                        Pronunciation: {entry.hwi?.prs?.[0]?.mw || 'N/A'}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No definitions found for "{term}".</p>
                )
            ) : null}
        </div>
    );
};

export default MedicalDictionary;
