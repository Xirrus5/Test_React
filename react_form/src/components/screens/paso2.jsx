import React from "react";

function Step2({ formData, handleFileChange, nextStep, prevStep }) {
  return (
    <div className="container">
      <h2>Paso 2: Cargar foto</h2>
      <label>
        Foto:
        <input type="file" onChange={handleFileChange} />
      </label>
      <br />
      <button onClick={prevStep}>Atrás</button>
      <button onClick={nextStep}>Siguiente</button>
    </div>
  );
}

export default Step2;
