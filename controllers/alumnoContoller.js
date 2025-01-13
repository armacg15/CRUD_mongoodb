const Alumno = require('../model/Alumno'); // Importa correctamente el modelo

// Mostrar todos los alumnos
module.exports.mostrar = (req, res) => {
    Alumno.find({})
        .then(alumnos => {
            res.render('index', { alumnos }); // Renderiza la vista con los datos
        })
        .catch(err => {
            res.status(500).send(err.message); // Maneja errores
        });
};

// Crear un nuevo alumno
module.exports.crear = (req, res) => {
    const alumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad,
    });

    alumno.save()
        .then(() => res.redirect('/')) // Redirige después de guardar
        .catch(() => {
            res.status(500).json({ message: 'Error al crear el Alumno' });
        });
};

// Editar un alumno existente
module.exports.editar = (req, res) => {
    const { id_editar: id, nombre_editar: nombre, edad_editar: edad } = req.body;

    Alumno.findByIdAndUpdate(id, { nombre, edad })
        .then(() => res.redirect('/')) // Redirige después de actualizar
        .catch(() => {
            res.status(500).json({ message: 'Error actualizando el Alumno' });
        });
};

// Borrar un alumno
module.exports.borrar = (req, res) => {
    const id = req.params.id;

    Alumno.findByIdAndDelete(id)
        .then(() => res.redirect('/')) // Redirige después de eliminar
        .catch(() => {
            res.status(500).json({ message: 'Error eliminando el Alumno' });
        });
};
