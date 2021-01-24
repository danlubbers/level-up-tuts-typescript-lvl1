import { Person } from './Interfaces';

// Variables

const isOpen: boolean = false;

const firstName: string = 'Dan';

const myAge: number = 40;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ["Dan", 32, true];

enum Job { WebDev, WebDesigner, ProjectManager};
const job: Job = Job.WebDev; 

const phone: any = 'iPhone';
const tablet: any = 3;

/*  Functions */

// ? for optional params
// the string before the arrow correlates to the return value
// const sayWord = (word?: string): string => {
//   console.log(word || "Hello");
//   return word || "Hello";
// }

// sayWord("Dan");

// Default Params
// Rest params work as expected
const sayWord = (word = "Hello", ...restParams: string[]): string => {
  console.log(word);
  console.log(restParams);  
  return word;
}

sayWord("Dan", "The", "rest", "of", "the", "params");


/* Implicit Types */

let newName = 'Dan';

newName = 'Que' // this works as the type string is inferred 
// newName = 10; // this does not work

// Gets type from initial declaration not most recent variable change
let newNameTwo = newName;
// newNameTwo = 10; // Error: Value is not a string

/* Union Types with | */
const makeMargin = (x: string | number): string => {
return `margin: ${x}px`;
}
makeMargin(10)
makeMargin('10')

/* Null Types */
let dog: string;

dog = "Lucie";

/* Interface */ 

// Moved to Interfaces.ts for module example
// interface Person {
//   name: string;
//   age?: number; // optional param
// }

const sayName = ({name, age}: Person): string => {
  console.log(name);
  return name;
}

sayName({name: 'Ruel'})
sayName({name: 'Que', age: 38})

/* Enums */ 

// Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz // 2
}

const createContent = (contentType: Type) => {}

createContent(Type.Quiz)
console.log(Type.Quiz);

// String Enum
enum Type2 {
  Video = "VIDEO", 
  BlogPost = "BLOG_POST", 
  Quiz = "QUIZ"
}

const createContent2 = (contentType: Type2) => {}

createContent2(Type2.Quiz)
console.log(Type2.Quiz);

/* Classes */

class Team {
  teamName: string;
  // public teamName: string; // this is the same thing as above
  // private teamName: string; // this is scoped only to the team class
  constructor(teamName) {
    this.teamName = teamName;
  }
  score(): string {
    console.log('goal!');
    return 'goal!!!!';
    
  }
}

const redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;


/* Generics */ 
const outputInput = <T>(arg: T): T => {
  return arg;
};

outputInput('hi');
outputInput(3);

/* Duck Typing */

class Dancer implements Person {
  name: string;
  age?: number;
  
}

let ElNino: Person = new Dancer();

const fake = {
  name: "Nino"
}

ElNino = fake;