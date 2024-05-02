
    let urlImagenes = "https://jsonplaceholder.typicode.com/photos"
// funcion que raliza la peticcion appi 
function buscadorImagen(url) {
    // tipo de llamado del appi
    fetch(url,{
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    })
    // then en le que le idico que toda la info traida del api se traiga en formamato json
    .then(Response=> Response.json())
    // then en el que se ralisa la mustra de datos 
    .then(data =>{
        // camputar del id del div del html
        let main = document.getElementById('main')
        let i = 1
        // forEach en que cramos toda la interface visual para mostar la info de la api 
        data.forEach(element => {
            // se crea condicio en el que limita la muesta de 10 objetos dle api
            if (i>10) {
                return 
            }
            // creacion de etiqueta div desde el dom
            let divTotal = document.createElement('div')

            let div1= document.createElement("div")
            // creacion de etiqueta img desde el dom
            let img = document.createElement('img')
            img.src = element.url
            // AppendChild para agregar nuevos elementos a un documento existente o para mover un elemento de la página
            div1.appendChild(img)
            divTotal.appendChild(div1)

                // "albumId": 1,
                // "id": 1,
                // "title": "accusamus beatae ad facilis cum similique qui sunt",
                // "url": "https://via.placeholder.com/600/92c952",
                // "thumbnailUrl": "https://via.placeholder.com/150/92c952
                let div2 = document.createElement('div');
            let id = document.createElement("p");
                id.innerHTML = `ID: ${element.id}`;
            let albumId = document.createElement('p');
                albumId.innerHTML = `albumId: ${element.albumId}`;
            let titulo = document.createElement('p')
                titulo.innerHTML = `titulo: ${element.title}`;
            let url = document = document.createElement('p');
                url.innerHTML = `url: ${element.url}`
            

            div2.appendChild(id)
            div2.appendChild(albumId)
            div2.appendChild(titulo)
            div2.appendChild(url)
            divTotal.appendChild(div1)
            divTotal.appendChild(div2)
            main.appendChild(divTotal)
            i++
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}

buscadorImagen(urlImagenes)
