const url = 'https://api.giphy.com/v1/gifs/search';
const busqueda = '?q=';
const key = '&api_key=Rp6YidxPjnYQkHnoGkOuS4mrf2PSD03Y';
const limite = '&limit=4'

let q = "";

let urlcompleta = "";

const btn = document.getElementById('btn');

btn.onclick = () => {

    document.getElementById('portfolio').innerHTML = "";

    q = document.getElementById("busqueda").value;
    urlcompleta = url + busqueda + q + key + limite;
    getData()
}

const getData = async () => {
    await fetch(urlcompleta).then((response) => {
        return response.json();
    }).then((giphy) =>{
        console.log(giphy)
        for(i=0; i < giphy.data.length; i++){
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "nb-3";
            document.getElementById('portfolio').appendChild(gif)

        }
    })
}

getData();
