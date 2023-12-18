let 
    peso = Number(prompt('Digita tu peso'));
    altura = Number(prompt('Digita tu altura'));

    IMC = (peso / (altura**2));

if(IMC < 18.5){
    console.log('Bajo de peso');
}
else if (IMC > 18.5 && IMC < 24.9){
    console.log('Normal de peso');
}
else if (IMC > 25 && IMC < 29.9){
    console.log('Sobrepeso');
}
else {
    console.log('Obeso');
}
