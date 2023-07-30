const users = [
    { firstName: "Bradley", 
    lastName: "Bouley", 
    role: "Full Stack Resident" },
    { firstName: "Chloe", 
    lastName: "Alnaji", role: 
    "Full Stack Resident" },
    { firstName: "Jonathan", 
    lastName: "Baughn", 
    role: "Enterprise Instructor" },
    { firstName: "Michael", 
    lastName: "Herman", 
    role: "Lead Instructor" },
    { firstName: "Robert", 
    lastName: "Hajek", 
    role: "Full Stack Resident" },
    { firstName: "Wes", 
    lastName: "Reid", 
    role: "Instructor" },
    { firstName: "Zach", 
    lastName: "Klabunde", 
    role: "Instructor" },
];

//Mapealo a un arreglo de strings firstName-lastName: role

const userStrings = users.map(user => `${user.firstName}-${user.lastName}: ${user.role}`);
    console.log(userStrings);

//Filtrar los usuarios con el rol "Full Stack Resident"
const userfullStackResidents = users.filter(user => user.role === "Full Stack Resident");
    console.log(userfullStackResidents);

//Reduce el arreglo a un objeto en el que cada propiedad es un role y su valor un arreglo con los objetos usuarios que tienen dicho role
const usersByRole = users.reduce((acc, user) => {
    if (acc[user.role]) {
      acc[user.role].push(user);
    } else {
      acc[user.role] = [user];
    }
    return acc;
  }, {});
  console.log(usersByRole);

//Generar una función de búsqueda de un usuario por firstName con find
const findUserByFirstName = (firstName) => {
    return users.find(user => user.firstName === firstName);
  }
  
  const user = findUserByFirstName("Chloe");
  console.log(user);