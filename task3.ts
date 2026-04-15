//promises examples
// const promise = new Promise((resolve, reject) => {
//             let success = true;

//             if (success) {
//                         resolve("data received");
//             } else {
//                         reject("Error occured")
//             }
// });

// Promise.then((result) => {
//             console.log(result);
// }).catch((error) => {
//             console.log(error);
// })

// let result = fetch("http://jsonplaceholder.typicode.com/users")
//             .then((response) => response.json())
//             .then((data) => console.log(data))
//             .catch((error) => console.log("error", error))


//
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

// const getUserdata = async () => {
//             try {
//                         const response = await fetch("http://api.github.com/users/octocat");
//                         const Extractinfo: Userdata = await response.json();
//                         const { login, public_repos } = Extractinfo
//                         console.log(`${login} has ${public_repos} repos`)
//             }
//             catch (error: unknown) {
//                         if (error instanceof Error)
//                                     console.log("error", error.message)
//             }
// }
// getUserdata()
