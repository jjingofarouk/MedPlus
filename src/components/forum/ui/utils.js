// src/lib/utils.js

/**
 * Utility function to conditionally join class names together.
 * @param {...string} classes - List of class names.
 * @returns {string} - Combined class names as a single string.
 */
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  