function experiente(anos) {
    switch (anos) {
        case anos > 0 && anos <= 1:
            console.log('Iniciante');
            break;
        case anos > 1 && anos <= 3:
            console.log('Intermediário');
            break;
        case anos > 3 && anos <= 6:
            console.log('Avançado');
            break;
        default:
            console.log('Jedi Master');
            break;
    }
    console.log(anos);
}

let anosExperiência = 3;
experiente(anosExperiência);