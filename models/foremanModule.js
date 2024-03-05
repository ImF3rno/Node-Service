const mongoose=require('mongoose');

const foremanShema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide name']
    },
    lastname:{
        type:String,
        required:[true,'Must provide lastname']
    },
    specialty:{
        type:String,
        required:[true,'Must provide specialty']
    },
    photo:String,
    city:{
        type:String,
        required:[true,'Must provide a city']
    },
    jobsite: {
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            required:[true, 'Must provide service id for jobsite']
        },
    }
})

const Foreman=mongoose.model('Foreman',foremanShema)

module.exports=Foreman