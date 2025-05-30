//variables
let pronombres = ['el', 'la'];
let adjs = ['gran', 'peque'];
let nombres = ['Alex', 'Gabri'];
let ext = ['.com', '.es'];

//boton generador de dominios en consola
document.getElementById('BtnConsola').addEventListener('click', function() {
    console.clear() //limpiar consola
    for (let inicio of pronombres){
        for (let medio of adjs){
            for (let fin of nombres){
                for (let puntos of ext){
                    let dominio = "www." + inicio + medio + fin + puntos 
                    console.log(dominio)
                }
            }
        }
    }
})


//boton generador de dominios al pulsar
function generarDominios() {
    const lista = document.getElementById("combinaciones");
    lista.innerHTML = ""; //limpia la lista
    for (let inicio of pronombres){
        for (let medio of adjs){
            for (let fin of nombres){
                for (let puntos of ext){
                    let dominios = "www." + inicio + medio + fin + puntos;
                    const items = document.createElement ("li");
                    items.textContent = dominios;
                    lista.appendChild (items) ;
                }
            }
        }
    }
}
document.getElementById('BtnTodos').addEventListener('click', generarDominios)


//boton generador de dominios de a uno
function obtenerAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
    }
//Generar un dominio Aleatorio
function generarDominioAleatorio(){
    const inicio = obtenerAleatorio(pronombres);
    const medio = obtenerAleatorio(adjs);
    const fin = obtenerAleatorio(nombres);
    const puntos = obtenerAleatorio(ext);
    return "www." + inicio + medio + fin + puntos;
}
//Mostrar resultado
function mostrarDominio(){
    const dominio = generarDominioAleatorio();
    document.getElementById("combinacion").textContent = dominio
}
// Asignar el evento al botón
document.getElementById("BtnUno").addEventListener('click', mostrarDominio);


//Generador de dominios de inicio en pantalla
const lista = document.getElementById("url")
lista.innerHTML = ""
for (let inicio of pronombres){
   for (let medio of adjs){
     for (let fin of nombres){
       for (let puntos of ext){
        let dominios = "www." + inicio + medio + fin + puntos   
            //console.log (dominios)
            const items = document.createElement ("li")
            items.textContent = dominios
            lista.appendChild (items)
        };
      };
    };
  };