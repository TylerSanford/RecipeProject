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
          src="http://via.placeholder.com/380x280"
          className="rounded-0 rounded-bottom"
        />
        
      </Card>
    );
  }
}

export default Recipe;
