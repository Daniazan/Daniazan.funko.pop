var app = {};
var myCallBack = datos =>{
    console.log(datos);
    app.noticias=datos;
    var html=""
    html+="<h2>Exclusivos</h2>"
    app.noticias.map(noticia => {
        html+="<img src=' "+noticia.img+" '></img>";
        for(let propiedad of Object.keys(noticia)){
                html+="<div>"+propiedad+":"+noticia[propiedad]+"</div>"
        }

            html+="<br/>"
            })




    document.getElementById("excl").innerHTML = html;
}


