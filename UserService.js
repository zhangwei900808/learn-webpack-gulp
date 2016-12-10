class UserService {
    constructor(user) {
        //合并
        Object.assign(this,user);
    }

    getVersion() {
        console.log('1.0')
    }
}

let User = require('./User.js').User;

let user = new User();
user.UserName = "zhangwei";
user.UserPwd = "1111";

//console.log(user);

let userService = new UserService(user);
console.log(userService._UserName);