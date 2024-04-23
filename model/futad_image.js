const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const futadImage = new Schema ({
    id:{
        type: String,
        required: true
    },
    face_image: {
        type: String,
        required: true
    },
    qr_image: {
        type: String,
        required: true
    },
    response: {
        type: Boolean
    }
});


module.exports = Futad = mongoose.model('futad_image', futadImage);
