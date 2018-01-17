import React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';

const Recipe = props => {
  return (
    <Card>
      <CardHeader title={props.name} subheader={props.createdAt} />
    </Card>
  );
};

export default Recipe;

// <div class="row">
//   <div class="cell">{props.name}</div>
//   <div class="cell">{props.author}</div>
//   <div class="cell">{props.createdAt}</div>
//   <div class="cell">{props.rating}</div>
//   <div class="cell">{props.ingredients}</div>
//   <div class="cell">{props.instructions}</div>
//   <div class="cell">{props.madeIt}</div>
// </div>
