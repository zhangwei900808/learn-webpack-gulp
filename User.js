exports.User = class {
    constructor(uname, upwd) {
        this._UserName = uname;
        this._UserPwd = upwd;
    }
    get UserPwd() {
        return this._UserPwd;
    }

    set UserPwd(pwd) {
        this._UserPwd = pwd;
    }
    get UserName() {
        return this._UserName;
    }

    set UserName(name) {
        this._UserName = name;
    }
}