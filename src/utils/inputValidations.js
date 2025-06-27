const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export function numeralValidation(value, min, max) {
  let error = "";
  if (value < min) error = "El numero es muy chico";
  if (value > max) error = "El numero es muy grande";
  return error;
}

export function mailValidation(value) {
  if (regexCorreo.test(value) || value == "") return "";
  else return "Formato de correo no valido";
}

export function lengthValidation(value, min) {
  if (value.length >= min || value == "") return "";
  else return "Debe contener al menos " + min + " caracteres";
}
