const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoContoller')


router.get('/', alumnoController.mostrar)

router.post('/crear', alumnoController.crear)

router.post('/editar', alumnoController.editar)

router.get('/borrar/:id', alumnoController.borrar)
module.exports = router
