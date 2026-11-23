import './App.css'
import TransitMap from './TransitMap.jsx'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Alfredo's MBTA Viewer</h1>
      </header>

      <main className="content">
        <TransitMap />
      </main>

      <div>

      </div>
    </div>
  )
}

export default App