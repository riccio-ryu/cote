function solution(expression) {
    var answer = 0;
    const mathExp = ['*', '+', '-']
    let priorityArr = Permutation(mathExp, 3)
    const calculated = []
    for (const priority of priorityArr) {
        const expressionArr = expression.split(/(\D)/)
        for (const exp of priority) {
            while (expressionArr.includes(exp)) {
                const index = expressionArr.indexOf(exp)
                expressionArr.splice(index - 1, 3, eval(expressionArr.slice(index - 1, index + 2).join('')))
            }
        }
        calculated.push(Math.abs(expressionArr[0]))
    }
    answer = Math.max(...calculated)
    return answer
}

function Permutation(arr, r) {
    const result = []
    if (r === 1) return arr.map((num) => [num])
    arr.forEach((fixed, index, org) => {
        const rest = [...org.slice(0, index), ...org.slice(index + 1)]
        const permutation = Permutation(rest, r - 1)
        const attached = permutation.map((numbers) => [fixed, ...numbers])
        result.push(...attached)
    })
    return result
}


/*
function solution(expression) {
    let operatorsList = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*'],
    ]

    let maxResult = 0

    for (let operators of operatorsList) {
        const travel = (expression = '', operators = []) => {
            if (operators.length === 0) {
                return expression
            }

            const slicedOperators= operators.slice()
            const operator = slicedOperators.shift()
            const operands = expression.split(operator)

            if (operands.length === 0) {
                return expression
            }

            let result = null

            for (let operand of operands) {
                let child = operator === '*' ? 1 : 0

                if (operand !== '') {
                    child = travel(operand, slicedOperators.slice())    
                }                

                if (child === '') {
                    child = operator === '*' ? 1 : 0
                }

                child = parseInt(child, 10)

                if (result === null) {
                    result = child
                    continue
                }

                if (operator === '*') {
                    result *= child
                }
                else if (operator === '+') {
                    result += child
                }
                else if (operator === '-') {
                    result -= child
                }
            }

            return result
        }

        let result = Math.abs(travel(expression, operators))

        maxResult = Math.max(maxResult, result)
    }

    return maxResult
}
*/
