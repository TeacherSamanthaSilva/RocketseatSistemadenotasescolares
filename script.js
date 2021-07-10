let nota1 = 7;
let nota2 = 5;
let nota3 = 8;
let nota4 = 6;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media <= 10 || media >=8){
    console.log("Conceito A");
    console.log("Aluno aprovado");
}else if(media <=8 || media >=6){
    console.log("Conceito B");
    console.log("Aluno Aprovado");
}else if(media <=6 || media >=4){
    console.log("Conceito C" )
    console.log("Aluno em recuperação");
}else if(media <=4 || media >= 2){
    console.log("Conceito D");
    console.log("Aluno reprovado");
}else if (media >= 2 || media ==0){
    console.log("Conceito E");
    console.log("Aluno Reprovado");
}else{
    console.log("Conceito F");
    console.log("Aluno Reprovado");
}

