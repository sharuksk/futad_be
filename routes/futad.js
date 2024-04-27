const {
  handleSave,
  handleChStatus,
  handleGetRes,
  handleEntryQR,
} = require("../controllers");
const router = require("express").Router();


//Save QR & Image
router.post('/save', handleSave)

//Save customer face
router.post('/changestatus', handleChStatus)
router.post('/storeqr', handleEntryQR)

//Get resp
router.get('/getresp', handleGetRes)

module.exports = router;
