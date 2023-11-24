    function mostrarDatos() {
      // Obtener los valores de los campos
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var opcionSeleccionada = document.querySelector('input[name="genero"]:checked');
      var opcion = opcionSeleccionada ? opcionSeleccionada.value : "Ninguna opción seleccionada";
      var opcionSeleccionada = document.querySelector('input[name="estudio"]:checked');
      var estudioO = opcionSeleccionada ? opcionSeleccionada.value : "Ninguna opción seleccionada";
      var ttlo = document.getElementById("titulo").value;
      

      // Crear una cadena con los datos
      
      var Datos = "Hola, mi nombre es " + nombre + " " + apellido +" y soy "+ opcion+". Hice un "+estudioO+" en "+ttlo;

      // Abrir una nueva ventana con los datos
      var nuevaVentana = window.open('', '_blank');
      nuevaVentana.document.write('<html><head><title>Tu Hoja de Vida</title></head><body>' + Datos + '</body></html>');
  
}
