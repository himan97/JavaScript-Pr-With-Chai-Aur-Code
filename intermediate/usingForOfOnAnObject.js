const myObjects  = {a:1,b:2,c:3};

for(const keys of Object.keys(myObjects)){
    console.log(myObjects[keys]);
}

//We can also get 'keys' using forof method...

for(const keys in myObjects){
    console.log(myObjects[keys]);
}
