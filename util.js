export const obtener_generos = (arr, genero)=>{
    //arr.map me devuelve un array
    const res = arr.filter(e => e.genero.toUpperCase() == genero.toUpperCase())

    return res
}

export const obtener_promedio = (arr)=>{
    const duracion = arr.reduce((acc,cur)=> acc + cur.duracion, 0)
    const cantPeliculas = arr.length

    const res = duracion / cantPeliculas

    return res
}