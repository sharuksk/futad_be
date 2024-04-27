const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const futadImage = new Schema ({
    response: {
        type: Boolean,
        default: false
    }
});


module.exports = Futad = mongoose.model('futad_image', futadImage);
