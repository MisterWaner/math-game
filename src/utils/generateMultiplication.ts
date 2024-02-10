const number1: number = Math.floor(Math.random() * 10);
const number2: number = Math.floor(Math.random() * 10);

function generateMultiplication(): string {
    return `Quelle est le résultat de ${number1} x ${number2} ?`;
}

const multiplicationAnswer: number = number1 * number2;


export { generateMultiplication, multiplicationAnswer };



