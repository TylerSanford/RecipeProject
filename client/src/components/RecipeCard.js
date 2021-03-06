import React, { Component } from 'react';

import './recipe.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Card,
  Button,
  Badge,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImgOverlay,
  CardHeader,
  Collapse
} from 'reactstrap';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggled: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Card
        onClick={this.toggle}
        className="cardClass border border-secondary"
        style={{ display: 'table' }}
      >
        <CardHeader className="bg-primary text-white">
          {this.props.name}
          <Badge color="secondary" className="float-right">
            {this.props.madeIt} <br />Made It!
          </Badge>
        </CardHeader>
        <CardImg
          top
          width="100%"
          src="https://thumb1.shutterstock.com/display_pic_with_logo/1535435/446808100/stock-photo-assorted-chinese-food-set-chinese-noodles-fried-rice-dumplings-peking-duck-dim-sum-spring-446808100.jpg"
          className="rounded-0 rounded-bottom"
        />
        <Collapse isOpen={this.state.collapse}>
          <CardBody>
            <b>Ingredients</b>
            <CardText>{this.props.ingredients}</CardText>
            <b>Instructions</b>
            <CardText>{this.props.instructions}</CardText>
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default Recipe;
