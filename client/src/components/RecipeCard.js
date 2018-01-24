import React from 'react';

import './recipe.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImgOverlay,
  CardHeader,
  Collapse
} from 'reactstrap';

const Recipe = props => {
  return (
    <Card
      className="border border-dark"
      style={{ width: '400px', margin: '10px' }}
    >
      <CardHeader>{props.name}</CardHeader>
      <CardImg
        top
        width="100%"
        src="https://thumb1.shutterstock.com/display_pic_with_logo/1535435/446808100/stock-photo-assorted-chinese-food-set-chinese-noodles-fried-rice-dumplings-peking-duck-dim-sum-spring-446808100.jpg"
        className="rounded-bottom rounded-0 rounded-bottom"
      />
      <CardBody>
        <Collapse isOpen="false">
          <b>Ingredients</b>
          <CardText>{props.ingredients}</CardText>
          <b>Instructions</b>
          <CardText>{props.instructions}</CardText>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default Recipe;
