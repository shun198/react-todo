// 配列の展開
const array1 = [1, 2, 3]
console.log(array1)
console.log(...array1) // 1,2,3

const name = "イーロン";
const age = 29;

// バッククォートを使う必要がある
const message = `私の名前は${name}で${age}歳です`;
console.log(message);

const array2 = [2, 4, 6];
array2.push(8);
console.log(array2);

const func1 = (str) => {
    return str;
};
console.log(func1("func1やで"));
