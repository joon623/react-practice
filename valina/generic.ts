function identity(arg: number): number {
    return arg;
}

function identity2(arg: any): any {
    return arg;
}

function identity3<Type>(arg: Type): Type {
    return arg;
}

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    // 이제 a .length 속성을 아니까 더 이상 에러가 없다.
    console.log(arg.length);
    return arg;
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, "a");
// getProperty(x, "m");
// Argument of type 'm' is not assignable to parameter of type 'a' | 'b' | 'c' | 'd'

function create<Type>(c: { new(): Type }): Type {
    return new c();
}

// keyof Type Operator
type Point = { x: number; y: number; };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
    return {x: 10, y: 3};
}

// remember that values and types aren`t the same thing.
type PT = ReturnType<typeof f>

interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {

}

interface NameLabel {

}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}

// Conditional Type Constraints


type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
    message: string;
}

type EmailMessageContents = MessageOf<Email>;

function foo(arg: EmailMessageContents) {
    console.log(arg)
}

foo("asad")


// Inferring Within Conditional Types

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// Mapped Types
type OptionsFlags<Type> = {
    [Property in keyof Type]: Boolean;
}

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;