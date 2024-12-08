import {useDispatch,useSelector}from 'react-redux'

const Login=()=>{
const myState=useSelector(x=>x.count.count)
const dispatch=useDispatch()
dispatch({type:"add",payload:5})
return(<div>
    count:{myState}

</div>
)
}

export default Login