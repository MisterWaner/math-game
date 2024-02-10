const number1: number = Math.floor(Math.random() * 100);
const number2: number = Math.floor(Math.random() * 100);

function generateAddition(): string {
    return `Quelle est le résultat de ${number1} + ${number2} ?`;
}

const additionAnswer: number = number1 + number2;

export { generateAddition, additionAnswer };