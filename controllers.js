const Futad = require("./model/futad_image")
const HistoryFutad = require("./model/hisFutadImage")
// const FaceImage = require("./model/store_image")
// const QRImage = require("./model/store_qr")



//////////devices(instances)
exports.handleSave = async (req, res) => {


  // await Futad.deleteMany({});
  // const FutadData = new Futad({
  //   id: req.body.id,
  //   face_image: req.body.face_image,
  //   qr_image: req.body.qr_image,
  //   response: req.body.response
  //   });

  const HisFutadData = new HistoryFutad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image,
    response: req.body.response,
    });

    // await FutadData.save();
    await HisFutadData.save().then(file => res.json(file));
};


exports.handleGetRes = async (req, res) => {  let data = await Futad.findOne({});
  await res.json({response: data.response});
};



exports.handleChStatus = async (req, res) => {

    const FutadData = new Futad({
    response: req.body.response
    });

    FutadData.save().then(file => res.json(file));


  // const StoreFace = new FaceImage({
  //   image: req.body.image
  //   });

  //   StoreFace.save().then(file => res.json(file));
};

exports.handleEntryQR = async (req, res) => {

  const StoreQR = new QRImage({
    image: req.body.image
    });

    StoreQR.save().then(file => res.json(file));
};
