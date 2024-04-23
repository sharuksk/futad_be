const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hisFutadImage = new Schema ({
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
        type: Boolean,
        required: true
    },
    entrytime: {
        type: Date,
        default: Date.now
    }
});


module.exports = HistoryFutad = mongoose.model('history_futad_image', hisFutadImage);
