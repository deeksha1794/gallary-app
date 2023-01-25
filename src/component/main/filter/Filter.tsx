import { Container, Button } from "reactstrap";
import "./Filter.scss";

const Filter = (props: any) => {
  return (
    <Container className="filter">
      <div className="card-button-group">
        <Button onClick={props.onClickFilterByName}>Sorting by name</Button>
        <Button onClick={props.onClickFilterByLike}>Sorting by like</Button>
      </div>
    </Container>
  );
};

export default Filter;
