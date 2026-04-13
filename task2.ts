// const scores = [10, 20, 30, 40]
// const sumScores = (scores: number[]): number => {
//             const updatedScore = [...scores, 50]
//             return updatedScore.reduce((num, sum) => num + sum)
// }
// console.log(sumScores(scores))

//promises examples
// const promise = new Promise((resolve, reject) => {
//             let success = true;

//             if (success) {
//                         resolve("data received");
//             } else {
//                         reject("Error occured")
//             }
// });

// promise.then((result) => {
//             console.log(result);
// }).catch((error) => {
//             console.log(error);
// })

// let result = fetch("http://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((error) => console.log("error", error))


//async await using typescript
// interface todo {
//             userId: number,
//             id: number,
//             title: string
//             completed: boolean
// }
// const getUser = async () => {
//             try {
//                         const response = await fetch("http://jsonplaceholder.typicode.com/todos");
//                         const todos = await response.json();
//                         todos.forEach((todo: todo): void => console.log(todo.title))

//             }
//             catch (error: unknown) {
//                         if (error instanceof Error)
//                                     console.log("error", error.message)
//             }
// }
// getUser()


// interface Userdata {
//             login: string,
//             id?: number,
//             node_id?: string,
//             avatar_url?: any,
//             gravatar_id?: string,
//             url?: string,
//             html_url?: string,
//             followers_url?: string,
//             following_url?: string,
//             gists_url?: string,
//             starred_url?: string,
//             subscriptions_url?: string,
//             organizations_url?: string,
//             repos_url?: string,
//             events_url?: string,
//             received_events_url?: string,
//             type?: string,
//             user_view_type?: string,
//             site_admin?: false,
//             name?: string,
//             company?: string,
//             blog?: string,
//             location?: string,
//             email?: null,
//             hireable?: null,
//             bio?: null,
//             twitter_username?: null,
//             public_repos: number,
//             public_gists?: number,
//             followers?: number,
//             following?: number,
//             created_at?: number,
//             updated_at?: number
// }
// const UserValues: Userdata = {
//             login : "octocat",
//             id =583231,
//   node_id = "MDQ6VXNlcjU4MzIzMQ==",
//             "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
//             "gravatar_id": "",
//             "url": "https://api.github.com/users/octocat",
//             "html_url": "https://github.com/octocat",
//             "followers_url": "https://api.github.com/users/octocat/followers",
//             "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//             "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//             "organizations_url": "https://api.github.com/users/octocat/orgs",
//             "repos_url": "https://api.github.com/users/octocat/repos",
//             "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/octocat/received_events",
//             "type": "User",
//             "user_view_type": "public",
//             "site_admin": false,
//             "name": "The Octocat",
//             "company": "@github",
//             "blog": "https://github.blog",
//             "location": "San Francisco",
//             "email": null,
//             "hireable": null,
//             "bio": null,
//             "twitter_username": null,
//             "public_repos": 8,
//             "public_gists": 8,
//             "followers": 22331,
//             "following": 9,
//             "created_at": "2011-01-25T18:44:36Z",
//             "updated_at": "2026-03-22T11:23:02Z"

// }
// const getUser = async () => {
//             try {
//                         const response = await fetch("http://api.github.com/users/octocat");
//                         const login = await response.json();
//                         login.array.forEach((logins: logins): void => console.log(logins.message))
//             }
//             catch (error: unknown) {
//                         if (error instanceof Error)
//                                     console.log("error", error.message)
//             }
// }
// getUser()

// interface person1 {
//             name: string
//             age: number
//             skills: string[]
// }
// const user: person1 = {
//             name: "ada",
//             age: 25,
//             skills: ["JS"]
// }
// const Userskills = (person1: person1): void => {
//             console.log(`${person1.name} knows ${person1.skills} and NODE she is ${person1.age}`)
// };
// Userskills(user)








//assignment NO 1
// interface Product {
//             name: string,
//             price: number,
//             inStock: boolean
// }
// const productName: Product = {
//             name: "beans & shawarma",
//             price: 2000,
//             inStock: false
// }
// const AvailableProduct = (product: Product): string => {
//             if (product.inStock) {
//                         return `${product.name} is available for $${product.price}`
//             }
//             else {
//                         return `${product.name} is out of Stock`
//             }
// }
// console.log(AvailableProduct(productName))

//assignment NO 2
// const value = (AnyValue: string | number) => {
//             if (typeof AnyValue === "string") {
//                         return AnyValue.toUpperCase()
//             }
//             else if (typeof AnyValue === "number") {
//                         return AnyValue * 2
//             }
// }
// console.log(value("odinaka"))

//assignment NO 3
// interface Person {
//             name: string
// }
// const person1: Person = { name: "bassy" }
// interface student extends Person {
//             score: number
// }
// const CalcScore = (person: student) => {
//             return `${person.name} scored ${person.score}`
// }
// const student: student = { name: "bassy", score: 100 }
// console.log(CalcScore(student))

//assignment NO 4
// enum Role {
//             admin,
//             user,
//             guest,
// }
// const RoleSelector = (checkRole: Role) => {
//             switch (checkRole) {
//                         case Role.admin:
//                                     return "FULL ACCESS"

//                         case Role.user:
//                                     return "LIMITED ACCESS"

//                         case Role.guest:
//                                     return "NO ACCESS"
//             }
// }
// console.log(RoleSelector(Role.user))






// enum TrafficLight {
//             Red,
//             Yellow,
//             Green,
// }

// function action(light: TrafficLight) {
//             switch (light) {
//                         case TrafficLight.Red:
//                                     return "stop";
//                         case TrafficLight.Yellow:
//                                     return "Get ready";
//                         case TrafficLight.Green:
//                                     return "Go";
//             }
// }
// console.log(action(TrafficLight.Red))

























// interface Person {
//             id: number,
//             name: string,
//             isPublished: boolean,
//             age?: number
// }
// const user1: Person = { id: 1, name: "bassy", isPublished: true, age: 25 }
// const user2: Person = { id: 2, name: "joey", isPublished: false }

// console.log(user1)

// interface job extends Person {
//             office: string
//             title: string
// }

// const job: job = { id: 1, name: "bassy", isPublished: true, office: "Microsoft", title: "Developer" }
// console.log(job)