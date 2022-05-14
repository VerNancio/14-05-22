/*var a, b, c, d;

a=50;
b=100;
c=25;
d= 50;

document.write("o resultado da primeira conta é:"+ a/2);
document.write("<p>" + "o resiltado da segunda conta é:"+ b*5 + "</p>");
document.write("<p>" +"o resultado da terceira é:" + c*2 + "</p>");
document.write("<p>" +"o resultado da quarta é:" + a-d + "</p>");
document.write("<p>" +"o resultado da ultima é:" + a/2 + "</p>"); */

valor = new Array(3,2,4,1,5);
i=0;
total = 0;
while (total < 10){
    total += valor[i]; i++;
}
document.write("Total =" + total);