
import { useRef, useContext } from 'react';
import MyContext from './mycontext';
//
import { Navigate } from 'react-router-dom';

const Login = () => {
  const inputName = useRef(null);
  const inputPassword = useRef(null);
  
  const setName = useContext(MyContext);  

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.current.value;  
    setName(name); 
   return(
    <Navigate to={'/books'}/>
   )
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputPassword}
          type="password"
          placeholder="Password"
        />
        <input
          ref={inputName}
          type="text"
          placeholder="Name"
        />
        <button type="submit">Submit</button>
       
      </form>
    </div>
  );
};

export default Login;



