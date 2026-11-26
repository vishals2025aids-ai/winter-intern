import { useState } from 'react';

function Count() { 
  const [count, setCount] = useState(0)

  return (
    <section className="counter-section" aria-label="Counter">
      <h1 className="counter-value">Count: {count}</h1>
      <button
        className="button button-primary"
        type="button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Increase
      </button>
      <div className="button-row" aria-label="Button style examples">
        <button
          className="button button-destructive"
          type="button"
          onClick={() => setCount(0)}
        >
          Delete
        </button>
        <button
          className="button button-outline"
          type="button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button className="button button-outline" type="button">
          Outline
        </button>
        <button className="button button-secondary" type="button">
          secondary
        </button>
        <button className="button button-ghost" type="button">
          Ghost
        </button>
      </div>
    </section>
  )
}

export default Count