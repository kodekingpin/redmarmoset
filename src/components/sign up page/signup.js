import "./signup.css"

export default function SignUp() {
    return (
    <div className='mainsignup'>
      <form className="signupform">
        <label>
          <input
            className='username'
            type="text"
            placeholder='Enter Username'/>
        </label>
        <label>
          <input
            className='email'
            type="email"
            placeholder='Enter Email'/>
        </label>
        <label>
          <input
            className='password'
            type="password"
            placeholder='Enter Password'/>
        </label>
        <label>
          <input
            className='confirmpassword'
            type="password"
            placeholder='Confirm Password'/>
        </label>
        <br />
        <button className='signup' type="submit">Create Account</button>
      </form>
    </div>
    )
}