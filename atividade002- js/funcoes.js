// Sintaxe:
// $(seletor).acao()

$(document).ready(function(){

    // Todo conteúdo jQuery
    console.log("Documento pronto para uso.");

    // P -> click -> ocultar
    $("p").click(function(){
        $(this).hide();
    });

    $("button[name='exibir']").click(function(){
        $("#links").show();
    });

    $("button[name='ocultar']").click(function(){
        $("#links").hide();
    });

    $("button[name='mudar']").click(function(){
        $("#titulo").addClass("jumbotron");
        $("button").addClass("btn btn-primary");
        $("#links").addClass("alert alert-info");

        $("p").removeClass("h2");

        $("a").toggleClass("btn btn-warning");
    });
    $("button[name='validar1']").click(function(){
        if ($("#g1").val() == "0") {
            alert("Selecione uma opcao!");
            $("#g1").focus();
        } else {
            alert($("#g1 option:selected").val());
        }
    });
    $("button[name='validar2']").click(function(){
        if ($("#g2").val() == "0") {
            alert("Selecione uma opcao!");
            $("#g2").focus();
        } else {
            alert($("#g2 option:selected").val());
        }
    });

    $("button[name='validar3']").click(function(){
        if ($("#g3").val() == "0") {
            alert("Selecione uma opcao!");
            $("#g3").focus();
        } else {
            alert($("#g3 option:selected").val());
        }
    });

    $("button[name='validar4']").click(function(){
        if ($("#g4").val() == "0") {
            alert("Selecione uma opcao!");
            $("#g4").focus();
        } else {
            alert($("#g4 option:selected").val());
        }
    });


    $("button[name='validartri']").click(function(){
        if ($("#tri").val() == "0") {
            alert("Selecione uma opcao!");
            $("#tri").focus();
        } else {
            alert($("#tri option:selected").val());
        }
    });

    $("button[name='validarquad']").click(function(){
        if ($("#quad").val() == "0") {
            alert("Selecione uma opcao!");
            $("#quad").focus();
        } else {
            alert($("#quad option:selected").val());
        }
    });
    $("button[name='validarcirc']").click(function(){
        if ($("#circ").val() == "0") {
            alert("Selecione uma opcao!");
            $("#circ").focus();
        } else {
            alert($("#circ option:selected").val());
        }
    });
    $("button[name='validarret']").click(function(){
        if ($("#ret").val() == "0") {
            alert("Selecione uma opcao!");
            $("#ret").focus();
        } else {
            alert($("#ret option:selected").val());
        }
    });






});
