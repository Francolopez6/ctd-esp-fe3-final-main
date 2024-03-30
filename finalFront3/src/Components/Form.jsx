import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    questions: "",
    error: "",
    successMessage: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName.length <= 5 || !formData.email.includes("@")) {
      setFormData({
        ...formData,
        error: "Por favor verifique su información nuevamente",
        successMessage: ""
      });
    } else {
      setFormData({
        ...formData,
        error: "",
        successMessage: `Gracias ${formData.fullName}, te contactaremos lo antes posible vía mail`
      });
      console.log("Datos enviados:", formData);
    }
  };

  const styles = {
    title: {
      color: "#333",
      fontSize: "24px",
      marginBottom: "20px",
      textAlign: "center"
    },
    formGroup: {
      marginBottom: "20px"
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold"
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    },
    error: {
      color: "#ff0000",
      marginTop: "10px"
    },
    success: {
      color: "#008000",
      marginTop: "10px"
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s"
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nombre completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Preguntas:</label>
          <textarea
            name="questions"
            value={formData.questions}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        {formData.error && <p style={styles.error}>{formData.error}</p>}
        {formData.successMessage && (
          <p style={styles.success}>{formData.successMessage}</p>
        )}
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;

