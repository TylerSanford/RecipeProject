const express = require('express');

const recipesRouter = express.Router();

const db = require('../configuration/db.js');

var moment = require('moment');

// const repository = require('./recipesRepository');

recipesRouter.get('/', (req, res) => {
  // /api/recipes/

  db('recipes as r')
    .innerJoin('users as u', 'r.authorId', '=', 'u.id')
    .innerJoin('ratings', 'r.id', '=', 'ratings.recipeId')
    .then(records => {
      let endResult = [];
      let recipeNames = records
        .map(item => item.name)
        .filter((value, index, self) => self.indexOf(value) == index);

      for (let i = 0; i < recipeNames.length; i++) {
        let mainObject = {};
        let ratings = [];
        let author, createdAt, madeIt;

        for (let j = 0; j < records.length; j++) {
          if (records[j].name === recipeNames[i]) {
            createdAt = records[j].createdAt;
            madeIt = records[j].madeIt;
            author = records[j].username;
            ratings.push(records[j].stars);
          }
        }
        let ratingsSum = ratings.reduce((a, b) => {
          return a + b;
        });

        let ratingsAvg = ratingsSum / ratings.length;
        let ratingsRound = (Math.round(ratingsAvg * 4) / 4).toFixed(2);

        mainObject.name = recipeNames[i];
        mainObject.author = author;
        mainObject.createdAt = moment(createdAt).format('MMMM Do YYYY');
        mainObject.rating = ratingsRound;
        mainObject.madeIt = madeIt;

        endResult.push(mainObject);
      }

      res.status(200).json(endResult);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve any recipes' });
    });
});

recipesRouter.get('/:id', (req, res) => {
  // /api/recipes/:id
  const { id } = req.params;

  db('recipes as r')
    .where('r.id', id)
    .innerJoin('recipeIngredients as rI', 'rI.recipeId', '=', 'r.id')
    .innerJoin('users as u', 'r.authorId', '=', 'u.id')
    .innerJoin('measurements as m', 'm.id', '=', 'rI.measurementsId')
    .innerJoin('ingredients as i', 'i.id', '=', 'rI.ingredientsId')
    .select(
      'r.name',
      'u.username',
      'rI.quantity',
      'm.measurement',
      'i.name as ingredient',
      'rI.notes'
    )
    .then(function(records) {
      let mainObject = {};
      let endResult = [];
      let recipeName = records[0].name;
      let author = records[0].username;
      let ingredients = [];

      for (let i = 0; i < records.length; i++) {
        if (records[i].name === recipeName) {
          let ingredient = {};

          ingredient.quantity = records[i].quantity;
          ingredient.measurement = records[i].measurement;
          ingredient.ingredient = records[i].ingredient;

          if (records[i].notes) {
            ingredient.notes = records[i].notes;
          }

          ingredients.push(ingredient);
        }
      }

      mainObject.name = recipeName;
      mainObject.author = author;
      mainObject.ingredients = ingredients;

      endResult.push(mainObject);

      res.status(200).json(mainObject);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not retrieve any recipes' });
    });
});

recipesRouter.get('/author/:username', (req, res) => {
  // /api/recipes/author/:username
  const { username } = req.params;

  db('recipes as r')
    .join('users as u', 'r.userId', '=', 'u.id')
    .where('u.username', username)
    .select('r.*')
    // .groupBy(username)
    .then(records => {
      res.status(200).json(records);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Could not retrieve any recipes by that user' });
    });
});

recipesRouter.post('/madeIt', (req, res) => {
  const { recipeId } = req.body;

  db('recipes')
    .where('id', recipeId)
    .increment('madeIt')
    .then(() => res.status(200));
});

recipesRouter.post('/madeItCancel', (req, res) => {
  const { recipeId } = req.body;

  db('recipes')
    .where('id', recipeId)
    .decrement('madeIt')
    .then(() => res.status(200));
});

recipesRouter.put('/:id/updateRecipe', (req, res) => {
  const { name, keywords, ingredients, instructions } = req.body;
  const { id } = req.params;

  db('recipes')
    .where('id', id)
    .update({
      name: name,
      updatedAt: new Date(
        year,
        month,
        day,
        hours,
        minutes,
        seconds,
        milliseconds
      ),
      keywords: keywords,
      ingredients: ingredients,
      instructions: instructions
    })
    .then(records => {
      res.status(200).json(records);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not update that recipe' });
    });
});

recipesRouter.delete('/deleteRecipe', (req, res) => {
  const { recipeId } = req.body;

  db('recipes')
    .where('id', recipeId)
    .del()
    .then(records => {
      res.status(200).json(records);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not delete that recipe' });
    });
});

module.exports = recipesRouter;
