import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Auth()
{
    const [ mode, setMode] = useState("signup");
    const [error, setError] = useState(null)
    const {register,handleSubmit,formState:{errors}} = useForm();
    const navigate = useNavigate()

    const {login, signUp} = useAuth();

        function onsubmit(data)
        {
            let result;
            if(mode==="signup")
            {
             result =signUp(data.email,data.password)
            }else{
                result =login(data.email,data.password)
            }
            if(result.success)
            {
                navigate("/")
            }
            else{
                setError(result.error)
            }
        }

    return (
        
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode==="signup"?"Sign Up":"login"}</h1>
                    <form  className="auth-form " onSubmit={handleSubmit(onsubmit)}>
                        {error && <div className="error-message">{error}</div>}
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input  className="form-input" type="email" id="email" {...register("email",{required:"Email is required"})}/>
                          {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>
                  
                    <div className="form-group">
                        <label className="form-label">Password</label>  
                        <input  className="form-input" type="password" id="password"
                        {...register("password",{
                            required:"password is required",
                            minLength:{
                                value:6,
                                message:"Password must be at least 6or 12 characters"},
                            maxLength:{
                                value:12,
                                message:"Password must be less than 12 characters"}
                        })}
                        />
                    {errors.password && <span className="form-error">{errors.password.message}</span>}

                    </div>

                    <button type="submit" className="btn btn-primary
                     btn-large">{mode==="signup"?"Sign up":"Login"}</button>
                    </form>
                    { mode==="signup"?
                    (<p className="auth-switch">
            Already have an Account!  <span className="auth-link" onClick={()=>setMode("login")}>login</span></p>)
                    :(<p className="auth-switch">Dont't have a Account? 
                    <span className="auth-link" onClick={()=>setMode("signup")}>  Sign up</span></p>)}
                </div>
            </div>

        </div>
    )
    
}