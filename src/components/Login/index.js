import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    email: 'johndeo@gmail.com',
    password: '12345678',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    const {history} = this.props
    history.replace('/login')
  }

  onSignIn = event => {
    event.preventDefault()
    const {email, password} = this.state

    if (email === 'johndeo@gmail.com' && password === '12345678') {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="sign-in-page-container">
        <div className="side-bar">
          <h1 className="side-bar-header">Board.</h1>
        </div>
        <div className="sign-in-container">
          <div className="login-container">
            <div>
              <h1 className="sign-in-main-header">Sign In</h1>
              <p className="greeting-text">Sign into your account</p>
            </div>
            <div className="sign-in-with-another-accounts">
              <button className="button google-button" type="button">
                <img
                  src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
                  alt="google"
                  className="google-png"
                />
                <p className="button-text">Sign in with Google</p>
              </button>

              <button className="button google-button" type="button">
                <img
                  src="https://w7.pngwing.com/pngs/410/972/png-transparent-apple-brand-logo-macintosh-apple-icon-format-icon-apple-grey-logo-angle-text-heart-thumbnail.png"
                  alt="apple"
                  className="google-png"
                />
                <p className="button-text">Sign in with Apple</p>
              </button>
            </div>
            <form className="login-form-container" onSubmit={this.onSignIn}>
              <label htmlFor="emailId" className="input-label">
                Email address
              </label>
              <input
                type="text"
                id="emailId"
                className="user-input"
                onChange={this.onChangeEmail}
                value={email}
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="user-input"
                onChange={this.onChangePassword}
                value={password}
              />
              <p className="forgot-text">Forgot password?</p>
              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
            <p className="messages-text">
              Don&apos;t have an account?
              <span className="register-text">Register now</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
