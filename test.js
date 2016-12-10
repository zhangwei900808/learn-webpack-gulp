let awbeci = require('awbeci');

let user = new awbeci.User();
user.UserName ="awbeci1.0";
user.UserPwd = "123";
let userService = new awbeci.UserService(user);

console.log(userService._UserName);