import Count from './hooks/count.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="top-bar" aria-label="Page header" />
      <main className="demo-page">
        <Count />
        <p className="sample-text">This is test</p>
        <section className="student-section" aria-labelledby="students-title">
          <h2 id="students-title">Students</h2>
          <p>I am user and age is 20</p>
        </section>
      </main>
    </div>
  )
}

export default App
