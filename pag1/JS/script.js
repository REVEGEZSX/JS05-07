function agregarelemento()
{
    var micajadetexto = document.getElementById("agregar");
    var ul = document.getElementById("miul")

    var li = document.createElement("li");
    var texto_li = document.createTextNode(micajadetexto.value);
    li.appendChild(texto_li);
    ul.appendChild(li);

}