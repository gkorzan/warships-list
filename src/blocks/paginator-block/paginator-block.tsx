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
  const totalPagesNumber = Math.ceil(totalVehicles / vehiclesPerPage);
  const pageNumbers = getPageNumbers(totalPagesNumber, currentPage);
  return (
    <nav className="paginatorBlockNav">
      <ul className="paginatorBlockUl">
        <li className="paginatorBlockPrevious">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage - 1 <= 0) return;
              paginate((currentPage -= 1));
            }}
          >
            <span className="paginatorBlockButtonText">&lt;</span>
          </a>
        </li>
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
        <li className="paginatorBlockNext">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage + 1 > pageNumbers[pageNumbers.length - 1]) return;
              paginate((currentPage += 1));
            }}
          >
            <span className="paginatorBlockButtonText">&gt;</span>
          </a>
        </li>
        <li>
          <span className="pagesCounter">total pages: {totalPagesNumber}</span>
        </li>
      </ul>
    </nav>
  );
};
