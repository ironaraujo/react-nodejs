
const express = require("express");
const models = require('../models/')
const router = express.Router()
const controller = require('../controllers/user')

const dependencias = {
    ...models
}

//const 
//router.get('/', (req, res) => res.json([]))
router.get('/', controller.index.bind(null, dependencias))
router.post('/', controller.create.bind(null, dependencias))
router.get('/:id', controller.show.bind(null, dependencias))
router.put('/:id', controller.update.bind(null, dependencias))
router.delete('/:id', controller.destroy.bind(null, dependencias))

module.exports = router