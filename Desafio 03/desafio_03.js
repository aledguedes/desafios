function temHabilidade(skills) {
    if (skills.indexOf('Java') !== -1){
        console.log("Tem a Skills")
    }
    else {
        console.log("Não tem a Skills")
    }
}
let skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
