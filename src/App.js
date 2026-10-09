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
      {/* <h2>User Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          value={AddUserdata.username}
          onChange={handleChange}
          name="username"
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form> */}




        <main class="flex align-items-center justify-content-center">
        <section id="mobile" class="flex">
        </section>
        <section id="auth" class="flex direction-column">
            <div class="panel login flex direction-column">
                <h1 title="Instagram" class="flex justify-content-center">
                    <img src="/instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
                </h1>
                <form>
                    <label for="email" class="sr-only">Phone number, username, or email</label>
                    <input name="username" value={AddUserdata.username} onChange={handleChange} placeholder="Phone number, username, or email" />

                    <label for="password" class="sr-only">Password</label>
                    <input name="password" type="password" value={AddUserdata.password} onChange={handleChange} placeholder="Password" />

                    <button type="button" onClick={handleSubmit}>Log in</button>
                </form>
                <div class="flex separator align-items-center">
                    <span></span>
                    <div class="or">OR</div>
                    <span></span>
                </div>
                <div class="login-with-fb flex direction-column align-items-center">
                    <div>
                        <img />
                        <a>Log in with Facebook</a>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
            <div class="panel register flex justify-content-center">
                <p>Don’t have an account?</p>
                <a href="#">Sign up</a>
            </div>
            <div class="app-download flex direction-column align-items-center">
                <p>Get the app.</p>
                <div class="flex justify-content-center">
                    <img src="/apple-button.png"      alt="Apple App Store logo" title="Apple App Store logo" />
                    <img src="/googleplay-button.png" alt="Google Play logo" title="Google Play logo" />
                </div>
            </div>
        </section>
    </main>
    <footer>
        <ul class="flex flex-wrap justify-content-center">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">HELP</a></li>
            <li><a href="#">PRESS</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">PRIVACY</a></li>
            <li><a href="#">TERMS</a></li>
            <li><a href="#">LOCATIONS</a></li>
            <li><a href="#">TOP ACCOUNTS</a></li>
            <li><a href="#">HASHTAGS</a></li>
            <li><a href="#">LANGUAGE</a></li>
        </ul>
        <p class="copyright">© 2020 Instagram from Facebook</p>
    </footer>
    </div>
  );
}

export default App;