const Model = require("./Model");

class User extends Model {
    static STATUS_ACTIVE = "1";
    static STATUS_INACTIVE = "2";
}

module.exports = new User;