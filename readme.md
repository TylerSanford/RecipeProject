# Documentation for Recipe Website

Created by Tyler Sanford

## TODO LIST

| DONE + | Task               | Description                                                   |
| ------ | ------------------ | ------------------------------------------------------------- |
| +      | Switch to postgres | Switch database and migrate from sqlite to postgres           |
|        | Research Blog/Blob | Research blog/blob for storing picture data                   |
|        | Add table to DB    | Add description table to recepies component                   |
|        | Update RecipeCard  | Updated RecipeCard component to reflect description db change |
| +      | Add React-Router   | Add React-Router for navigation                               |
|        | Add create Recipe  | Add static page to create recipe with text editor             |

## API INFO

### RECIPES

| +/- | Command  | Path                             | Description                                  | Return Type |
| --- | -------- | -------------------------------- | -------------------------------------------- | ----------- |
| +   | [GET]    | 'api/recipes/'                   | Returns all recipes in the DB                | Object      |
| +   | [GET]    | 'api/recipes/:id'                | Returns recipe by recipe ID                  | Object      |
| -   | [GET]    | 'api/recipes/rating/:rating'     | Returns all recipes by rating (1-5)          | Object      |
| -   | [GET]    | 'api/recipes/keywords/:keywords' | Returns all recipes containing keywords      | Object      |
| -   | [GET]    | 'api/recipes/author/:username'   | Returns all recipes created by specific user | Object      |
| -   | [POST]   | 'api/recipes/createNew'          | Creates a new recipe                         | Object      |
| +   | [POST]   | 'api/recipes/madeIt'             | adds one to the madeIt counter               | Object      |
| +   | [POST]   | 'api/recipes/madeItCancel'       | cancels the made it                          | Object      |
| -   | [PUT]    | 'api/recipes/update'             | Updates a recipe                             | Object      |
| -   | [DELETE] | 'api/recipes/delete'             | Deletes a recipe                             | 200 Success |

### USERS

| +/- | Command  | Path                           | Description                                                 | Return Type |
| --- | -------- | ------------------------------ | ----------------------------------------------------------- | ----------- |
| +   | [GET]    | 'api/users/'                   | Returns all users in the DB                                 | Object      |
| +   | [GET]    | 'api/users/:id'                | Returns user by user ID                                     | Object      |
| +   | [GET]    | 'api/users/class/:userClass'   | Returns all users in :userClass (admin, user, probationary) | Object      |
| +   | [GET]    | 'api/users/activated/:boolean' | Returns users by activated status (true / false)            | Object      |
| -   | [POST]   | 'api/users/createNew'          | Creates a new user                                          | Object      |
| -   | [POST]   | 'api/users/class/createNew'    | Creates a new userClass                                     | Object      |
| -   | [PUT]    | 'api/users/update'             | Updates a user                                              | Object      |
| -   | [PUT]    | 'api/users/class/update'       | Updates a users's class - Indended for admins               | Object      |
| -   | [DELETE] | 'api/users/delete'             | Deletes a user                                              | 200 Success |

### COMMENTS

| +/- | Command  | Path                     | Description                    | Return Type |
| --- | -------- | ------------------------ | ------------------------------ | ----------- |
| -   | [POST]   | 'api/comments/createNew' | Creates a comment              | Object      |
| -   | [POST]   | 'api/comments/plusOne'   | Adds a like count to a comment | 200 Success |
| -   | [PUT]    | 'api/comments/update'    | Updates a comment              | Object      |
| -   | [DELETE] | 'api/comments/delete'    | Deletes a comment              | Object      |

## LIST OF ADVANCED FEATURES

| Component | Feature               | Description                                                 | Technologies                            |
| --------- | --------------------- | ----------------------------------------------------------- | --------------------------------------- |
| Front End | Responsive Design     | Webpage is completely responsive                            | React, React-Router, Redux, Material-Ui |
| Front End | Frontend with REST    | Front end communicates to backend RESTfully                 | Axios                                   |
| Database  | Database              | Stores all data available for the website                   | Postgres, Knex.js                       |
| Backend   | RESTful API           | Server fetches data from database when called from frontend | Express                                 |
| DevOps    | Environment Detection | App changes configuration files based on server environment | DotEnv                                  |

## Special Thanks

| Name          | Organization       | Note                                                                                                              |
| ------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Wesley Harvey | LambdaSchool - CS1 | Wesley went out of his way an inplemented a feature into this project that helped me for testsing and development |
