import React, { useState } from 'react';
import { productData } from './ProductData'; // Adjust the path as needed
import './MedicinePrices.css';

function MedicinePrices() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Set the number of items per page
    const [searchTerm, setSearchTerm] = useState('');
    const [isGridView, setIsGridView] = useState(true); // Track view type

    // Filter products based on the search term
    const filteredProducts = productData.filter(product => {
        // Ensure the product name and description are defined before using toLowerCase
        const productName = product.name ? product.name.toLowerCase() : '';
        const productDescription = product.description ? product.description.toLowerCase() : '';
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        
        return productName.includes(lowerCaseSearchTerm) || productDescription.includes(lowerCaseSearchTerm);
    });

    // Get total number of products after filtering
    const totalProducts = filteredProducts.length;

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Get current products to display
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Change search term
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    // Toggle view type
    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    // Generate pagination buttons
    const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5; // Total number of buttons to display
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        // Adjust start and end page to ensure we have the right amount of buttons
        if (endPage - startPage < maxButtonsToShow - 1) {
            if (startPage === 1) {
                endPage = Math.min(maxButtonsToShow, totalPages);
            } else if (endPage === totalPages) {
                startPage = Math.max(1, totalPages - (maxButtonsToShow - 1));
            }
        }

        // Create pagination buttons
        if (totalPages > 1) {
            buttons.push(
                <button key="first" onClick={() => paginate(1)} disabled={currentPage === 1}>
                    First
                </button>
            );
            buttons.push(
                <button key="prev" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
            );

            for (let i = startPage; i <= endPage; i++) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => paginate(i)}
                        className={currentPage === i ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }

            buttons.push(
                <button key="next" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            );
            buttons.push(
                <button key="last" onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>
                    Last
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className="medicine-prices">
            <h2>Current Medicine Prices</h2>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search for medicines..."
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* View Toggle Button */}
            <button className="toggle-view" onClick={toggleView}>
                {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
            </button>

            <div className={`product-list ${isGridView ? 'grid' : 'list'}`}>
                {currentProducts.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                {renderPaginationButtons()}
            </div>
        </div>
    );
}

export default MedicinePrices;
