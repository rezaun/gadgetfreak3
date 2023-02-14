import React from 'react'
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
const handleSignIn =()=>{
    signInWithGoogle()
}
    
  return (
    <div className='container text-center mt-5'>
        <button type="button" class="btn btn-warning" onClick={()=>handleSignIn()}>Sign in With Google</button>
    </div>
  )
}

export default Login