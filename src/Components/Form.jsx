import React, { useState } from "react";
import Card from "./Card";


const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [flag, setFlag] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCard, setShowCard] = useState(false);
  //Aqui deberan implementar el form completo con sus validaciones
  const handleSubmit = (e) => {
    e.preventDefault();

    //1.- Validación del nombre
    if (nombre.length < 5 || nombre.startsWith(" ")) {
      setFlag("Por favor verifique su información nuevamente");
      setShowSuccess(false);
      return;
    }
    // 2.- Validación del correo (simplemente verificamos si está vacío)
    if (!email.includes("@") || !email.includes(".")) {
      setFlag("Por favor ingrese un correo válido.");
      setShowSuccess(false);
      return;
    }
    setFlag("");
    setShowSuccess(true);
    setShowCard(true);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingresa tu nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label>Ingresa tu correo:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo"
          />
        </div>
        <div>
          <label>Escribe tu pregunta:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tu pregunta"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {flag && <p style={{ color: 'red' }}>{flag}</p>}
      {showSuccess && (
        <h4 style={{ color: "green" }}>
          <br /> <br /><br /> <br />
          Gracias {nombre}, te contactaremos cuando antes vía mail.
        </h4>
      )}


      {/* {showCard && <Card name={nombre}  />} */}
    </div>

  );
};

export default Form;
