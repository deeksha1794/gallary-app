import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, CardText } from "reactstrap";
import "./Cards.scss";

export interface CardsProps {
  description: string;
  name: string;
  imageUrl: string;
  rate: number;
  id: string;
}

const PhotoCard = (props: CardsProps) => {
  return (
    <div className="card">
      <Card>
        <div className="zoom">
          <div className="background-blur">
            <CardText tag="h5">
              <span className="card-header">{props.name}</span>
              <span className="card-button-group">
                <Button onClick={() => alert("This page is coming soon.....")}>
                  <FontAwesomeIcon icon={faHeart} />
                  {props.rate}
                </Button>
                <Button onClick={() => alert("This page is coming soon.....")}>
                  <FontAwesomeIcon icon={faShare} />
                </Button>
              </span>
            </CardText>
          </div>
          <a target={"_blank"} href={props.imageUrl} rel="noreferrer">
            <div
              className="image-back"
              style={{ background: `url(${props.imageUrl})` }}
              arial-label={props.name}
            ></div>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default PhotoCard;
