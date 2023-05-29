
function mostrarAlerta() {
    alert("Mostrando alerta");
}

$(document).ready(function(){
    // $(window).on("beforeunload", function(event){
    //     localStorage.setItem("leavedAt", new Date(Date.now()).toLocaleString())
    // })
    // alert("Documento listo con JQuery")
    // $(".btn_aqua").on("click", function(){
    //     mostrarAlerta();
    // })

    $("#btn_eliminar").hide();

    $("#btn_agregar").click(function(){
        $("#btn_eliminar").show();
        // $("#btn_agregar").hide();
        $(this).hide(); //  es lo mismo que el de arriba
    })
    $("#btn_eliminar").click(function(){
        $("#btn_agregar").show();
        // $("#btn_agregar").hide();
        $(this).hide(); // es lo mismo que el de arriba
    })

})