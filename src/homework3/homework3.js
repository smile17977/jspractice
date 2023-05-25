
export function addNumbersBetween(a, b) {
    let sum = 0

    for (let value = a; value <= b; value++) {
        sum += value
    }

    console.log(sum)
}

addNumbersBetween(50, 100)

export function multiplicationTableFor(a) {
    let multiplier = 1

    while (multiplier <= 9) {
        console.log(`${a} x ${multiplier} = ${a * multiplier}`)
        multiplier += 1
    }
}

multiplicationTableFor(7)