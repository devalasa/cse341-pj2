const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');


// Get all users
router.get('/', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.getAll(req, res);
});

// Create new user
router.post('/', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.createUser(req, res);
});

// Update user
router.put('/:id', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.updateUser(req, res);
});

// Delete user
router.delete('/:id', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.deleteUser(req, res);
});

module.exports = router;
