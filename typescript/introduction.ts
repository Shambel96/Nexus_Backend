// TypeScript -> TS
// statically typed
// Types in Typescript
/**
 * Primitive
 * number
 * string
 * boolean
 * undefined
 * null
 *
 */

//! give union type
let someId: string | number = "326532235899523"; // javascript
//? Typescript have Type inferring
let someId2: number = 5;
someId = 5; // unlike JS you can reassign another type

// Homogenous Array
let ids: number[] = [1, 2, 4, 5];
// hetro
let dynamicArray: any[] = [1, "2", 3, "fhufweu", false];
let unionTypeArray: (number | string | boolean)[] = [1, 2, "weuiew", true];

// types for object
// class , interface,

// Each product should include the following fields:

// id (number or string): you can use mongodb default id.
// name (string)
// description (string)
// price (number)
//  (boolean)
// interface Product {
//   id: number | string;
//   name: string;
//   description: string;
//   price: number;
//   inStock: boolean;
//   display(): void;
//   // display : () => void;
// }

// const Product1: Product = {
//   id: 1,
//   name: "Airpod",
//   description: "fdsjfdisjndsf",
//   price: 1500,
//   inStock: true,
//   display() {
//     console.log(`You bought ${this.name} with price ${this.price}`);
//   },
// };

// functions
function add(a: number, b: number): number {
  return a + b;
}

// Enums => set of name constants

enum UserRole {
  Admin = "admin",
  Student = "student",
  Parent = "parent",
  Teacher = "teacher",
}

let role: UserRole = UserRole.Admin;
// Type inferring
let count = 475;

// function createUser(data: any): User {
//   const someUser = {
//     id: 23843,
//     name: "erjerw",
//     email: "fjbfewnew",
//   };
//   return { ...someUser }; // copy
// }

// type keyword
type texts = string;
type Logger = (msg: string, statusErrorCode: number) => void;

// interface LoggerInterface {
//   loggger: (msg: string, statusCode: number) => void;
// }

const logger: Logger = (msg, code) => {
  console.log(`${msg} ${code}`);
};

// Hashmap . Dictionary
// One way
interface Someone {
  name: string;
  email: string;
}
// 1
interface UserMap {
  [key: string]: Someone;
}
// 2
type UserMapType = Record<string, Someone>;
const users = {
  "2723487234": { name: "Someone", email: "someone@gmail.com" },
};

// id (number or string): you can use mongodb default id.
// name (string)
// description (string)
// price (number)
// inStock (boolean)
class Product {
  readonly someId: number | string;
  name: string;
  inStock: boolean;
  somePrice?: number; // optional
  someDescription?: string;
  constructor(
    someId: number | string,
    name: string,
    inStock: boolean,
    someDescription?: string,
    somePrice?: number
  ) {
    this.someId = someId;
    this.name = name;
    this.someDescription = someDescription;
    this.somePrice = somePrice;
    this.inStock = inStock;
  }

  getName(): string | number {
    return this.name;
  }

  badFunction() {
    // this.someId = "3279329324"
  }
}

const product2 = new Product("33489324", "Laptop", false);
product2.getName(); // Laptop
// product2.someId = "4326t432898u342u324"

// Generics in TS
interface User {
  id: number;
  name: string;
  email: string;
}
interface Blog {
    id : number
    title : string
    description : string
}
interface Repository<CommonType> {
  create(user : CommonType): void;
  findById(id: number) : CommonType;
}

class UserRepository implements Repository<User> {
  findById(id: number): User {
    return { id, name: "Someone", email: "someone@gmail" };
  }
  create(user: User): void {
    console.log(`Created user ${user.name}`);
  }
}

class BlogRepository implements Repository<Blog> {
    // dfnjds
    findById(id: number): Blog {
    return { id, title: "About TS", description: "TS is statically Typed" };
    }
    create(blog: Blog): void {
        console.log(`Created user ${blog.title}`);
    }
    // 
}
// class Comment
///.....
//
