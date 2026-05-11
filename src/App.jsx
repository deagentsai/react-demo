import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <img src="https://raw.githubusercontent.com/NousResearch/hermes-agent/main/assets/hermes-logo.png" className="logo" alt="Hermes Logo" />
        </h1>
        <h1>React Demo</h1>
        <p>🚀 Built and deployed automatically by Hermes Agent to <code>https://github.com/deagentsai</code></p>
        
        <div className="card">
          <p className="description">Welcome to my React + Vite app!</p>
          <button className="btn" onClick={() => setCount(count => count + 1)}>
            Count: {count}
          </button>
        </div>
        
        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>⚡ Fast with Vite</li>
            <li>🎯 Interactive counter</li>
            <li>💻 Simple React setup</li>
            <li>🔄 GitOps - auto-pushed</li>
          </ul>
        </div>
        
        <div className="card">
          <h2>Technologies</h2>
          <ul>
            <li>React 18</li>
            <li>Vite</li>
            <li>CSS Modules</li>
          </ul>
        </div>
        
        <div className="footer">
          <p>
            <a href="https://github.com/deagentsai/react-demo" target="_blank" rel="noopener noreferrer">
              📂 View Source
            </a>
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
