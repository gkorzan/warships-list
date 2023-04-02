const PAGINATOR_LENGTH = 7;

export const getPageNumbers = (totalPageNumber: number, currentPage: number): number[] => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPageNumber; i += 1) {
    pageNumbers.push(i);
  }

  return currentPage >= PAGINATOR_LENGTH
    ? pageNumbers.slice(
        currentPage - Math.floor(PAGINATOR_LENGTH / 2) - 1,
        currentPage + Math.floor(PAGINATOR_LENGTH / 2)
      )
    : pageNumbers.slice(0, PAGINATOR_LENGTH);
};
