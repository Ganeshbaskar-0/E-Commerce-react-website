import { Link } from "react-router-dom";
import {useAuth } from "../context/AuthContext";

export default function Navbar()
{
    const {user,login,logout} = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">ShopHub</Link>
                <div className="navbar-links">
                    <Link  to="/" 
                    className="navbar-link" >Home</Link>
                    <Link  to="/checkout" 
                    className="navbar-link">Cart</Link>
                </div>
                <div className="navbar-auth">
                    {!user ?(
                    <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-primary" >Login</Link>
                    <Link to="/auth" className="btn btn-secondary">Sign Up</Link>
                    </div>):(
                        <div className="navbar-user">
                            <span className="navbar-greeting">Hello! {user.email}</span>
                            <button type="submit" className="btn btn-primary" onClick={logout}>logout</button>
                            </div>
                    )
                    }
                </div>
            </div>

        </nav>
    )
}