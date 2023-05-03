const nombre = "German";
const apellido = "Guerrero";

const estudiante = `${nombre}  ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const letras = estudiante.length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.charAt(15);
const sinEspacio = estudiante.replace(/\s/g, "");
const booleana = estudiante.includes(nombre);
