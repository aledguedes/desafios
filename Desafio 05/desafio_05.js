let usuarios = [
    { nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"] },
    { nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
];
function arrayNomes(users) {
    for(let keys of users){
        console.log(`O ${keys.nome}, possui as habilidade: ${keys.habilidades.join(", ")}`);
    }
}
arrayNomes(usuarios);