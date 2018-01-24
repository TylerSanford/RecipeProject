import React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

import './recipe.css';

const styles = {
  card: {
    maxWidth: 300,
    margin: 30,
    backgroundColor: ''
  },
  img: {
    maxWidth: 300
  },
  avatar: {
    backgroundColor: '#00e676',
    color: 'black'
  }
};

const Recipe = props => {
  return (
    <Card style={styles.card}>
      <CardHeader
        title={<div className="header">{props.name}</div>}
        subheader={<div className="subheader">{props.createdAt}</div>}
        avatar={
          <Avatar aria-label="Made It" style={styles.avatar}>
            {props.madeIt}
          </Avatar>
        }
        className="cardHeader"
      />
      <img
        style={styles.img}
        src="https://thumb1.shutterstock.com/display_pic_with_logo/1535435/446808100/stock-photo-assorted-chinese-food-set-chinese-noodles-fried-rice-dumplings-peking-duck-dim-sum-spring-446808100.jpg"
        alt={props.name}
      />
      <CardContent>
        <Typography component="p">{props.ingredients}</Typography>
        <Typography component="p">{props.instructions}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Recipe);

// <div class="row">
//   <div class="cell">{props.name}</div>
//   <div class="cell">{props.author}</div>
//   <div class="cell">{props.createdAt}</div>
//   <div class="cell">{props.rating}</div>
//   <div class="cell">{props.ingredients}</div>
//   <div class="cell">{props.instructions}</div>
//   <div class="cell">{props.madeIt}</div>
// </div>
