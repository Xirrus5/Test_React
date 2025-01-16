import React from "react";

function Step1({ formData, errors, handleChange, nextStep }) {
  return (
    <div className="container">
    <div>
      <h2>Paso 1: Información básica</h2>
      <label>
        Nombre :
        <input
          type="text"
          name="stringField"
          value={formData.stringField}
          onChange={handleChange}
        />
      </label>
      {errors.stringField && <p style={{ color: "red" }}>{errors.stringField}</p>}
      <br />
      <label>
        Combo:
        <select
          name="comboField"
          value={formData.comboField}
          onChange={handleChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="opcion1">Hombre</option>
          <option value="opcion2">Mujer</option>
          <option value="opcion3">Prefiero no decirlo</option>
        </select>
      </label>
      {errors.comboField && <p style={{ color: "red" }}>{errors.comboField}</p>}
      <br />
      <label>
        Edad:
        <input
          type="number"
          name="numberField"
          value={formData.numberField}
          onChange={handleChange}
        />
      </label>
      {errors.numberField && <p style={{ color: "red" }}>{errors.numberField}</p>}
      <br />
      <button onClick={nextStep}>Siguiente</button>
    </div>
    </div>
  );
}

export default Step1;


