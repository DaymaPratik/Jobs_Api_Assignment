const JobModel=require('../model/jobModels')
const createJob=async (req,res)=>{
   try {
    const createdJob=await JobModel.create(req.body);
    console.log(createJob);
    res.json({
        status:true,
        message:"Job created succesfully"
    })
   } catch (error) {
    console.log("Error while creating job ",error);
   }
}
const listJob= async (req,res)=>{
    const allJobList= await JobModel.find();
    res.json({
        status:true,
        message:"List all jobs succesfully",
        result:allJobList
    })
}
const editJob=async (req,res)=>{
    const updateObj={
        salary:110000,
    }
    const id=req.params.id;
    const editedJob=await JobModel.findByIdAndUpdate(id,updateObj)
    res.json({
        status:true,
        message:"Job edited succesfully"
    })
}
const deleteJob=async (req,res)=>{
    const id=req.params.id;
    await JobModel.findByIdAndDelete(id)
    .then(()=>{console.log("Deleted Successfully");})
    .catch((e)=>{console.log("Error Delete ",e);})
    res.json({
        status:true,
        message:"Job deleted succesfully"
    })
}
const jobCOntroller={
    createJob,
    listJob,
    editJob,
    deleteJob
}
module.exports=jobCOntroller