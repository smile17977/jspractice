
const a = 10
const b = 15

export function compare(a, b) {
    console.log(Math.max(a, b))
}

compare(a, b)

export function getNameOfMonth(number) {
    switch (number) {
        case 0:  console.log("Январь"); break
        case 1:  console.log("Февраль"); break
        case 2:  console.log("Март"); break
        case 3:  console.log("Апрель"); break
        case 4:  console.log("Май"); break
        case 5:  console.log("Июнь"); break
        case 6:  console.log("Июль"); break
        case 7:  console.log("Август"); break
        case 8:  console.log("Сентябрь"); break
        case 9:  console.log("Октябрь"); break
        case 10: console.log("Ноябрь");  break
        case 11: console.log("Декабрь"); break
    }
}

getNameOfMonth(1)

const sSquare = 441
const sCircle = 346

export function isCircleInSquare(sSquare, sCircle) {
    return sCircle <= 3.14 * sSquare / 4
}

isCircleInSquare(sSquare, sCircle)