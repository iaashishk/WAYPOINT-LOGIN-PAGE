import { useRef, useState } from 'react'
import './SliderCaptcha.css'

function SliderCaptcha({ verified, onVerified }) {
  const trackRef = useRef(null)
  const handleRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [fillWidth, setFillWidth] = useState(0)
  const [handleX, setHandleX] = useState(3)
  const maxXRef = useRef(0)

  const startDrag = () => {
    if (verified) return
    const trackWidth = trackRef.current.offsetWidth
    const handleWidth = handleRef.current.offsetWidth
    maxXRef.current = trackWidth - handleWidth - 6
    setDragging(true)
  }

  const moveDrag = (clientX) => {
    if (!dragging || verified) return
    const rect = trackRef.current.getBoundingClientRect()
    const handleWidth = handleRef.current.offsetWidth
    let x = clientX - rect.left - handleWidth / 2
    x = Math.max(3, Math.min(x, maxXRef.current))
    setHandleX(x)
    setFillWidth(x + handleWidth)
    if (x >= maxXRef.current - 2) {
      setDragging(false)
      setHandleX(maxXRef.current)
      onVerified()
    }
  }

  const endDrag = () => {
    if (!dragging) return
    setDragging(false)
    if (!verified) {
      setHandleX(3)
      setFillWidth(0)
    }
  }

  return (
    <div className="captcha">
      <div className="captcha-label">Slide to confirm you're on the trail</div>
      <div
        ref={trackRef}
        className={`slide-track${verified ? ' verified' : ''}`}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        <div className="slide-fill" style={{ width: verified ? '100%' : `${fillWidth}px` }} />
        <div className="slide-text">{verified ? 'Verified' : 'Slide to verify'}</div>
        <div
          ref={handleRef}
          className="slide-handle"
          style={{ left: verified ? undefined : `${handleX}px` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 L15 12 L9 18" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SliderCaptcha
