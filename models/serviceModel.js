const mongoose=require('mongoose');

const serviceShema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A service must have a name'],
    },
    address:{
        type:String,
        required:[true,'A service must have an address'],
        unique:true
    },
    leader:{
        type:String,
        required:[true,'A service must have a leader']
    },
    foremen:[{type: mongoose.Schema.Types.ObjectId,ref:'Foreman'}],
})

const Service=mongoose.model('Service',serviceShema)

module.exports=Service