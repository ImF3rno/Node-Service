const Foreman=require('./../models/foremanModule');
const Service=require('./../models/serviceModel');

exports.createForeman=async(req,res)=>{
    try{
        const {serviceId,...foremanData}=req.body;
        const existingService=await Service.findById(serviceId);
        if(!existingService){
            return res.status(404).json({
                status:'Failed',
                message:'Service not found with the provided ID'
            });
        }
        const foreman = await Foreman.create({
            ...foremanData,
            jobsite:{ 
                serviceId: existingService._id 
            }
        });
        existingService.foremen.push(foreman._id);
        await existingService.save();
        res.status(201).json({
            status:'Success',
            message:'New foreman created and associated with the service',
            data:{
                foreman
            }
        });
    }catch(err){
        res.status(400).json({
            status:'Failed',
            message:err.message
        });
    }
};

exports.updateForeman=async(req,res)=>{
    try{
        const foremanId=req.params.id;
        const {serviceId, ...updatedData}=req.body;
        const foreman=await Foreman.findById(foremanId);
        if(!foreman){
            return res.status(404).json({
                status:'Failed',
                message:'Foreman not found with the provided ID'
            });
        }
        if(serviceId){
            const existingService=await Service.findById(serviceId);
            if(!existingService){
                return res.status(404).json({
                    status:'Failed',
                    message:'Service not found with the provided ID'
                });
            }
            foreman.jobsite={serviceId:existingService._id };
        }
        foreman.set(updatedData);
        await foreman.save();
        res.status(200).json({
            status:'Success',
            message:'Foreman updated successfully',
            data:{
                foreman
            }
        });
    }catch(err){
        res.status(400).json({
            status:'Failed',
            message:err.message
        });
    }
};

exports.deleteForeman=async(req,res)=>{
    try{
        const {foremanId}=req.params;
        await Foreman.findByIdAndDelete(foremanId);
        res.status(200).json({
            status:'Success',
            message:'Foreman deleted successfully',
            data:null
        });
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message
        });
    }
};