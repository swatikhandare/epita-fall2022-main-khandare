import{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';
import {deleteAuth} from '../slices/authSlice';

const Logout = () =>{
    let nagivage = useNavigate()
    let disptach = useDispatch()

    useEffect(()=>{
        const getData = async () =>{
            const res = await logout()
        
            if (res.staatus == 503){
                return Navigate('/login');
            }
            disptach(deleteAuth())

            return Navigate('/login');
        
        };
        getData();
    },[]);
}

export default Logout