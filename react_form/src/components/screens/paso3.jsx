import React from "react";

function Step3({ formData, prevStep, handleSubmit }) {
  return (
    <div className="container">
      <h2>Paso 3: Resumen</h2>
      <p>
        <strong>Nombre:</strong> {formData.stringField}
      </p>
      <p>
        <strong>Sexo:</strong> {formData.comboField}
      </p>
      <p>
        <strong>Edad:</strong> {formData.numberField}
      </p>
      <p>
        <strong>Foto:</strong> {formData.photo ? formData.photo.name : "No cargada"}
      </p>
      <button onClick={prevStep}>Atrás</button>
      <button onClick={handleSubmit}>Finalizar</button>
    </div>
  );
}

export default Step3;
