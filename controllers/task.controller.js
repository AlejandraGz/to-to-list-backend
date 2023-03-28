const Tarea = require('../models/Task');

exports.crearTarea = async (req, res) => {
  try {
    //creando tarea
    let task;
    task = new Tarea(req.body);

    await task.save();
    console.log(task)
    res.send(task);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error')
  }
}
exports.obtenerTareas = async (req, res) => {
  try {
    const task = await Tarea.find();
    res.json(task);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
exports.actualizarTarea = async (req, res) => {
  try {
    const { task } = req.body
    let tarea = await Tarea.findById(req.params.id);

    if (!tarea) {
      res.status(404).json({
        message: "No existe el producto"
      })
    }
    tarea.task = task;

    tarea = await Tarea.findOneAndUpdate({_id: req.params.id}, tarea, {new: true})
    res.json(tarea)

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
exports.obtenerTarea = async (req, res) => {
  try {
    let tarea = await Tarea.findById(req.params.id);

    if (!tarea) {
      res.status(404).json({
        message: "No existe el producto"
      })
    }
    res.json(tarea)

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}
exports.eliminarTarea = async (req, res) => {
  try {
    let tarea = await Tarea.findById(req.params.id);

    if (!tarea) {
      res.status(404).json({
        message: "No existe el producto",
      })
    }
    await Tarea.findByIdAndRemove({_id: req.params.id})
    res.json({
      message: "Tarea eliminada con éxito",
    })

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}