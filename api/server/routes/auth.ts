import express, {Request, Response} from 'express';
import bcrypt from 'bcrypt'
import useModel from '../models/userModel';
import { User } from '../types/User';

let Router = express.Router();

Router.post('/register', async (request: Request, response: Response): Promise<Response> => {
    console.log(request.body);
    const { email, email_cfg, password, password_cfg } = request.body;

    if (
        (typeof email == 'string' && email != '') && 
        (typeof email_cfg == 'string' && email_cfg != '') && 
        (typeof password == 'string' && password != '') &&
        (typeof password_cfg == 'string' && password_cfg != '')
    ) {
        if ( email != email_cfg || password != password_cfg) {
            return response.status(500).json({"msg": "Email or password confirmation are not valid !"});
        }

        const user : User|void = await <User|void>useModel.create({
            email,
            "password": bcrypt.hashSync(password, 10)
        }, (error) => {
            if (error) return response.status(500).json({"msg": "User not create"})

            return response.status(200).json(user)
        });


    } else {
        return response.status(500).json({"msg": "You have to send email, password and confirmations !"});
    }

    
    return response.status(200).json('Register page');
});

//Router.post('/login', async (request: Request, response: Response): Promise<Response> => {
Router.post('/login', async (request: Request, response: Response): Promise<Response> => {

    console.log(request.body);
    const { email, password } = request.body;

    if (
        (typeof email == 'string' && email != '') && 
        (typeof password == 'string' && password != '')
    ) {
            let user = await useModel.findOne({email})

            //if(!user)return response.status(500).json({"msg": "Email and password don't match !"});

            if (user?.password == password) {
                return response.status(200).json(user);
            }

            return response.status(500).json({"msg": "Email and password don't match !"});

    } else {
        return response.status(500).json({"msg": "You have to send email and password !"});
    }
});

export default Router;