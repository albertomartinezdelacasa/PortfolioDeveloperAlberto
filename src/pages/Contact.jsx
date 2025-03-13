import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquu00ed iru00eda la lu00f3gica para enviar el formulario a un backend
    // Por ahora, solo simularemos un envu00edo exitoso
    setFormStatus({
      submitted: true,
      error: false,
      message: '¡Gracias por tu mensaje! Me pondru00e9 en contacto contigo pronto.'
    });
    
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <h1>Contacto</h1>
      <p className="section-description">
        ¿Tienes alguna pregunta o quieres colaborar en un proyecto? ¡No dudes en contactarme!
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Informaciu00f3n de Contacto</h3>
          <p><strong>Email:</strong> tuemail@ejemplo.com</p>
          <p><strong>Telu00e9fono:</strong> +34 600 000 000</p>
          <p><strong>Ubicaciu00f3n:</strong> Madrid, España</p>
          
          <div className="social-links">
            <h3>Redes Sociales</h3>
            <ul>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Envu00edame un Mensaje</h3>
          {formStatus.submitted ? (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
