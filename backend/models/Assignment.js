const mongoose= require('mongoose');
const User = require('./User');

const assignmentsSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false,
    },
    task:{
        type:String,
        required:true,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    status:{
        type:String,
        enum:['Pending','Accepted','Rejected'],
        default:'Pending',
    },
    createdAt:{
        type: Date, 
        default: Date.now 
    },

});

module.exports= mongoose.model('Assignment',assignmentsSchema);