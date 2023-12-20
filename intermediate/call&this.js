function setUserNamePassword(username,password){
    this.username = username ;
    this.password = password ;
}

function createUserName(user,email,pass){
    setUserNamePassword.call(this, user,pass);
    this.email = email;
}

const user1 = new createUserName("himanshu","himanshu@email.com","1234");
console.log(user1);


// The call() method is a predefined JavaScript method.
// 'call()' can be used to invoke/call a method with an owner object as an argument (parameter).

/*call()-syntaxes:=
   call(thisArg)
   call(thisArg, arg1)
   call(thisArg, arg1, arg2)
   call(thisArg, arg1, arg2,...,argN) 
*/

// Methods like call(), apply(), and bind() can refer 'this' to any object.