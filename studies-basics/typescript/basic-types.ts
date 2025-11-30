// Exemplos de Tipagem Estática

// Tipos Primitivos
let isCompleted: boolean = true;
let total: number = 42;
let name: string = "TypeScript Study";

// Arrays
let items: string[] = ['HTML', 'CSS', 'JS'];
let numbers: Array<number> = [1, 2, 3];

// Tupla (Array com tipos fixos e ordem definida)
let user: [string, number] = ["Alice", 30];

// Enum (Conjunto de constantes nomeadas)
enum Status { Pending, Success, Error }
let currentStatus: Status = Status.Success;

// Função com tipagem de argumentos e retorno
function add(a: number, b: number): number {
    return a + b;
}

// Interface (Define a estrutura de um objeto)
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Opcional
}

const developer: Person = {
    firstName: "Bob",
    lastName: "Dev",
    age: add(20, 5)
};

console.log(`Olá, ${developer.firstName} (Status: ${Status[currentStatus]})`);