const fNameString1: string = "Asif"; // string-1  dt
const lsNameString2 = "A Owadud" as string; // string-2  dt

const age: number = 28; // number dt
const isMarried: boolean = true; // boolean dt

const asifSonsNameArr: string[] = [
  "Abdullah Al Mujtahid",
  "Abdullah Al Mujaddid",
]; // arr dt

// Tuples : array of different data types
const userTuples: [string, number, boolean] = ["Alice", 30, true];
const optionalTuple: [string, number?] = ["admin", 1]; // Also valid
let restTuple: [string, ...number[]];
restTuple = ["rest", 1, 2, 3]; // Valid
restTuple = ["admin", 1, 2, 3]; // Valid

// obj-1 dt with interface
interface WifeObjType {
  name: string;
  age: number;
  isAngry: boolean;
}

const asifWifeObj: WifeObjType = { name: "Samiya", age: 26, isAngry: true };

type DaughterObjType = {
  name: string;
  age: number;
  isAngry: boolean;
};

// obj-2 dt with type
const asifDaughterObj: DaughterObjType = {
  name: "Amatullah Al Mujaddidah",
  age: 2,
  isAngry: false,
};

// array of obj
const asifDautArrOfObj: DaughterObjType[] = [
  {
    name: "Amatullah Al Mujaddidah",
    age: 2,
    isAngry: false,
  },
  {
    name: "Amatullah Al Ahmad",
    age: 0,
    isAngry: false,
  },
];

type optObjType = {
  name: string;
  age?: number; // not necessary for creating obj
  isAngry?: boolean; // not necessary for creating obj
};

// obj-2 dt with type
const optObj: optObjType = {
  name: "optObjType",
};

// union data type allows mulitple types of data as value for a variable
let unionVar: string | number;
unionVar = "its a union Var";
unionVar = 90;

// defining type for function
// basic function
type FuncType = (param1: string, param2: number) => void;
const basicFunction: FuncType = (uName, age) => {
  return `basicFunction: hi ${uName}! You are ${age} years old?`;
};

// with optional param : we have handle condition inside the function
type FuncType2 = (param1: string, param2?: number) => void;

const optionalParamFunction: FuncType2 = (uName, age) => {
  if (age !== undefined) {
    console.log(
      `optionalParamFunction: Hi ${uName}! You are ${age} years old.`
    );
  } else {
    console.log(`optionalParamFunction: Hi ${uName}!`);
  }
};

// default param with optional param
type FuncType3 = (param1: string, param2?: number) => void;

const optNdefaultParamFunction: FuncType3 = (uName, age = 18) => {
  console.log(
    `optNdefaultParamFunction: Hi ${uName}! You are ${age} years old.`
  );
};

export {
  age,
  asifDaughterObj,
  asifDautArrOfObj,
  asifSonsNameArr,
  asifWifeObj,
  fNameString1,
  isMarried,
  lsNameString2,
  optObj,
  optionalTuple,
  restTuple,
  unionVar,
  userTuples,
  basicFunction,
  optionalParamFunction,
  optNdefaultParamFunction,
};
