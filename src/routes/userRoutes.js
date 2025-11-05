const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateCreateUser, validateUpdateUser } = require('../middlewares/validateUser');

router.get('/', userController.getAllUsers);
router.post('/', validateCreateUser, userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', validateUpdateUser, userController.updateUser);

module.exports = router;
