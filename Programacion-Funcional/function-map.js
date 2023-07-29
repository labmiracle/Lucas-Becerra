const characters = [
    { name: 'Luke Skywalker', 
        height: '172', 
        mass: '77', 
        eye_color: 'blue', 
        gender: 'male' 
    },
    { name: 'Darth Vader', 
        height: '202', 
        mass: '136', 
        eye_color: 'yellow', 
        gender: 'male' 
    },
    { name: 'Leia Organa', 
        height: '150',
        mass: '49', 
        eye_color: 'brown', 
        gender: 'female' 
    },
    { name: 'Anakin Skywalker', 
        height: '188', 
        mass: '84', 
        eye_color: 'blue', 
        gender: 'male' 
    }
  ];

//Obtener un arreglo de todos los nombres

  const namesArray = characters.map(characters => characters.name); 
  
  console.log(namesArray);

//Obtener un arreglo de todas las alturas

  const heightsArray = characters.map(characters => characters.height);

  console.log (heightsArray);

//Obtener un arreglo de objetos con las propiedades nombres y alturas  

  const nameAndHeightArray = characters.map(characters => ({name:characters.name, height:characters.height }));

  console.log (nameAndHeightArray);