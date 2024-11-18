import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { radCases } from './radCases';
import './UgRads.css';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-js-pagination';
import debounce from 'lodash/debounce';

const UgRads = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
    const [selectedCase, setSelectedCase] = useState(null);
    const [filteredCases, setFilteredCases] = useState(radCases);
    const navigate = useNavigate();

    // Debounced search function
    const handleSearch = debounce((e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setCurrentPage(1);
    }, 300);

    useEffect(() => {
        const results = radCases.filter((caseItem) =>
            caseItem.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCases(results);
    }, [searchTerm]);

    const totalCases = filteredCases.length;

    const viewCaseDetail = (caseItem) => {
        setSelectedCase(caseItem);
    };

    const closeModal = () => {
        setSelectedCase(null);
    };

    return (
        <div className="medical-imaging-hub">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search cases..."
                    onChange={handleSearch}
                    className="search-input"
                    aria-label="Search through case titles"
                />
            </div>

            <section className="cases-container">
                {totalCases === 0 ? (
                    <p className="no-cases">No cases found.</p>
                ) : (
                    filteredCases
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((caseItem) => (
                            <div
                                key={caseItem.id}
                                className="case-card"
                                onClick={() => viewCaseDetail(caseItem)}
                            >
                                <div className="case-image-container">
                                    {Array.isArray(caseItem.imageUrl) && caseItem.imageUrl.length > 1 ? (
                                        <Carousel>
                                            {caseItem.imageUrl.map((url, index) => (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        src={url}
                                                        alt={caseItem.title}
                                                        className="case-image"
                                                        loading="lazy"
                                                    />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    ) : (
                                        <img
                                            src={Array.isArray(caseItem.imageUrl) ? caseItem.imageUrl[0] : caseItem.imageUrl}
                                            alt={caseItem.title}
                                            className="case-image"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="case-details">
                                    <h4 className="case-title">{caseItem.title}</h4>
                                    <p className="case-description">{caseItem.description}</p>
                                </div>
                            </div>
                        ))
                )}
            </section>

            {/* Pagination Component */}
            {totalCases > itemsPerPage && (
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={totalCases}
                    pageRangeDisplayed={5}
                    onChange={(pageNumber) => setCurrentPage(pageNumber)}
                    innerClass="pagination"
                    itemClass="page-item"
                    linkClass="page-link"
                />
            )}

            {/* Modal for Case Details */}
            <Modal show={!!selectedCase} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCase?.title || ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="case-image-container">
                        {selectedCase && Array.isArray(selectedCase.imageUrl) && selectedCase.imageUrl.length > 1 ? (
                            <Carousel>
                                {selectedCase.imageUrl.map((url, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            src={url}
                                            alt={selectedCase.title}
                                            className="case-image"
                                            loading="lazy"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            <img
                                src={selectedCase?.imageUrl}
                                alt={selectedCase?.title}
                                className="case-image"
                                loading="lazy"
                            />
                        )}
                    </div>
                    <p>{selectedCase?.description || ''}</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UgRads;
