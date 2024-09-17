import React from 'react';
import styles from './pagination.module.css';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange, totalPages = 10 }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
