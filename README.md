# Waypoint — Login Screen

A split-screen login UI concept for **Waypoint**, a fictional field-log app for
outdoor expedition teams. Built with React + Vite as a front-end UI portfolio
piece.

![status](https://img.shields.io/badge/status-concept-blue)

## Features

- Split-screen layout: animated topographic route illustration on one side,
  login form on the other
- Custom password field with a hand-built show/hide toggle (no icon library)
- A from-scratch **slide-to-verify** captcha component — no third-party
  CAPTCHA service involved
- Fully responsive, stacks to a single column on narrow screens
- No UI framework dependency (no Bootstrap/Tailwind) — plain CSS with a small
  design-token system in `src/index.css`

## Stack

- React 18
- Vite 5
- Plain CSS (custom properties for theming)
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) +
  [Inter](https://fonts.google.com/specimen/Inter) (UI)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  components/
    ExpeditionPanel.jsx   # left brand/illustration panel
    ExpeditionPanel.css
    LoginPanel.jsx         # right form panel
    LoginPanel.css
    PasswordField.jsx      # password input + show/hide toggle
    SliderCaptcha.jsx      # custom drag-to-verify captcha
    SliderCaptcha.css
  App.jsx
  App.css
  index.css                # design tokens + global styles
  main.jsx
```

## Notes

This is a front-end concept only — the login form does not call a real
authentication API. Wire `handleSubmit` in `LoginPanel.jsx` up to your own
backend to make it functional.

## License

MIT — do whatever you'd like with this.
