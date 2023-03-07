const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    empid : {
        type: String,
        required: true,
        unique: true
    },
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String,
    city   : String,
    department : String,
    address : String,
    number : Number
    
})


/*var dept = new mongoose.Schema({
    deptcode : {
        type: String,
        required: true,
        unique: true
    },
    deptname : {
        type: String,
        required: true
    },
    deptshort : {
        type: String,
        required: true
    }


}) 


const Deptdb = mongoose.model('deptdb',dept);


module.exports = Deptdb;*/

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;