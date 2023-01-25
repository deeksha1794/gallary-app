import React from "react";
import { Col, Container, Row } from "reactstrap";
import PhotoCard, { CardsProps } from "./cards/Cards";
import GallaryPagination from "./pagination/GallaryPagination";
import "./Main.scss";

interface Props {
  gallaryResponses: CardsProps[];
  currentPage: number;
  pageSize: number;
  onClickHandler: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number
  ) => void;
}
const Main = (props: Props) => {
  const { gallaryResponses, currentPage, pageSize, onClickHandler } = props;

  return (
    <>
      <div className="main">
        <Container>
          <Row>
            {gallaryResponses
              ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              ?.map((gallary) => {
                const { id, description, imageUrl, name, rate } = gallary;
                return (
                  <Col sm={4} key={id}>
                    <PhotoCard
                      id={id}
                      description={description}
                      imageUrl={imageUrl}
                      name={name}
                      rate={rate}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
        <Container>
          <Row>
            <GallaryPagination
              currentPage={currentPage}
              dataSetOfGallary={gallaryResponses}
              handleClick={onClickHandler}
              pageSize={pageSize}
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main;
