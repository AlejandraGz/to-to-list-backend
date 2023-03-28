const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller')

router.post('/', taskController.crearTarea);
router.get('/', taskController.obtenerTareas);
router.put('/:id', taskController.actualizarTarea);
router.get('/:id', taskController.obtenerTarea);
router.delete('/:id', taskController.eliminarTarea);
module.exports = router;