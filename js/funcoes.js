function ativa_menu() {
    document.getElementById("drop_link").style.display = "block";
    document.getElementById("btn_drop_menu").tabindex = "1";
}

function fecha_menu() {
    document.getElementById("btn_fechar").tabindex = "1";
    document.getElementById("drop_link").style.display = "none";
}

function calcular_total(){
    var Qtd = parseInt(document.getElementById("cQtd").value);
    total = Qtd * 308.87;
    document.getElementById('cTot').value=total;

}