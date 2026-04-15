//TYPESCRIPT ASYNC CHALLANGE

// assignment NO 8
interface Userdata {
            login: string,
            id?: number,
            node_id?: string,
            avatar_url?: any,
            gravatar_id?: string,
            url?: string,
            html_url?: string,
            followers_url?: string,
            following_url?: string,
            gists_url?: string,
            starred_url?: string,
            subscriptions_url?: string,
            organizations_url?: string,
            repos_url?: string,
            events_url?: string,
            received_events_url?: string,
            type?: string,
            user_view_type?: string,
            site_admin?: false,
            name?: string,
            company?: string,
            blog?: string,
            location?: string,
            email?: null,
            hireable?: null,
            bio?: null,
            twitter_username?: null,
            public_repos: number,
            public_gists?: number,
            followers?: number,
            following?: number,
            created_at?: number,
            updated_at?: number
}

const getUserdata = async () => {
            try {
                        const response = await fetch("http://api.github.com/users/octocat");
                        const Extractinfo: Userdata = await response.json();
                        const { login, public_repos } = Extractinfo
                        console.log(`${login} has ${public_repos} repos`)
            }
            catch (error: unknown) {
                        if (error instanceof Error)
                                    console.log("error", error.message)
            }
}
getUserdata()


// assignment NO 9
interface DogAffairs {
            message: string
}

const getDogInfo = async () => {
            try {
                        const response = await fetch("https://dog.ceo/api/breeds/image/random");
                        const ExtractMessage: DogAffairs = await response.json();
                        const { message } = ExtractMessage
                        console.log(`Dog Image:${message}`)
            }
            catch (error: unknown) {
                        if (error instanceof Error)
                                    console.log("error", error.message)
            }
}
getDogInfo()

//assignment N0 10
interface data {
            slip: {
                        id: string,
                        advice: string
            }
}
const result = fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => { return `"Advice: ${data.slip.advice}"` })
            .then((returneddata) => console.log(returneddata))
            .catch((data) => console.log(data))

