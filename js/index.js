$(document).ready(function () {
  inicializar();

  let piezaSeleccionada = "";
  let piezaEliminar = "";
  let color = "";

  $("body > div:nth-child(1) > div > div").on("click", function () {
    let codigo_celda = $(this).attr("id");

    //! Si se hace clic en una casilla con una pieza siempre que no tengamos 
    //! ninguna seleccionada y almacenada. 

    if ($("#" + codigo_celda).css("background-image") !== "none" && piezaSeleccionada === "") {
      //* Guardamos el valor de la imagen y el color de la casilla.
      piezaSeleccionada = codigo_celda;
      color = $("#" + piezaSeleccionada).css("background-color");
      /* Luego eliminamos el color de esa casilla pero se queda almacenado y cambiamos a amarillo.
      Esto indica que está seleccionada*/
      $("#" + codigo_celda).css("background-color", "yellow");

    } else if ($("#" + codigo_celda).css("background-image") === "none" && piezaSeleccionada !== "") {
      //! Si se hace clic en una casilla vacía y hay pieza seleccionada

      //* Introducir la imagen en la casilla y borrar de la anterior
      $("#" + codigo_celda).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
      $("#" + piezaSeleccionada).css("background-image", "none");
      $("#" + piezaSeleccionada).css("background-color", color);
      piezaSeleccionada = "";
      piezaEliminar = "";


    } else if ($("#" + codigo_celda).css("background-image") !== "none" &&
      piezaSeleccionada !== "") {
      //! Si la casilla de destino está ocupada y tenemos una pieza almacenada
      if (piezaSeleccionada === codigo_celda) {
        //* en caso de que la casilla sea la misma 
        $("#" + codigo_celda).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
        $("#" + codigo_celda).css("background-color", color);
        piezaSeleccionada = "";
        color = "";
        piezaEliminar = "";
        ;

      } else if (piezaSeleccionada !== codigo_celda) {
        /* Si las casillas son diferentes.
        Buscamos el primer hueco disponible en las piezas eliminadas.*/
        let divPieza = obtenerDivPiezaDisponible();
        // Guardamos la casilla de fondo 
        piezaEliminar = codigo_celda;
        if ($("#" + piezaEliminar).css("background-image").includes("rn")
          || $("#" + piezaEliminar).css("background-image").includes("rb")) {
            $("#" + piezaSeleccionada).css("background-color", color);  
          alert("Fin partida");
          piezaSeleccionada = "";
          color = "";
          piezaEliminar = "";
          inicializar();
        } else {
          // Añadimos la pieza a los eliminados  
          $(divPieza).css("background-image", $("#" + piezaEliminar).css('background-image'));
          /* Ponemos de fondo la imagen de la pieza seleccionada inicialmente
          restauramos el color y dejamos la casilla vacía*/
          $("#" + piezaEliminar).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
          $("#" + piezaSeleccionada).css("background-color", color);
          $("#" + piezaSeleccionada).css("background-image", "none");
          piezaSeleccionada = "";
          color = "";
          piezaEliminar = "";
        }
      }

    }
  });

  $("body > div:nth-child(2) > div ").on("click", function () {
    let codigo_celda = $(this).attr("id");
    //* Guardamos el valor de la imagen y el color de la casilla.
    if ($("#" + codigo_celda).css("background-image") !== "none" && piezaSeleccionada === "") {
      //* Guardamos el valor de la imagen y el color de la casilla.
      piezaSeleccionada = codigo_celda;
      color = $("#" + piezaSeleccionada).css("background-color");
      /* Luego eliminamos el color de esa casilla pero se queda almacenado y cambiamos a amarillo.
      Esto indica que está seleccionada*/
      $("#" + codigo_celda).css("background-color", "yellow");

    } else if ($("#" + codigo_celda).css("background-image") === "none" && piezaSeleccionada !== "") {
      //! Si se hace clic en una casilla vacía y hay pieza seleccionada

      //* Introducir la imagen en la casilla y borrar de la anterior
      $("#" + codigo_celda).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
      $("#" + piezaSeleccionada).css("background-image", "none");
      $("#" + piezaSeleccionada).css("background-color", color);
      piezaSeleccionada = "";
      piezaEliminar = "";


    } else if ($("#" + codigo_celda).css("background-image") !== "none" &&
      piezaSeleccionada !== "") {
      //! Si la casilla de destino está ocupada y tenemos una pieza almacenada
      if (piezaSeleccionada === codigo_celda) {
        //* en caso de que la casilla sea la misma 
        $("#" + codigo_celda).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
        $("#" + codigo_celda).css("background-color", color);
        piezaSeleccionada = "";
        color = "";
        piezaEliminar = "";
        ;

      } else if (piezaSeleccionada !== codigo_celda) {
        /* Si las casillas son diferentes.
        Buscamos el primer hueco disponible en las piezas eliminadas.*/
        let divPieza = obtenerDivPiezaDisponible();
        // Guardamos la casilla de fondo 
        piezaEliminar = codigo_celda;
        if ($("#" + piezaEliminar).css("background-image").includes("rn")
          || $("#" + piezaEliminar).css("background-image").includes("rb")) {
            $("#" + piezaSeleccionada).css("background-color", color);  
          alert("Fin partida");
          piezaSeleccionada = "";
          color = "";
          piezaEliminar = "";
          inicializar();
        } else {
          // Añadimos la pieza a los eliminados  
          $(divPieza).css("background-image", $("#" + piezaEliminar).css('background-image'));
          /* Ponemos de fondo la imagen de la pieza seleccionada inicialmente
          restauramos el color y dejamos la casilla vacía*/
          $("#" + piezaEliminar).css("background-image", $("#" + piezaSeleccionada).css("background-image"));
          $("#" + piezaSeleccionada).css("background-color", color);
          $("#" + piezaSeleccionada).css("background-image", "none");
          piezaSeleccionada = "";
          color = "";
          piezaEliminar = "";
        }
      }

    }
  });


  // Función para obtener el ID de un div disponible para mover la pieza
  function obtenerDivPiezaDisponible() {
    for (let i = 1; i <= 32; i++) {
      let piezaDiv = $("#pieza" + i);
      if (piezaDiv.css("background-image") === "none") {
        return "#pieza" + i;
      }
    }
    return "";
  }

  function inicializar() {
    $("body > div:nth-child(1) > div > div").css("background-image","none");
    for (let i = 1; i <= 32; i++) {
      let piezaDiv = $("#pieza" + i);
      piezaDiv.css("background-image", "none");
    }
    let divNeg = document.querySelectorAll('[id^=a7],[id^=b7],[id^=c7],[id^=d7],[id^=e7],[id^=f7],[id^=g7],[id^=h7]');

    divNeg.forEach((div) => {
      $(`#${div.id}`).css('background-image', 'url("./img/pn.gif")');
    });
    $("#a8").css("background-image", "url('./img/tn.gif')");
    $("#h8").css("background-image", "url('./img/tn.gif')");
    $("#b8").css("background-image", "url('./img/cn.gif')");
    $("#g8").css("background-image", "url('./img/cn.gif')");
    $("#c8").css("background-image", "url('./img/an.gif')");
    $("#f8").css("background-image", "url('./img/an.gif')");
    $("#d8").css("background-image", "url('./img/dn.gif')");
    $("#e8").css("background-image", "url('./img/rn.gif')");

    let divBl = document.querySelectorAll('[id^=a2],[id^=b2],[id^=c2],[id^=d2],[id^=e2],[id^=f2],[id^=g2],[id^=h2]');

    divBl.forEach((div) => {
      $(`#${div.id}`).css('background-image', 'url("./img/pb.gif")');
    });
    $("#a1").css("background-image", "url('./img/tb.gif')");
    $("#h1").css("background-image", "url('./img/tb.gif')");
    $("#b1").css("background-image", "url('./img/cb.gif')");
    $("#g1").css("background-image", "url('./img/cb.gif')");
    $("#c1").css("background-image", "url('./img/ab.gif')");
    $("#f1").css("background-image", "url('./img/ab.gif')");
    $("#d1").css("background-image", "url('./img/rb.gif')");
    $("#e1").css("background-image", "url('./img/db.gif')");
  }

});



