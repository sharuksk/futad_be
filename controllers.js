const Futad = require("./model/futad_image")
const HistoryFutad = require("./model/hisFutadImage")



//////////devices(instances)
exports.handleSave = async (req, res) => {


  await Futad.deleteMany({});
  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image,
    response: req.body.response,
    image: req.body.image,
    });

  // const HisFutadData = new HistoryFutad({
  //   id: req.body.id,
  //   face_image: req.body.face_image,
  //   qr_image: req.body.qr_image,
  //   response: req.body.response,
  //   });

    await FutadData.save().then(file => res.json(file));
    // await HisFutadData.save().then(file => res.json(file));
};

exports.handleEntryImage = async (req, res) => {

  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image
    });

    FutadData.save().then(file => res.json(file));
};
