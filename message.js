$(document).ready(function () {
  $("#btnSend").click(function () {
    var errores = "";

    // Validado Nombre ==============================
    if ($("#Nombres").val() == "") {
      errores += "<p>Escriba un nombre</p>";
      $("#Nombres").css("border-bottom-color", "#F14B4B");
    } else {
      $("#Nombres").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Correo ==============================
    if ($("#Email").val() == "") {
      errores += "<p>Ingrese un correo</p>";
      $("#Email").css("border-bottom-color", "#F14B4B");
    } else {
      $("#Email").css("border-bottom-color", "#d1d1d1");
    }

    //Validado de Asunto=============================
    if ($("#Asunto").val() == "") {
      errores += "<p>Ingrese un correo</p>";
      $("#Asunto").css("border-bottom-color", "#F14B4B");
    } else {
      $("#Asunto").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Mensaje ==============================
    if ($("#Sumensaje").val() == "") {
      errores += "<p>Escriba un mensaje</p>";
      $("#Sumensaje").css("border-bottom-color", "#F14B4B");
    } else {
      $("#Sumensaje").css("border-bottom-color", "#d1d1d1");
    }

    // ENVIANDO MENSAJE ============================
    if ((errores == "") == false) {
      var mensajeModal =
        '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        "<h3>Errores encontrados</h3>" +
        errores +
        '<span id="btnClose">Cerrar</span>' +
        "</div>" +
        "</div>";

      $("body").append(mensajeModal);
    }

    // CERRANDO MODAL ==============================
    $("#btnClose").click(function () {
      $(".modal_wrap").remove();
    });
  });
});
