import {readFile} from 'fs/promises';
import { obtener_generos, obtener_promedio } from './util.js';

const file = await readFile('./data.json', 'utf-8')

const data = JSON.parse(file)

const peliculasTerror = obtener_generos(data, "terror")

if(peliculasTerror.lenght > 0){
    console.log("peliculas de terror =>", peliculasTerror)
}else{
    console.log("No hay peliculas de ese genero")
}

console.log(obtener_promedio(data))