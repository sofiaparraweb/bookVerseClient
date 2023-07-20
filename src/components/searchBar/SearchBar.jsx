import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar..."
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
