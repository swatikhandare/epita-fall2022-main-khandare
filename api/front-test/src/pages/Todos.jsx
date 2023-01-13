import React, { useEffect }  from 'react'
import {useSelector} from 'react-redux'
import {getTodos} from '../services/todos'
import NewTodos from '../components/newTodos'

const Todos = () => {


  const {token} = useSelector ((state) => state.auth);

    useEffect(()=>{
        const getData = async () => {
            const res = await getTodos(token)
            console.log(res.data)
        }

        getData()
    }, [])

return (<>
    <h1 className = 'title'>
      Todos
    </h1>

    <NewTodos/>
  </>)

}

export default Todos