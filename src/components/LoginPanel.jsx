import { useState } from 'react'
import PasswordField from './PasswordField.jsx'
import SliderCaptcha from './SliderCaptcha.jsx'
import './LoginPanel.css'

function LoginPanel() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [verified, setVerified] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo only — wire this up to your own authentication backend.
    setStatus('This is a UI demo — connect it to your own auth backend.')
  }

  return (
    <div className="right">
      <div className="form-wrap">
        <h2>Welcome back</h2>
        <p className="sub">Log in to pick up where your last trip left off.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@crew.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <PasswordField id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="row-between">
            <label className="remember">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              Keep me signed in
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <SliderCaptcha verified={verified} onVerified={() => setVerified(true)} />

          <button type="submit" className="submit-btn" disabled={!verified}>
            Log in
          </button>

          {status && <div className="status-msg">{status}</div>}
        </form>

        <div className="form-footer">
          New to Waypoint? <a href="#invite">Request an invite</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPanel
