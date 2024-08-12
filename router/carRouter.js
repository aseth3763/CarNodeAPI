const express = require("express")

const router = express.Router()

var upload = require('../upload')

const carController = require('../Controller/carController')

router.get('/getdataa',  carController.getdataa)
router.post("/postData", upload.single('image') , carController.postData);
router.get("/getAllData", carController.gettAllData); 
router.get("/getSingleData/:id", carController.getSingleData)
router.put("/updateData/:id", carController.updateData)
router.delete("/deleteData/:id", carController.deleteData)


module.exports = router ;
  
