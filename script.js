document.getElementById('checkButton').addEventListener('click', checkPrimeNumber);
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPrimeNumber();
    }
});

// Toggle Dark/Light Mode
document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class
    // Change toggle button text
    this.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

function checkPrimeNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');

    if (numberInput === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }

    const number = parseInt(numberInput);
    if (isNaN(number) || number <= 1) {
        resultElement.textContent = 'Please enter a valid positive integer greater than 1.';
        return;
    }

    const isPrime = checkPrime(number);
    resultElement.textContent = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
}

function checkPrime(num) {
    if (num <= 1) return false; // 1 and numbers less than 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
