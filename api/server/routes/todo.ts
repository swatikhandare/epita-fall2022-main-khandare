import express, {Request, Response} from 'express';

import todoModel from '../models/todoModel';

let Router = express.Router();

Router.post('/', async (request:Request,response:Response) =>{
    const {label, description} = request.body
    console.log(label,description)

    let newTodo = new todoModel({
        label,
        description
    })

    try{

        let todo = await newTodo.save()
        return response.status(200).json({"msg": newTodo});
    

    } catch (error){

        response.status(500).json({"msg": error});

    }
    
});

Router.get('/', async(request:Request,response:Response) =>{


    try{
        let todos =  await todoModel.find({});

        response.status(200).json(todos);
    }
    catch(error){
      return  response.status(500).json({"msg": error});
    }

    response.status(200).json({"msg": "List todos page!"});
    
});

Router.get('/:todoId', async (request:Request,response:Response) =>{

    let {todoId} = request.params;
    console.log(todoId);
    try{
        let todo =  await todoModel.findOne({
            _id:todoId
        });

        response.status(200).json({"msg": "The get " + todoId + " todos page!"});
    }
    catch(error){
      return  response.status(500).json({"msg": error});
    }
    
});

Router.delete('/:todoId', async (request:Request,response:Response) =>{
    let {todoId} = request.params;
    
    try{
        
        await todoModel.findOneAndDelete({
            _id: todoId
        });
        return response.status(200).json({"msg": "The deleted !"});

    }catch(error){
        return  response.status(500).json({"msg": error});
    }
       

});

Router.put('/:todoId', async (request:Request,response:Response) =>{
    let {todoId} = request.params;
    const {label, description}= request.body

    try{
            let todo = await todoModel.findOneAndUpdate({
                _id: todoId

            }, {
                label,
                description
            },{
                new: true
            });

            return response.status(200).json(todo);

    }catch(error){
        return  response.status(500).json({"msg": error});
    }
    
    
});

export default Router;