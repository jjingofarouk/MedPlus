// ImagingViewer.tsx
import React from 'react';

const ImagingViewer = () => {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/imaging'); // Update with actual API endpoint
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching imaging data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <div>
      <h2>Advanced Imaging Viewer</h2>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.description} />
      ))}
    </div>
  );
};

export default ImagingViewer;
