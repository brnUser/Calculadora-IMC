const form = document.getElementById('form');

form.addEventListener('submit', function( event ) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value.replace(',', '.');// replace= converte o "," em ".".

    const bmi = (weight / (height * height)).toFixed(2);
    
    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');//ao clicar, remove o dysplay:none.


    if(bmi < 18.5) {
        description = "Cuidado, você esta abaixo do peso!"
    } else if (bmi > 18.5 && bmi <= 24.9) {
        description = "Você esta no peso ideal";
    } else if    (bmi > 25 && bmi <= 29.9) {  
        description = "Atenção, você está acima do peso!";
    } else if    (bmi > 30 && bmi <= 40) {      
        description = "Obesidade grau I - levemente acima do peso";     
    } else if    (bmi > 40 && bmi <= 50) {                
        description = "Obesidade grau II - acima do peso";                
    } else {                      
        description = "Obesidade grau III - muito acima do peso";           
    }   

    value.innerHTML = `Seu IMC é ${bmi}<br>${description}`;
    
});
    
