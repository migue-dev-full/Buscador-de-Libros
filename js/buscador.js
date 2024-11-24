const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const autor = document.querySelector('#autor');
const editorial = document.querySelector('#editorial');
const year = document.querySelector('#year');
const precio = document.querySelector('#precio');
const resultado = document.querySelector('#resultado');


//Creando objeto
const datoBusqueda ={
    nombre:'',
    genero:'',
    autor:'',
    editorial:'',
    year:'',
    precio:''

};

const max = new Date().getFullYear()
//año actual "min"
const min = max-100
for(let i=max;i>min;i--){
    //console.log(i)
    //creando etiqueta "option"
    const opcion = document.createElement('option')
    Option.value=i //option con valor de "i" (FOR) 
    opcion.textContent =i //Agg option al html
    year.appendChild(opcion) //donde se agg etiqueta de html desde java
}


document.addEventListener('DOMContentLoaded',()=>{
    //Va mostrar todo lo que hay en el archivo Db.js en ('resultados')
    mostrarLibros(libros)
});

//función 
function mostrarLibros (arregloLibros){
    //console.log(arregloAutos)
    limpiarHtml();//llamado de función para cuando selecciones no muestre todos si no lo que seleccionas
    arregloLibros.forEach(i=>{
        const{nombre,genero,autor,editorial,year,precio} =i
        //imprimiendo
        const libroHTML = document.createElement('p')
        libroHTML.textContent = `Nombre: ${nombre} - Genero: ${genero} - Año: ${year} - Precio:
        ${precio}$ - Autor: ${autor} - Editorial: ${editorial}`
        //mandando a imprimir en el HTML
        resultado.appendChild(libroHTML)
    });
}

//Función para limpiar HTMl cuando seleccionas marca (ya que al cargar aparecen todos los resultados)
function limpiarHtml(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}


//Creando evento para cuando seleccionas genero(objeto de arriba)
//"change" detecta cuando seleccione
genero.addEventListener('change', e=>{
    // console.log(e.target.value) 
    //guardar en el objeto
     datoBusqueda.genero = e.target.value;
     console.log(datoBusqueda)
     filtraLibro();
});


// Autor
autor.addEventListener('change', e=>{
     datoBusqueda.autor = e.target.value;
    console.log(datoBusqueda)
    filtraLibro();
});

// Editorial
editorial.addEventListener('change', e=>{
    datoBusqueda.editorial = e.target.value;
   console.log(datoBusqueda)
   filtraLibro();
});

// Year
year.addEventListener('change', e=>{
    //console.log(e.target.value)
    datoBusqueda.year =Number(e.target.value);//(Number ya que recibes string y necesitas numero(Año)) <= "e.target.value" toma el evento 'e'y el html 'target' y su valor en etiqueta 'option'
   //console.log(datoBusqueda)// <= verificando que se guarde en el objeto en el campo de year
    filtraLibro();//<=llamando a la función
})

// Precio
precio.addEventListener('change', e=>{
    //console.log(e.target.value);
    datoBusqueda.precio =Number(e.target.value);
   // console.log(datoBusqueda);
    filtraLibro();
})



//Función para filtrar
function filtraLibro(){
    const resultado1 =
     libros.filter(filtrarGenero).filter(filtrarAutor)
     .filter(filtrarEditorial).filter(filtrarYear)
     .filter(filtrarPrecio);

    

    //comentado ya que se necesita que ingrese a esa función después del "if" "mostrarAutos(resultado)";
    
    //Mensaje si no encuentra criterio de búsqueda// los log son para verificar donde va ingresando 
      // console.log(resultado.length)
      // console.log(resultado)
    if(resultado1.length === 0){
       //console.log('No hay resultados')
       const noResult = document.createElement('p');
       //Se usó "textcontet" porque solo permite texto. "inneHTML" permite texto(dentro de la etiqueta)pero en especial es para etiquetas HTML
       noResult.textContent = 'No hay resultados para su búsqueda';
       //Agg clase de css "noResult.classList.add('alerta')"
       noResult.classList.add('alerta','error'); //<= clases asignadas de css
       limpiarHtml();//<= limpiando html para mostrar solo el mensaje de noResult
       resultado.appendChild(noResult);//<= impimiendo mensaje de noResult
    }else{
       mostrarLibros(resultado1)//<= Este es la funcion que antes estaba fuera del "if" ('se cambió a resultado1 para evitar confusion por otro con ese nombre o algo asi')
    }
};


function filtrarGenero(libro){
    if(datoBusqueda.genero){
        return libro.genero.trim().toLowerCase() === datoBusqueda.genero.trim().toLowerCase();
    }
    return libro;
}

function filtrarAutor(libro){
    if(datoBusqueda.autor){
        return libro.autor === datoBusqueda.autor; 
    }
    return libro;
}

function filtrarEditorial(libro){
    if(datoBusqueda.editorial){
        return libro.editorial === datoBusqueda.editorial; 
    }
    return libro;
}

function filtrarYear(libro){
    if(datoBusqueda.year){
        return libro.year === datoBusqueda.year; 
    }
    return libro;
}

function filtrarPrecio(libro){
    if(datoBusqueda.precio){
        return libro.precio === datoBusqueda.precio; 
    }
    return libro;
}