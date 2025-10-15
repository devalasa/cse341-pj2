const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');
const { isAuthenticated } = require('../middleware/authenticate');


// Get all users
router.get('/', (req, res) => {
  //#swagger.tags = ['Users']
  usersController.getAll(req, res);
});

// Create new user
router.post('/', isAuthenticated, usersController.createUser);

// Update user
router.put('/:id', isAuthenticated, usersController.updateUser);

// Delete user
router.delete('/:id', isAuthenticated, usersController.deleteUser);

module.exports = router;
