const libros = [
    // {
    //     nombre: '',
    //     genero: '',
    //     autor: '',
    //     editorial: '',
    //     año: ''
    // },
    // Thriller psicológico, Terror psicológico, Aventura, Caballería, Drama, Histórico, Novela de formación, Contemporánea, 
    // Misterio histórico, Romance histórico, Memorias, Filosófica, Thriller, Gótico,Sátira
    // *

    


    { 
      nombre: 'El nombre del viento',
      genero: 'Fantasía', 
      autor: 'Patrick Rothfuss', 
      editorial: 'Nova', 
      year: 2007, 
      precio: 20000,
    },
    {   
        nombre: 'Cien años de soledad', 
        genero: 'Realismo magico', 
        autor: 'Gabriel García Márquez', 
        editorial: 'Sudamericana', 
        year: 1967, 
        precio: 70000,
    },
    {   
        nombre: '1984', 
        genero: 'Distopia', 
        autor: 'George Orwell', 
        editorial: 'Debolsillo', 
        year: 1949 ,
        precio: 40000,
    },
    {   
        nombre: 'El principito', 
        genero: 'Infantil y juvenil', 
        autor: 'Antoine de Saint-Exupéry', 
        editorial: 'Salamandra', 
        year: 1943, 
        precio: 10000,
    },
    {   
        nombre: 'Orgullo y prejuicio', 
        genero: 'Romance', 
        autor: 'Jane Austen', 
        editorial: 'Debolsillo', 
        year: 1813,
        precio: 60000,
    },
    {   
        nombre: 'El alquimista', 
        genero: 'Autoayuda', 
        autor: 'Paulo Coelho', 
        editorial: 'Planeta', 
        year: 1988,
        precio: 20000
    },
    { 
        nombre: 'El señor de los anillos', 
        genero: 'Fantasía', 
        autor: 'J.R.R. Tolkien', 
        editorial: 'Minotauro', 
        year: 1954 ,
        precio: 80000
    },
    { 
        nombre: 'Matar a un ruiseñor', 
        genero: 'Novela historica', 
        autor: 'Harper Lee', 
        editorial: 'Debolsillo', 
        year: 1960, 
        precio: 10000
    },
    { 
        nombre: 'El hobbit', 
        genero: 'Fantasía', 
        autor: 'J.R.R. Tolkien', 
        editorial: 'Minotauro', 
        year:1937, 
        precio: 30000
    },
    { 
        nombre: 'El gran Gatsby', 
        genero: 'Novela', 
        autor: 'F. Scott Fitzgerald', 
        editorial: 'Debolsillo', 
        year: 1925, 
        precio: 50000
    },
    { 
        nombre: 'El extranjero', 
        genero: 'Existencialismo', 
        autor: 'Albert Camus', 
        editorial: 'Cátedra', 
        year:1942 ,
        precio: 70000
    },
    { 
        nombre: 'Crimen y castigo', 
        genero: 'Terror', 
        autor: 'Fyodor Dostoievski', 
        editorial: 'Cátedra', 
        year:1866 ,
        precio: 40000,
    },
    { 
        nombre: 'El retrato de Dorian Gray', 
        genero: 'Terror', 
        autor: 'Oscar Wilde', 
        editorial: 'Cátedra', 
        year:1890 ,
        precio: 40000
    },
    { 
        nombre: 'Moby Dick', 
        genero: 'Aventura', 
        autor: 'Herman Melville', 
        editorial: 'Cátedra', 
        year:1851 ,
        precio: 80000
    },
    { 
        nombre: 'Don Quijote de la Mancha', 
        genero: 'Caballeria', 
        autor: 'Miguel de Cervantes', 
        editorial: 'Cátedra', 
        year:1605 ,
        precio: 50000
    },
    { 
        nombre: 'Ana Karenina', 
        genero: 'Drama', 
        autor: 'León Tolstói', 
        editorial: 'Cátedra', 
        year:1877, 
        precio: 60000
    },
    { 
        nombre: 'Los miserables', 
        genero: 'Historico', 
        autor: 'Victor Hugo', 
        editorial: 'Cátedra', 
        year:1862 ,
        precio: 20000
    },
    { 
        nombre: 'El guardián entre el centeno', 
        genero: 'Novela de formacion', 
        autor: 'J.D. Salinger', 
        editorial: 'Debolsillo', 
        year:1951, 
        precio: 30000
    },
    { 
        nombre: 'El color púrpura', 
        genero: 'Contemporanea', 
        autor: 'Alice Walker', 
        editorial: 'Debolsillo', 
        year:1982 ,
        precio: 40000,
    },
    { 
        nombre: 'Un mundo feliz', 
        genero: 'Distopia', 
        autor: 'Aldous Huxley', 
        editorial: 'Debolsillo', 
        year:1932, 
        precio: 20000
    },
    { 
        nombre: 'El nombre de la rosa', 
        genero: 'Misterio historico', 
        autor: 'Umberto Eco', 
        editorial: 'Lumen', 
        year:1980, 
        precio: 80000
    },
    { 
        nombre: 'El paciente inglés', 
        genero: 'Romance historico', 
        autor: 'Michael Ondaatje', 
        editorial: 'Alfaguara', 
        year:1992, 
        precio: 30000
    },
    { 
        nombre: 'Memorias de una geisha', 
        genero: 'Memorias', 
        autor: 'Arthur Golden', 
        editorial: 'Planeta', 
        year:1997, 
        precio: 70000
    },
    { 
        nombre: 'La insoportable levedad del ser', 
        genero: 'Filosofica', 
        autor: 'Milan Kundera', 
        editorial: 'Tusquets', 
        year:1984 ,
        precio: 60000
    },
    { 
        nombre: 'El código Da Vinci', 
        genero: 'Terror', 
        autor: 'Dan Brown', 
        editorial: 'Planeta', 
        year:2003 ,
        precio: 45000
    },
    { 
        nombre: 'El perfume', 
        genero: 'Gotico', 
        autor: 'Patrick Süskind', 
        editorial: 'Anagrama', 
        year:1985 ,
        precio: 15000
    },
    { 
        nombre: 'Rebelión en la granja', 
        genero: 'Satira', 
        autor: 'George Orwell', 
        editorial: 'Debolsillo', 
        year:1945, 
        precio: 50000
    },
    { 
        nombre: 'El hobbit', 
        genero: 'Fantasia', 
        autor: 'J.R.R. Tolkien', 
        editorial: 'Minotauro', 
        year:1937 ,
        precio: 30000
    },
    { 
        nombre: 'El gran Gatsby', 
        genero: 'Novela', 
        autor: 'F. Scott Fitzgerald', 
        editorial: 'Debolsillo', 
        year:1925 ,
        precio: 70000
    },
    { 
        nombre: 'El extranjero', 
        genero: 'Existencialismo', 
        autor: 'Albert Camus', 
        editorial: 'Cátedra', 
        año:1942, 
        precio: 10000
    },

]