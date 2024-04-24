const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const qr_data = new Schema ({
    id:{
        type: String
    },
    image: {
        type: String
    },
    entrytime: {
        type: Date,
        default: Date.now
    }
});


module.exports = QrImage = mongoose.model('qr_image', qr_data);
