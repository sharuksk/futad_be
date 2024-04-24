const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const face_data = new Schema ({
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


module.exports = FaceImage = mongoose.model('face_image', face_data);
