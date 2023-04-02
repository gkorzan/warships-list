import React from 'react';
import { getPageNumbers } from './utils/get-page-numbers';
import cn from 'classnames';

import './paginator-block.css';

type PaginatorBlockProps = {
  vehiclesPerPage: number;
  totalVehicles: number;
  currentPage: number;
  paginate: (number: number) => void;
};

export const PaginatorBlock = ({
  vehiclesPerPage,
  totalVehicles,
  currentPage,
  paginate
}: PaginatorBlockProps) => {
  const pageNumbers = getPageNumbers(totalVehicles, vehiclesPerPage, currentPage);
  return (
    <nav className="paginatorBlockNav">
      <ul className="paginatorBlockUl">
        {pageNumbers.map((number) => (
          <li key={number} className="paginatorBlockLi">
            <a
              className={cn('paginatorBlockButton', {
                current: currentPage === number
              })}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              <span className="paginatorBlockButtonText">{number}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
