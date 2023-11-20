const marvelHeros = ["thor", "ironman", "blackpanther"];
const dcHeros = ["superman", "batman", "flash"];
const indianHeros = ["nagraj","shaktiman"];
const multiHeros = ["Loki","Dr.Faith"]


// marvelHeros.push(dcHeros);
//we dont recomended 'push method' since it modify orginal array and also didn't works as we expected;
// console.log(marvelHeros);

const mixedHeros = marvelHeros.concat(dcHeros,indianHeros,multiHeros);
console.log(mixedHeros);
//We can add two or more arrays by using 'concat' method;

const allHeros = [...marvelHeros, ...dcHeros, ...indianHeros,...multiHeros];
console.log(allHeros);
//We can also add two or more arrays by using 'spred-operator' which is represent like above; 

// 'concat' and 'spread-operator' won't change original array;


const name = "Himanshu";
const bioData = {
    name : "razz",
    age: 26,
    add: "npr"
}

console.log(Array.isArray(name));
console.log(Array.from(name));
console.log(Array.isArray(bioData.age));

const score1 = 100;
const score2 = 200;
const score3 = 300;

const allScores = Array.of(score1,score2,score3);

console.log(allScores);
//By using 'Array.of' function we can put variables in a NEW-ARRAY;