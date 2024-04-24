const {
  handleSave,
  handleEntryImage,
  handleGetRes,
} = require("../controllers");
const router = require("express").Router();


//Save QR & Image
router.post('/save', handleSave)

//Save customer face
router.post('/storeface', handleEntryImage)

//Get resp
router.get('/getresp', handleGetRes)

module.exports = router;
