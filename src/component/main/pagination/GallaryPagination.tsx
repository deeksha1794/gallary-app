import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { CardsProps } from "../cards/Cards";
import "./GallaryPagination.scss";

interface PaginationProps {
  dataSetOfGallary: CardsProps[];
  currentPage: number;
  pageSize: number;
  handleClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number
  ) => void;
}

const GallaryPagination = (props: PaginationProps) => {
  const { currentPage, dataSetOfGallary, pageSize, handleClick } = props;
  const pageCount = Math.ceil(dataSetOfGallary.length / pageSize);
  return (
    <>
      <div className="pagination-wrapper">
        <Pagination aria-label="Gallary Pagination" className="pagination">
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={(e) => handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>

          {[...Array(pageCount)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem disabled={currentPage >= pageCount - 1}>
            <PaginationLink
              onClick={(e) => handleClick(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};

export default GallaryPagination;
