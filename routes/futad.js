const {
  handleSave,
} = require("../controllers");
const router = require("express").Router();

router.post('/save', handleSave)

module.exports = router;
