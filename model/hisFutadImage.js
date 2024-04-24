const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hisFutadImage = new Schema ({
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
        type: Boolean,
        default: false
    },
    entrytime: {
        type: Date,
        default: Date.now
    }
});


module.exports = HistoryFutad = mongoose.model('history_futad_image', hisFutadImage);
