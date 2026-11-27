import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="register-section" aria-labelledby="register-title">
      <h1 className="section-title" id="register-title">Register form</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Name</span>
          <input
            autoComplete="name"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input
            autoComplete="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
            type="email"
            value={formData.email}
          />
        </label>
        <label className="form-field">
          <span>Password</span>
          <input
            autoComplete="new-password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
            required
            type="password"
            value={formData.password}
          />
        </label>
        <div className="form-actions">
          <button className="button button-register" type="submit">Register</button>
          {submitted && <span className="form-success" role="status">Form submitted</span>}
        </div>
      </form>
    </section>
  )
}

export default Register
