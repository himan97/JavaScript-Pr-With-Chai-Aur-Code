const myName = "himanshu";
const myFavoriteMovies = ["Fast-X","Mission-Impossible","The BatMan-2022","The Gray Man"];
const myAddress = {
    block : "Nimapara",
    post : "Nimapara",
    dist : "Puri",
    state : "Odisha",
    pin : 752106
};

for(const values of myName){
    console.log(values);
}
for(const values of myFavoriteMovies){
    console.log(values);
}
for(const values of Object.keys(myAddress)){
    //We can't print directly values using for of loop. 
    //We can print values using Object.key("Object_name").
    console.log(myAddress[values]);
}

for(const keys in myName){
    console.log(myName[keys]);
}
for(const keys in myFavoriteMovies){
    console.log(myFavoriteMovies[keys]);
}

//We can also print values directly using forIn method like written in below
for(const keys in myAddress){
    console.log(myAddress[keys]);
}