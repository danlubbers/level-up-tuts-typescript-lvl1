"use strict";
exports.__esModule = true;
// Variables
var isOpen = false;
var firstName = 'Dan';
var myAge = 40;
var list = [0, 1, 2];
var me = ["Dan", 32, true];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["ProjectManager"] = 2] = "ProjectManager";
})(Job || (Job = {}));
;
var job = Job.WebDev;
var phone = 'iPhone';
var tablet = 3;
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
var sayWord = function (word) {
    if (word === void 0) { word = "Hello"; }
    var restParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restParams[_i - 1] = arguments[_i];
    }
    console.log(word);
    console.log(restParams);
    return word;
};
sayWord("Dan", "The", "rest", "of", "the", "params");
/* Implicit Types */
var newName = 'Dan';
newName = 'Que'; // this works as the type string is inferred 
// newName = 10; // this does not work
// Gets type from initial declaration not most recent variable change
var newNameTwo = newName;
// newNameTwo = 10; // Error: Value is not a string
/* Union Types with | */
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin('10');
/* Null Types */
var dog;
dog = "Lucie";
/* Interface */
// Moved to Interfaces.ts for module example
// interface Person {
//   name: string;
//   age?: number; // optional param
// }
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: 'Ruel' });
sayName({ name: 'Que', age: 38 });
/* Enums */
// Numeric Enum
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz"; // 2
})(Type || (Type = {}));
var createContent = function (contentType) { };
createContent(Type.Quiz);
console.log(Type.Quiz);
// String Enum
var Type2;
(function (Type2) {
    Type2["Video"] = "VIDEO";
    Type2["BlogPost"] = "BLOG_POST";
    Type2["Quiz"] = "QUIZ";
})(Type2 || (Type2 = {}));
var createContent2 = function (contentType) { };
createContent2(Type2.Quiz);
console.log(Type2.Quiz);
/* Classes */
var Team = /** @class */ (function () {
    // public teamName: string; // this is the same thing as above
    // private teamName: string; // this is scoped only to the team class
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log('goal!');
        return 'goal!!!!';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
