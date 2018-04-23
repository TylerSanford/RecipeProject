const express = require('express');

const usersRouter = express.Router();

const db = require('../configuration/db.js');

usersRouter.get('/', function(req, res) {
	// /api/users/

	db('users')
		.then(function(records) {
			res.status(200).json(records);
		})
		.catch(function(err) {
			res.status(500).json({ error: 'Could not retrieve any users' });
		});
});

usersRouter.get('/:id', function(req, res) {
	// /api/users/:id
	const { id } = req.params;

	db('users')
		.where('id', id)
		.then(function(record) {
			if (record) {
				res.status(200).json(record);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({ error: 'User does not exist' });
		});
});

usersRouter.get('/class/:userclass', function(req, res) {
	// /api/users/class/:userclass
	// ( admin, user, probationary )
	const { userclass } = req.params;

	db('users')
		.select('*')
		.where('userClass', userclass)
		.then(function(record) {
			if (record) {
				res.status(200).json(record);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({
				error: 'Class does not exist'
			});
		});
});

usersRouter.get('/activated/:boolean', function(req, res) {
	// /api/users/activated/:boolean
	// ( true / false )
	let { boolean } = req.params;

	// sqlite saves true and false as 1 and 0, query doesnt search right
	// unless you search by 1 and 0, but I want server request boolean!
	if (boolean === 'true') {
		boolean = 1;
	} else if (boolean === 'false') {
		boolean = 0;
	}

	db('users')
		.select('*')
		.where('activated', boolean)
		.then(function(record) {
			if (record) {
				res.status(200).json(record);
			} else {
				res.status(404).json(null);
			}
		})
		.catch(function(err) {
			res.status(500).json({
				error: 'No users match'
			});
		});
});

module.exports = usersRouter;
