import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
