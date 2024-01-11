import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
// import Header from './Header'
function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            navigate("/add");
        }
    },[])

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    async function signUp()
    {
        let item={name,email,password}
        //console.warn(item)
        let result = await fetch("http://digitalabhi.co.in/ecomm-backend/api/register",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
        console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result));

        navigate("/add");
    }

    return(
        <>
        {/* <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Name" />
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>                      
        </div> */}

        <main>
        <section class="form-section">
        <div class="form-wrapper">
            <h1 class="title">Sign up</h1>
            <div class="form-group">
                <input type="text" placeholder="Enter Name" class="form-input" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div class="form-group">
                <input type="email" placeholder="Email" class="form-input" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" class="form-input" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div class="form-group">
                <button onClick={signUp} class="form-submit">Sign Up</button>
            </div>

            <footer class="form-footer">
                <div>
                    Already have an account?
                    <a href="/login" class="form-link">Log in</a>
                </div>
            </footer>
        </div>
        </section>
        </main>
        </>
    )
}

export default Register 