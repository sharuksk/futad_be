const {
  handleSave,
  handleEntryImage,
} = require("../controllers");
const router = require("express").Router();


//Save QR & Image
router.post('/save', handleSave)

//Save customer face
router.post('/storeface', handleEntryImage)

module.exports = router;
