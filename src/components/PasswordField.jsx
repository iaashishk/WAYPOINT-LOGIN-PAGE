import { useState } from 'react'

function PasswordField({ id, value, onChange }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="pw-wrap">
      <input
        id={id}
        type={visible ? 'text' : 'password'}
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        required
      />
      <button
        type="button"
        className="pw-toggle"
        aria-label={visible ? 'Hide password' : 'Show password'}
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 3l18 18" />
            <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
            <path d="M6.6 6.6C4.2 8.1 2.5 10.4 1 12c0 0 4 7 11 7 2.1 0 3.9-.5 5.4-1.3" />
            <path d="M17.4 17.4C19.5 15.9 21 14 21 12c0 0-1-1.75-2.9-3.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default PasswordField
