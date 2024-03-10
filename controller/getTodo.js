// import the model

const Todo = require("../models/Todo");

//define route handler
exports.getTodo  = async(req,res)=>{
    try{
        // fetch ala todos form database
        const todos  = await Todo.find({});

        // response 
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entry Todo Data is fetched  sucessfully'
            }
        );
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message
        });
    }
}

exports.getTodoById =  async(req,res)=>{
    try{
        // fetch ala todos form database
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        //data ffor ginen id is not found
        
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:'No Data found with given ID = ${id}',
                }
            )
        }
        // data for fuven id found

        res.status(200).json({
            success:true,
            data:todo,
            message:' Todo ${id} data succesgfully fetched'
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