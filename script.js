function checkNumbers() {
    const userInput = parseInt(document.getElementById("numberInput").value);
    const resultsContainer = document.getElementById("results");
  
    if (isNaN(userInput) || userInput < 1 || userInput > 1000) {
      alert("Por favor, insira um número válido entre 1 e 1000.");
      return;
    }
  
    resultsContainer.innerHTML = "";
  
    // Implementação 1 - Par ou ímpar
    resultsContainer.innerHTML += `<p>${userInput} é ${userInput % 2 === 0 ? 'par' : 'ímpar'}.</p>`;
  
    // Implementação 2 - Primo ou não primo
    resultsContainer.innerHTML += `<p>${userInput} é ${isPrime(userInput) ? 'primo' : 'não primo'}.</p>`;
  
    // Implementação 3 - Fibonacci
    resultsContainer.innerHTML += `<p>${userInput} ${isInFibonacci(userInput) ? 'está' : 'não está'} na sequência de Fibonacci.</p>`;
  
    // Implementação 4 - Múltiplos de 4 com "pin"
    resultsContainer.innerHTML += `<p>Sequência de múltiplos de 4 com 'pin': ${getMultiplesOf4(userInput).join(', ')}.</p>`;
  }
  
  function isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  
  function isInFibonacci(num) {
    let a = 0, b = 1;
    while (b <= num) {
      if (b === num) return true;
      const temp = b;
      b = a + b;
      a = temp;
    }
    return false;
  }
  
  function getMultiplesOf4(num) {
    const multiples = [];
    for (let i = 1; i <= num; i++) {
      if (i % 4 === 0) multiples.push(i + "pin");
    }
    return multiples;
  }