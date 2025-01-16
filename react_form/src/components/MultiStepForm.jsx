import React, { useState } from "react";
import Step1 from "./screens/paso1";
import Step2 from "./screens/paso2";
import Step3 from "./screens/paso3";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stringField: "",
    comboField: "",
    numberField: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.stringField) {
      newErrors.stringField = "El campo de texto no puede estar vacío.";
    } else if (/\d/.test(formData.stringField)) {
      newErrors.stringField = "El campo de texto no debe contener números.";
    }

    if (!formData.comboField) {
      newErrors.comboField = "Debe seleccionar una opción.";
    }

    if (!formData.numberField) {
      newErrors.numberField = "El campo de número no puede estar vacío.";
    } else if (isNaN(formData.numberField)) {
      newErrors.numberField = "El valor debe ser un número.";
    } else if (formData.numberField < 0) {
      newErrors.numberField = "El número no puede ser negativo.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Limpiar errores en tiempo real
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0],
    }));
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Formulario completado:", formData);
    alert("Formulario enviado");
  };

  return (
    <div >
      {step === 1 && (
        <Step1
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleFileChange={handleFileChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default MultiStepForm;
