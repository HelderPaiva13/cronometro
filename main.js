function startAnimation() {
  var resultElement = document.getElementById('result');
  resultElement.innerText = "";
  var startButton = document.getElementById('startButton');
  var input = document.getElementById('input');
  console.log(input)

  startButton.disabled = true;
  
 
  var maxCount = 100; // Número máximo de iterações

  if(input !== null){
    const numero = parseInt(input.value);

    if(!isNaN(numero)){ 
      var count = 0;
      var intervalId = setInterval(function() {
        if (count >= maxCount) {
          clearInterval(intervalId);
          resultElement.innerText = generateRandomNumber(numero);
          startButton.disabled = false;
         
        } else {
          resultElement.innerText = generateRandomNumber(numero);
          count++;
        }
      }, 100); // Intervalo entre cada iteração (em milissegundos)
    } else {
      alert('Digite um número válido!');
      input.value = null;
      startButton.disabled = false;
    }
  } else {
    startButton.disabled = false;
  }

  }
  

function generateRandomNumber(n) {
  return Math.floor(Math.random() * n) + 1; // Gera um número aleatório entre 1 e 100
}

