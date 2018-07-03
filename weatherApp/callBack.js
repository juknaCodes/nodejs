let getUser = (id, callBack) => {
    let user = {
      id,
      name:"Ankuj"
    };

    callBack(user);
    // setTimeout(()=>{
    //   callBack(user);
    // }, 2000)
};

getUser(29, (userObject) => {
    console.log(userObject);
});
