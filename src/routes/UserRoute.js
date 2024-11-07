const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/', UserController.createUser);
router.post('/login', UserController.login);

// Route to add image for user
router.post('/:id/add-image', UserController.addUserImage);

module.exports = router;
