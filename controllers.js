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

   

    // FutadData.save().then(file => res.json(file));
    //res.json(req.body.response);
    try{
    if(req.body.response === "null"){
      await Futad.deleteMany();
      await Futad.insertMany({}).then( res.json({message: `Success Hell`}));
    }
    else{
      await Futad.findOneAndUpdate({response: req.body.response}).then( res.json({message: `Success ${req.body.response}`}));
    }
    } 
    catch{
      res.json({error: "Error Occured while Changing the status"});
    }
    


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
