function enviarDatos() {
  // Obtener los valores de los campos
  var nombre = document.getElementById('Nombre').value;
  var apellido = document.getElementById('Apellido').value;


  document.Formulario1.nombreObt.value = nombre;
  document.Formulario1.apellidoObt.value = apellido;

}
