import { question } from 'readline-sync';

type operator = '+' | '-' | '*' | '/'

function main(): void{
    const firststr: string = question(`Enter first number:\n`);
    const operator: string = question(`Enter operator:\n`);
    const secondstr: string = question(`Enter second number:\n`);
    
    const validInput: boolean = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    
    if(validInput)
    {
        const firstnum: number = parseInt(firststr);
        const secondnum: number = parseInt(secondstr);
        const result = calculate(firstnum, operator as operator, secondnum);
        console.log(result);
    }
    else
    {
        console.log(`Invalid input!`);
        main();
    }
}

function calculate(firstnum: number, operator:operator , secondnum: number)
{
    switch(operator)
    {
        case '+':
            return firstnum + secondnum;

        case '-':
            return firstnum - secondnum;

        case '*':
            return firstnum * secondnum;

        case '/':
            return firstnum / secondnum;        
    }
}

function isOperator(op: string): boolean
{
    switch(op)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;    
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();