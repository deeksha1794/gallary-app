import React, { ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main/Main";
import Header from "./header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { gallaryResponses } from "../response/gallaryResponse";
import Footer from "./footer/Footer";
import Filter from "./main/filter/Filter";
const App = () => {
  const [searchValue, setSearchValue] = React.useState<string>();
  const [currentPage, setCurrentPage] = React.useState(0);
  const [gallaryData, setGallaryData] = React.useState(gallaryResponses);
  const [gallaryFilterData, setGallaryFilterData] =
    React.useState(gallaryResponses);
  const [isFilter, setIsFilter] = React.useState(false);

  const onSortName = () => {
    setIsFilter(!isFilter);
    setGallaryFilterData(
      gallaryData.sort((ele1, ele2) => {
        if (ele1.name > ele2.name) {
          return 1;
        }
        if (ele1.name < ele2.name) {
          return -1;
        }
        return 0;
      })
    );
  };

  const onClickFilterByLike = () => {
    setIsFilter(!isFilter);
    setGallaryFilterData(
      gallaryData.sort((ele1, ele2) => {
        if (ele1.rate > ele2.rate) {
          return -1;
        }
        if (ele1.rate < ele2.rate) {
          return 1;
        }
        return 0;
      })
    );
  };
  const onClickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    pageNumber: number
  ) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const searchLetter = searchValue ? searchValue.toLocaleLowerCase() : "";
    const data = gallaryData.filter((ele) =>
      ele.name.toLocaleLowerCase().includes(searchLetter)
    );
    setGallaryData(data);
    console.log(e.target.value, searchValue);
    if (!(searchValue === "" || e.target.value)) {
      setGallaryData(gallaryResponses);
    }
  };
  const pageSize = 9;
  return (
    <Router>
      <div className="app">
        <Header searchValue={searchValue} onChangeHandler={onChangeHandler} />
        <Filter
          onClickFilterByName={onSortName}
          onClickFilterByLike={onClickFilterByLike}
        />
        <Main
          pageSize={pageSize}
          currentPage={currentPage}
          gallaryResponses={isFilter ? gallaryFilterData : gallaryData}
          onClickHandler={onClickHandler}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
