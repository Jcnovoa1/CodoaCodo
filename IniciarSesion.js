document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('email').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el email');
      return;
    }
    var clave = document.getElementById('pwd').value;
    if (clave.length < 6) {
      alert('La clave es menor a 6 caracteres, no es válida');
      return;
    }
    this.submit();
  }