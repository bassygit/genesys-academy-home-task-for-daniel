// QUESTION NO 1
interface User {
            name: string,
            age: number
}
const usercontainer: User = {
            name: "bassy",
            age: 90
}
const getUserCategory = (user: User): string => {
            if (user.age < 18)
                        return ("minor")
            else if (user.age < 60)
                        return ("adult")
            else {
                        return ("senior")
            }
}
console.log(getUserCategory(usercontainer))


// QUESTION NO 2
const processValue = (value: number | string) => {
            if (typeof value === "number")
                        return ` "double: ${value * 2} "`
            else if (typeof value === "string")
                        return `"Length: ${value.length}"`
}
console.log(processValue("hello"))

// QUESTION NO 3
interface Product {
            id: number
            name: string
            price: number
}
const Productvalues: Product[] = [
            { id: 1, name: "zobo & yam", price: 2000 },
            { id: 2, name: "ofor & red wine", price: 3000 }
]
const findProduct = (products: Product[], id: number) => {
            const product = products.find((product: Product) => product.id === id);
            return product ? product.name : "not found"
}
console.log(findProduct(Productvalues, 3))

// QUESTION NO 4
enum Role {
            Admin,
            Editor,
            viewer,
}
const SelectRole = (check: Role) => {
            switch (check) {
                        case Role.Admin:
                                    return "FULL ACCESS"

                        case Role.Editor:
                                    return "EDIT ACCESS"

                        case Role.viewer:
                                    return "READ ONLY ACCESS"
            }
}
console.log(SelectRole(Role.Editor))

// QUESTION NO 5
interface Expense {
            title: string
            amount: number
}
const Projects: Expense[] = [
            {
                        title: "events",
                        amount: 10000
            },
            {
                        title: "activities",
                        amount: 20000
            }
];
const getTotalExpenses = (expenses: Expense[]): number => {
            return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}
console.log(getTotalExpenses(Projects))


// QUESTION NO 6
interface Users {
            id: number,
            name: string
}
async function fetchUserName(): Promise<User> {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const user: User = await res.json();
            return user
}
fetchUserName()
            .then((user) => { console.log(user) })
            .catch((error) => { console.log(error) })

// question NO 7
interface Post {
            id: number,
            title: string
}
async function fetchPostTitiles() {
            try {
                        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                        const posts: Post[] = await res.json();
                        return posts.slice(0, 5).map(post => post.title)

            }
            catch (error) {
                        return error
            }
}
const datas = await fetchPostTitiles()
console.log(datas)
export { }

// QUESTION NO 8
interface Todo {
            id: number,
            title: string,
            completed: boolean
}
async function fetchIncompleteTodos() {
            try {
                        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                        const userTodo: Todo[] = await response.json();
                        return userTodo.filter(todo => !todo.completed).map(todo => todo.title);
            }
            catch (error: any) {
                        if (error instanceof Error)
                                    console.log("error", error.message);
            }
}
const Data = await fetchIncompleteTodos()
console.log(Data)

// QUESTION NO 9
async function fetchData() {
            try {
                        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                        if (!response.ok) {
                                    throw new Error("Request failed");
                        }
                        return "Success";
            } catch (error) {
                        return "Error occured";
            }
}
const dataN = await fetchData()
export { }
console.log(dataN)


// QUESTION NO 10
export async function fetchUserAndTodo(): Promise<string> {
            const [userRes, todores] = await Promise.all([
                        fetch("https://jsonplaceholder.typicode.com/users/1"),
                        fetch("https://jsonplaceholder.typicode.com/todos/1")
            ]);
            const user = await userRes.json()
            const todo = await todores.json()

            return `${user.name} - Todo: ${todo.title}`;

}
const data = await fetchUserAndTodo()
console.log(data)


