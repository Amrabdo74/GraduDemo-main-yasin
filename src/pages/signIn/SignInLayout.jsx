import React,{useState,useEffect} from 'react'
import Carousel from '../../components/carousel';
import LoginForm from '../../components/loinForm';
import { useDispatch } from 'react-redux';
const SignInLayout = (props) => {
    const [logged,setLogged]=useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('logged', logged);
    }, [logged]);
    const handleLogin = ()=>{
        setLogged(!logged);
        console.log(1);
    }
  return (
    <div className="login-page">
        <div className="left-side">
          <Carousel />
        </div>
        <div className="right-side">
          <LoginForm handleLogin={handleLogin}/>
        </div>
    </div>
  )
}

export default SignInLayout