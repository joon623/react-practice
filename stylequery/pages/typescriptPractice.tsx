/*
* 제네릭 제약 조건
* */
interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length: 1})
loggingIdentity({qq: 1, length: 11})

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};
getProperty(x, "a");
getProperty(x, "m");

const TypeScriptPractice = () => {
    return (
        <div>
            TypeScriptPractice
        </div>
    );
};

export default TypeScriptPractice;

function create<Type>(c: { new(): Type }): Type {
    return new c();
}