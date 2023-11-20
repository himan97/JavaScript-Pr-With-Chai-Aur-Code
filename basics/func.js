function logInUserMessage(name = "Himanshu"){
    if(!name/*or We can use "name === undefined", both are same*/){
        return `Please Enter username`;
        
       
    }else{
        return `${name} just logged in`;

    }
   
};


console.log(logInUserMessage());
