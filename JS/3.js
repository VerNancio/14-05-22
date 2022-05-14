hoje = new Date()//;

xDia = hoje.getDay();//


diaSemana = new Array(7);
pratoDia = new Array(7);
precoDia = new Array(7);

//dia da semana
diaSemana[0] = "dmng";
diaSemana[1] = "sgnd";
diaSemana[2] = "trç";
diaSemana[3] = "qrt";
diaSemana[4] = "qnt";
diaSemana[5] = "sxt";
diaSemana[6] = "sbd";

//prato do dia    
pratoDia [0] = "arroz"
pratoDia [1] = "feijão"
pratoDia [2] = "batata"
pratoDia [3] = "sanduiche"
pratoDia [4] = "arroz com carne"
pratoDia [5] = "carne"
pratoDia [6] = "frango"

// preço do prato
precoDia [0] = "3"
precoDia [1] = "5"
precoDia [2] = "4"
precoDia [3] = "10"
precoDia [4] = "9"
precoDia [5] = "6"
precoDia [6] = "7"

document.write(" O número da semana é:" + ( xDia+1));
document.write("<p><b>"+"hoje é:" + diaSemana [xDia]);
document.write("<p>" + " O prato do dia é:" + pratoDia [xDia]);
document.write("<p>" + "O preço é:" + precoDia [xDia]);
