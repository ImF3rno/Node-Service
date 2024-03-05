const APIFeatures=require('./../utils/apiTools')
const Service=require('./../models/serviceModel')

exports.checkBody=(req,res,next)=>{
    if(!req.body.name || !req.body.address){
        return res.status(400).json({
            status:'Failed',
            message:'Missing name or price'
        })
    }
    next()
}

exports.getAllServices=async(req,res)=>{
    try{
        const serviceData=new APIFeatures(Service.find(),req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const service=await serviceData.query;
        res.status(200).json({
            status:'Success',
            results:service.length,
            data:{
                service
            }
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message
        });
    }
};

exports.createService=async(req,res)=>{
    try{
        const service=await Service.create(req.body);
        res.status(201).json({
            status:'Success',
            message:'New entity created',
            data:service
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        });
    }
};

exports.getService=async(req,res)=>{
    try{
        const service=await Service.findById(req.params.id)
        res.status(200).json({
            status:'Success',
            data:{
                service
            }
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message
        });
    }
};

exports.updateService=async(req,res)=>{
    try{
        const service=await Service.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status:'Success',
            message:'Entity Updated',
            data:{
                service
            }
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        });
    }
};

exports.deleteService=async(req,res)=>{
    try{
        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'Success',
            message:'Entity deleted',
            data:null
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        });
    }
};
