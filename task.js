// /TAKE HOME TEST
// NO 1
const user = { name: "Ada", Skills: ["js", "node"] }
const processUser = (user) => {
            const { name, Skills } = user
            const newskills = [...Skills, "react"]
            return `${name} knows ${newskills.join()}`
}
console.log(processUser(user))

//NO 2
const multiplyNumbers = (multiplier, ...numbers) => {
            const collectNo = [...numbers]
            return collectNo.map(num => num * multiplier)
}
console.log(multiplyNumbers(2, 1, 2, 3))

// NO 3
const student = {
            name: "John",
            scores: [70, 80],
            details: {
                        class: "SS3"
            }
};
const processStudent = (student) => {
            const { name, scores, details } = student
            const newScore = [...scores, 90]
            return `${name} in ${details.class} scored ${newScore.join()}`
}
console.log(processStudent(student))

//NO 4
const numbers = [1, 2, 3, 4, 5];
const processNumber = (first, numbers, ...rest) => {
            const newNumbers = [first, numbers, ...rest]
            return newNumbers.map(num => num * numbers)
}
console.log(processNumber(1, 2, 3, 4, 5))

//NO 5
const userr = {
            name: "Ada",
            age: 25,
            role: "admin"
};
const updateUser = (user) => {
            const { name, ...rest } = user
            const { name: username, age } = user
            const newUser = { username, age, ...rest }
            return newUser
}
console.log(updateUser(userr))

//NO 6
const User = {
            name: "Ada",
            address: {
                        city: "Lagos"
            }
};
const cloneUser = (user) => {
            const newuser = {
                        ...user, address: {
                                    ...user.address, city: "Abuja"
                        }
            }
            return newuser
}
console.log(cloneUser(User))
//the main object will remain unchanged why? the spread operator want to make a shallow copy, without copying address, both objects would
//share the same reference.

// NO 7
const users = [
            {
                        name: "Ada",
                        skills: ["JS"]
            },
            {
                        name: "Sam",
                        skills: ["Python"]
            }
];
const processUsers = (users) => {
            const [firstuser, ...otherusers] = users
            const newskills = {
                        ...firstuser,
                        skills: [...firstuser.skills, "React"]
            }
            return {
                        firstuser: newskills, otherusers
            }
}
console.log(processUsers(users))

//NO 8
const SumAll = (...numbers) => {
            const numbers1 = [...numbers]
            const [first, ...rest] = numbers1
            const sum = rest.reduce((sum, num) => sum + num, first)
            return sum
}
console.log(SumAll(5, 10, 15))

//NO 9
const data = {
            user: {
                        info: {
                                    name: "Ada"
                        },
                        skills: ["JS"]
            }
};
const processData = (data) => {
            const {
                        user: {
                                    info: { name },
                                    skills
                        }
            } = data;

            return {
                        name,
                        skills: [...skills, "Node"]
            };
};

console.log(processData(data));

//NO 10
const UserRecords1 = [
            {
                        name: "Ada",
                        scores: [10, 20]
            },
            {
                        name: "Sam",
                        scores: [30, 40]
            }
];

const UserRecords = [
            {
                        name: "Ada",
                        scores: [10, 20]
            },
            {
                        name: "Sam",
                        scores: [30, 40]
            }
];

const processRecords = (records) => {
            const [first, ...rest] = records;

            const { name, scores } = first;

            const combinedScores = [
                        ...scores,
                        ...rest.flatMap(record => record.scores)
            ];

            return {
                        name,
                        scores: combinedScores
            };
};

console.log(processRecords(UserRecords));
