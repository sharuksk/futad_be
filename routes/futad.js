const {
  handleSave,
  handleEntryFace,
  handleGetRes,
  handleEntryQR,
} = require("../controllers");
const router = require("express").Router();


//Save QR & Image
router.post('/save', handleSave)

//Save customer face
router.post('/storeface', handleEntryFace)
router.post('/storeqr', handleEntryQR)

//Get resp
router.get('/getresp', handleGetRes)

module.exports = router;
