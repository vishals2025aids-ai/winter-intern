import Count from './hooks/count.jsx'
import Register from './hooks/counter.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <main className="demo-page">
        <Register />
        <div className="top-bar" aria-hidden="true" />
        <div className="demo-content">
          <Count />
          <p className="sample-text">This is test</p>
          <section className="student-section" aria-labelledby="students-title">
            <h2 id="students-title">Students</h2>
            <p>I am user and age is 20</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
