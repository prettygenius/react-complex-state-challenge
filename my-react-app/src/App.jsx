import useLocalStorage from 'use-local-storage'
import './index.css'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";



function App() {
 const [theme,setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

 function switchTheme() {
   const newTheme = theme === 'light' ? 'dark' : 'light'
   setTheme(newTheme)
 }

   return(
        <div className="app" data-theme={theme}>
      <div className='login'>
      <h1>Login</h1>
        <div className='container'>
          <div className='top'>
            <FaGoogle fontSize={30}/>
            <FaTwitter fontSize={30}/>
            <FaFacebook fontSize={30}/>
            <FaApple fontSize={30}/>
            <FaGithub fontSize={30}/>
            <FaLinkedin fontSize={30}/>
          </div>
          <p className='divider'><span>Welcome</span></p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <FaToggleOn onClick={switchTheme} fontSize={60} />
        </div>
      </div>
    </div>
  )
}

export default App
