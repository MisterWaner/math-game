const number1: number = Math.floor(Math.random() * 100);
const number2: number = Math.floor(Math.random() * 100);

function generateSoustraction(): string {
    if (number1 > number2) {
        return `Quelle est le résultat de ${number1} - ${number2} ?`;
    } else if (number1 < number2) {
        return `Quelle est le résultat de ${number2} - ${number1} ?`;
    } else {
        return `Quelle est le résultat de ${number1} - ${number2} ?`;
    }
}

function soustractionAnswer(): number {
    if (number1 > number2) {
        return number1 - number2;
    } else if (number1 < number2) {
        return number2 - number1;
    } else {
        return number1 - number2;
    }
}

export { generateSoustraction, soustractionAnswer };