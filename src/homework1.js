const a = 5
const b = 10

multipleAndSum(a, b)
const c = "bug"
const d = "buzz"

sumOfLength(c, d)

export function multipleAndSum(a, b) {
    console.log(a * b)
    console.log(a + b)
}

export function sumOfLength(a, b) {
    console.log(a.length + b.length)
}