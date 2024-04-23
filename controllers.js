const Futad = require("./model/futad_image")



//////////devices(instances)
exports.handleSave = async (req, res) => {


  await Futad.deleteMany({});
  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image,
    response: req.body.response,
    });

    await FutadData.save().then(file => res.json(file));
};

exports.handleEntryImage = async (req, res) => {

  const FutadData = new Futad({
    id: req.body.id,
    face_image: req.body.face_image,
    qr_image: req.body.qr_image
    });

    FutadData.save().then(file => res.json(file));
};
