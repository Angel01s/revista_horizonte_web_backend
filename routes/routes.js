const express = require("express");
const getAllUnits = require("../controllers/RevistaControllers.js");

//import { createArea, deleteArea, getAllAreas, getArea, updateArea } from '../controllers/RevistaControllers.js'
const router = express.Router()
router.get('/',getAllAreas)
router.get('/:id',getArea)
router.post('/',createArea)
router.put('/:id',updateArea)
router.delete('/:id',deleteArea)

module.exports = router;