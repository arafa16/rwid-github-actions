export function arraySum(numbers: Array<number>) : number {

    let sum = 0;

    for(let index = 0; index <numbers.length; index++){
        const number = numbers[index];

        sum = sum +number
    }

    return sum;
}
