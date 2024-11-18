import React, { useState } from 'react';
import './ImagingAndDiagnostics.css';
import { FaUpload, FaEye, FaTrash, FaSearch, FaTag, FaEdit } from 'react-icons/fa';

// Mock data for demonstration
const mockTags = ['X-Ray', 'MRI', 'CT Scan', 'Ultrasound'];

const ImagingAndDiagnostics = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [tags, setTags] = useState(mockTags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTagEditor, setShowTagEditor] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleImageUpload = (e) => {
    setUploading(true);
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
      tags: [],
      metadata: { size: file.size, type: file.type, date: new Date().toLocaleDateString() }
    }));
    setImages([...images, ...newImages]);
    setUploading(false);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleImageDelete = (id) => {
    setImages(images.filter(image => image.id !== id));
    if (selectedImage && selectedImage.id === id) {
      setSelectedImage(null);
    }
  };

  const handleTagChange = (id, tag) => {
    setImages(images.map(image =>
      image.id === id
        ? { ...image, tags: [...image.tags, tag] }
        : image
    ));
  };

  const handleTagRemoval = (id, tag) => {
    setImages(images.map(image =>
      image.id === id
        ? { ...image, tags: image.tags.filter(t => t !== tag) }
        : image
    ));
  };

  const handleTagEditor = () => {
    setShowTagEditor(!showTagEditor);
  };

  const handleNewTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="imaging-and-diagnostics">
      <h2>Imaging and Diagnostics</h2>

      <div className="upload-section">
        <input
          type="file"
          id="imageUpload"
          multiple
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        <label htmlFor="imageUpload" className="upload-button">
          <FaUpload /> Upload Images
        </label>
        {uploading && <p>Uploading...</p>}
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="image-gallery">
        {filteredImages.length > 0 ? (
          <ul>
            {filteredImages.map(image => (
              <li key={image.id} className="image-item">
                <img src={image.url} alt={image.name} onClick={() => handleImageSelect(image)} />
                <button onClick={() => handleImageDelete(image.id)} className="delete-button">
                  <FaTrash />
                </button>
                <div className="tags">
                  {image.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                      <button onClick={() => handleTagRemoval(image.id, tag)} className="remove-tag">
                        &times;
                      </button>
                    </span>
                  ))}
                  <button onClick={() => handleTagChange(image.id, prompt('Enter new tag:'))} className="add-tag">
                    <FaTag /> Add Tag
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No images found</p>
        )}
      </div>

      {selectedImage && (
        <div className="image-preview">
          <h3>Image Preview</h3>
          <img src={selectedImage.url} alt={selectedImage.name} />
          <p><strong>Name:</strong> {selectedImage.name}</p>
          <p><strong>Size:</strong> {selectedImage.metadata.size} bytes</p>
          <p><strong>Type:</strong> {selectedImage.metadata.type}</p>
          <p><strong>Date:</strong> {selectedImage.metadata.date}</p>
          <button onClick={() => setSelectedImage(null)} className="close-preview">
            Close
          </button>
        </div>
      )}

      {showTagEditor && (
        <div className="tag-editor">
          <h3>Tag Editor</h3>
          <input
            type="text"
            placeholder="New tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="new-tag-input"
          />
          <button onClick={handleNewTag} className="add-new-tag-button">
            Add Tag
          </button>
          <button onClick={handleTagEditor} className="close-tag-editor">
            Close
          </button>
        </div>
      )}
      <button onClick={handleTagEditor} className="edit-tags-button">
        <FaEdit /> Manage Tags
      </button>
    </div>
  );
};

export default ImagingAndDiagnostics;
