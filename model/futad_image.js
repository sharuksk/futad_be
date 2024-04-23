const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const futadImage = new Schema ({
    id:{
        type: String
    },
    face_image: {
        type: String
    },
    qr_image: {
        type: String
    },
    response: {
        type: Boolean
    },
    entrytime: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String
    }
});


module.exports = Futad = mongoose.model('futad_image', futadImage);
