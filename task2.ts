//TYPESCRIPT CHALLANGE PACK

// assignment NO 1
interface Product {
            name: string,
            price: number,
            inStock: boolean
}
const productName: Product[] = [
            { name: "beans & shawarma", price: 2000, inStock: true },
            { name: "okpa & closeup ", price: 3000, inStock: false },
            { name: "meatpie & egusi", price: 7000, inStock: true },
            { name: "utazi & golden morn", price: 7000, inStock: false }
]
const AvailableProduct = (): void => {
            for (const { name, inStock, price } of productName) {
                        if (inStock) {
                                    console.log(`${name} is in stock for $ ${price}`);
                        }
                        else {
                                    console.log(`${name} is out of stock`)
                        }
            }
}
AvailableProduct()


// assignment NO 2
const value = (AnyValue: string | number) => {
            if (typeof AnyValue === "string") {
                        return AnyValue.toUpperCase()
            }
            else if (typeof AnyValue === "number") {
                        return AnyValue * 2
            }
}
console.log(value("odinaka"))


// // assignment NO 3
interface Person {
            name: string
}
const person1: Person = { name: "bassy" }
interface student extends Person {
            score: number
}
const CalcScore = (person: student) => {
            return `${person.name} scored ${person.score}`
}
const students: student = { name: "bassy", score: 100 }
console.log(CalcScore(students))


// assignment NO 4
enum Role {
            admin,
            user,
            guest,
}
const RoleSelector = (checkRole: Role) => {
            switch (checkRole) {
                        case Role.admin:
                                    return "FULL ACCESS"

                        case Role.user:
                                    return "LIMITED ACCESS"

                        case Role.guest:
                                    return "NO ACCESS"
            }
}
console.log(RoleSelector(Role.user))


//assignment NO 5
interface user {
            name: string,
}
interface contact {
            email: string
}
type UserContact = user & contact

const Uservalue = (person: UserContact): string => {
            return `${person.name} - ${person.email}`
}
console.log(Uservalue({ name: "bassy", email: "bassygit@gmail.com" }))


//assignment NO 6
interface students {
            name: string,
            scores: number[]
}
const studentInfo: students = {
            name: "odinaka",
            scores: [20, 30, 40, 50]
}
const CalculateScores = (recordscores: number[]): number => {
            return recordscores.reduce((sum, num) => sum + num, 0)
}
console.log(CalculateScores(studentInfo.scores))


//assignment NO 7
const values = (value: any) => {
            if (typeof (value) === "string") {
                        console.log("string")
            }
            else if (typeof (value) === "number") {
                        console.log("number")

            } else if (typeof (value === "unknown")) {
                        console.log("unknown type")
            }
}
values(2)
