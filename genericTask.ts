//NO 1 
function Identity<T>(value: T): T {
            return value
}
let results = Identity(2)
console.log(Identity(results))

//NO 2
function getFirstElement<T>(arr: T[]): T | undefined {
            return arr[0]
}
console.log(getFirstElement([4, 3, 2, 1]))

//NO 3
interface ApIresponse<T> {
            success: boolean
            data: T
}
const User: ApIresponse<{ name: string }> = {
            success: true,
            data: { name: "bassy" }
}
const numbers: ApIresponse<number[]> = {
            data: [1, 2, 3],
            success: true,
}
console.log()
//NO 4
function getLength<T extends { length: number }>(item: T): number {
            return item.length
}
console.log(getLength("hello"))
console.log(getLength([1, 2, 3, 4, 5]))

//NO 5
function getProperty<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
}
const FindUser = { name: "william", age: 22 }
console.log(getProperty(FindUser, "age"))

//NO 6
function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
            const newArray: U[] = [];

            for (let i = 0; i < arr.length; i++) {

                        const item = arr[i];


                        const transformedItem = callback(item);


                        newArray.push(transformedItem);
            }
            return newArray;
}
console.log(mapArray([1, 2, 3], (x) => x * 10));

//NO 7
class Storagee<T> {
            private items: T[] = [];

            addItem(item: T): void {
                        this.items.push(item);
            }

            removeItem(item: T): void {
                        this.items = this.items.filter((i) => i !== item);
            }

            getItems(): T[] {
                        return this.items;
            }
}

const storage = new Storagee<number>();

storage.addItem(10);
storage.addItem(20);

console.log(storage.getItems());

//N0 8
async function handlePromise<T>(
            promise: Promise<T>
): Promise<{ data: T | null; error: string | null }> {
            try {
                        const data = await promise;
                        return { data, error: null };
            } catch (err) {
                        return {
                                    data: null,
                                    error: err instanceof Error ? err.message : "Something went wrong",
                        };
            }
}

const fetchData = Promise.resolve("hello bassy");

handlePromise(fetchData).then((result) => {
            console.log(result);
});

//NO 9
function reduceArray<T, U>(
            arr: T[],
            callback: (acc: U, current: T) => U,
            initialValue: U
): U {
            let result = initialValue;

            for (let i = 0; i < arr.length; i++) {
                        result = callback(result, arr[i]);
            }

            return result;
}
const Numbers = [2, 4, 6, 8];

const sum = reduceArray(
            Numbers,
            (acc, current) => acc + current,
            0
);

console.log(sum);

//NO 10
class EventEmitter<T extends Record<string, any>> {
            private events: {
                        [K in keyof T]?: Array<(data: T[K]) => void>;
            } = {};

            on<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): void {
                        if (!this.events[eventName]) {
                                    this.events[eventName] = [];
                        }

                        this.events[eventName]!.push(callback);
            }

            emit<K extends keyof T>(eventName: K, data: T[K]): void {
                        const listeners = this.events[eventName];
                        if (!listeners) return;

                        listeners.forEach((callback) => callback(data));
            }
}


type AppEvents = {
            login: { username: string };
            message: string;
};


const emitter = new EventEmitter<AppEvents>();


emitter.on("login", (data) => {
            console.log("User logged in:", data.username);
});

emitter.on("message", (text) => {
            console.log("Message received:", text);
});


emitter.emit("login", { username: "bassy" });
emitter.emit("message", "welcome!");