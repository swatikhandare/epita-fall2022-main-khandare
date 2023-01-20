import React, {useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { postTodos } from '../services/todos';
//import { useNavigate } from 'react-router-dom';


const newTodos = () => {
        const {token}= useSelector((state)=> state.auth);

        const labelRef= useRef()
        const descriptionRef= useRef()
        //let navigate =useNavigate()
            useEffect(()=>{
                labelRef.current.focus();

            },[])

        const onSubmitHandler = async(event)=>{
            event.preventDefault();
            console.log(labelRef.current.value)
            const res = await postTodos(token,{
                    label: labelRef.current.value,
                    description:descriptionRef.current.value
            });
            console.log(res)
        }
        return (

                <form onSubmit={onSubmitHandler}>
                <label>Label</label>
                <input type='text' name='label' ref={labelRef} placeholder ='Enter a label'/>
                <label>Description</label>
                <input type='text' name='label' ref={descriptionRef} placeholder ='Enter a description'/>
                <button type='submit'>Save</button>
                </form>
            
        )
}

export default newTodos