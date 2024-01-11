import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
// import Header from './Header'

function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate("/add");
        }
    },[])

    async function login()
    {
        //console.warn("data",email,password)
        let item={email,password}
        try {
            let result= await fetch('http://digitalabhi.co.in/ecomm-backend/api/login',{
                method:'POST',
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(item)
            });

            if (result.ok) {
                const data= await result.json();
                //console.warn("result",result)
                localStorage.setItem("user-info",JSON.stringify(data));
                //console.log('Valid login credentials');
                navigate("/add");
            } else {
                // Handle invalid login
                alert('Email or Password is not matched');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    }

    return(
        <>
        {/* <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" className="form-control" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button onClick={login} className="btn btn-primary">Login</button>                      
        </div> */}

        <main>
        <section class="form-section">
        <div class="form-wrapper">
            <h1 class="title">Test Login</h1>
                <div class="form-group">
                <input type="email" placeholder="Email address" class="form-input" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
            <div class="form-group">
            <input type="password" placeholder="Password" class="form-input" required onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div class="form-group">
                <button onClick={login} class="form-submit">Login</button>
            </div>

            <footer class="form-footer">
                {/* <div>
                    <a href="#" class="form-link">Forgot password?</a>
                </div> */}
                <div>
                    Not registered yet?
                    <a href="/register" class="form-link"> Create an account?</a>
                </div>
            </footer>
        </div>
        </section>
        </main>
  

        </>
    )
}

export default Login