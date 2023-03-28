const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now()
  }
})
module.exports = mongoose.model('Tarea', TaskSchema)