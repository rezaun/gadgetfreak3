import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init';


const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Gadget Freak 3</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/">Home</Link></li>                           
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/product">Product</Link></li>                           
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/uploadProduct">Upload Product</Link></li>               
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/orderList">Order List</Link></li>               
                        </ul>
                        <span>
                        {
                            user ? <span><img style={{ width: "20px", marginRight: "5px", borderRadius: "10px" }} src={user.photoURL} alt={user.displayName} />{user.displayName}
                                <button className="btn btn-link" onClick={() => signOut(auth)}>Sign Out</button>
                            </span> : 'User'
                        }
                        </span>
                      
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar