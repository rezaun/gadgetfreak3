import React from 'react'
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state.from.pathname || "/";
    
const handleSignIn =()=>{
    signInWithGoogle()
}

if(user){
    navigate(from, {replace:true});
}
    
  return (
    <div className='container text-center mt-5'>
        <button type="button" class="btn btn-warning" onClick={()=>handleSignIn()}>Sign in With Google</button>
    </div>
  )
}

export default Login