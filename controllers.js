const Futad = require("./model/futad_image")
const HistoryFutad = require("./model/hisFutadImage")



//////////devices(instances)
exports.handleSave = async (req, res) => {


  await Futad.deleteMany({});
  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image,
    response: req.body.response
    });

  const HisFutadData = new HistoryFutad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image,
    response: req.body.response,
    });

    await FutadData.save();
    await HisFutadData.save().then(file => res.json(file));
};


exports.handleGetRes = async (req, res) => {  let data = await Futad.findOne({});
  console.log(data)
  await res.json(data.image);
};



exports.handleEntryImage = async (req, res) => {

  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image
    });

    FutadData.save().then(file => res.json(file));
};
