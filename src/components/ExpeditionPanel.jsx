import './ExpeditionPanel.css'

function ExpeditionPanel() {
  return (
    <div className="left">
      <svg className="topo" viewBox="0 0 500 700" preserveAspectRatio="none">
        <path d="M -20 120 C 80 90, 160 150, 260 110 S 420 60, 520 100" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 170 C 90 140, 170 200, 270 165 S 430 115, 520 155" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 260 C 70 300, 190 250, 280 300 S 440 340, 520 300" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 310 C 80 350, 200 300, 290 350 S 450 390, 520 350" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 460 C 100 420, 180 480, 300 440 S 430 400, 520 440" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 510 C 110 470, 190 530, 310 490 S 440 450, 520 490" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path d="M -20 600 C 90 630, 210 580, 310 620 S 460 650, 520 610" stroke="#3a4d3f" strokeWidth="1.5" fill="none" />
        <path
          className="route-path"
          d="M 30 620 C 110 560, 90 460, 180 400 C 260 350, 240 250, 330 190 C 380 155, 360 110, 420 80"
        />
        <circle className="route-dot" cx="420" cy="80" r="5" />
        <circle className="route-dot" cx="30" cy="620" r="5" />
      </svg>

      <div className="brand">
        <div className="mark">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2 L21 20 L12 15.5 L3 20 Z" stroke="#c1872f" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          <span>WAYPOINT</span>
        </div>
        <h1>Every trail begins with a single log.</h1>
        <p>Track routes, share field notes, and coordinate with your crew — from basecamp to summit.</p>
      </div>

      <div className="foot">© Waypoint</div>
    </div>
  )
}

export default ExpeditionPanel
