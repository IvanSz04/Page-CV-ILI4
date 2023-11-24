    function mostrarDatos() {
      // Obtener los valores de los campos
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var genero = document.getElementById("apellido").value;

      // Crear una cadena con los datos
      var Datos = "Hola, mi nombre es" + nombre + "" + apellido + genero+"";

      // Abrir una nueva ventana con los datos
      var nuevaVentana = window.open('', '_blank');
      nuevaVentana.document.write('<html><head><title>Tu Hoja de Vida</title></head><body>' + Datos + '</body></html>');
    }
