import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import userModel from '~/models/userModel';



export const isAuth = async (request: any, response: Response, next: any) => {
   // console.log(request.session);
   try { 
        const token = request.header("Authorization")
            //console.log(token);
            if (!token) return response.status(503).json({msg: "Not authenticated !"})
       
            const decoded = <any>jwt.verify(token, `secret-to-change`);
            //console.log(decoded);
            
            if (!decoded) return response.status(503).json({msg: "Not authenticated !"});

            //console.log(decoded.user);
            let user = await userModel.findOne({
                email:decoded.user.email
            });

            if (!user) return response.status(503).json({msg: "Not authenticated !"});
            request.user = user;

            next();
    }catch(error){
        return response.status(503).json({msg: "Not authenticated !"})
    }


    //this is for session part
        /*if (request.session.user) {
        next()
    } else {
        return response.status(503).json({msg: "Not authenticated !"})
    }*/
}
