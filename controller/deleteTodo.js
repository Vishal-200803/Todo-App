// import the model

const Todo = require("../models/Todo");



exports.deleteTodo =  async(req,res)=>{
    try{
        
        // data for fuven id found
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:' Todo ${id} delete succesgfully '
        })
       
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        })
    }
}