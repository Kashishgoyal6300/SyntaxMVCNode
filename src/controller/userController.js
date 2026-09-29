const User = require("../model/User")

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(400).json(users);
        console.log("lasha darubaaz.....")

    }

}

module.exports = {
    getUsers
}