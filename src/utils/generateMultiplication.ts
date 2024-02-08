const numberArray1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberArray2: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const randomIndex: number = Math.floor(Math.random() * numberArray1.length);
const randomIndex2: number = Math.floor(Math.random() * numberArray2.length);

const a: number = numberArray1[randomIndex];
const b: number = numberArray2[randomIndex2];

function generateQuestion (): string {
    return `Quelle est le résultat de ${a} x ${b} ?`;
}

const answer: number = a * b;


export { generateQuestion, answer };



