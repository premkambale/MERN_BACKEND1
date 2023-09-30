const { userService } = require('../Services')

// -----------------------------------------------------------------------------------Delete All Users-------------------------------------------------------------------------------------------------
const deleteAllUsers = async (req, res) => {
    const userDelete = userService.deletAllUsers(req);

    try {
        if (userDelete) {
            res.send({ success: true, message: 'Users Deleted Successfully', })
        }
        else {
            res.send({ success: false, message: "Failed To Delete Users" })
        }
    }
    catch (error) {
        res.send({ success: false, message: error.message })
    }
}


// -----------------------------------------------------------------------------------Get All Users-------------------------------------------------------------------------------------------------
const get_all_users = async (req, res) => {
    try {
        const users = await userService.fetch_all_users(req);
        if (users) {
            res.send({ success: true, data: users });
        }
        else {
            res.send({ success: false, message: "failed to fetch users" })
        }
    }
    catch (error) {
        res.send({ success: false, message: error.message })
    }
}

// -----------------------------------------------------------------------------------Get User By User Id-------------------------------------------------------------------------------------------------
const get_user_by_userID = async (req, res) => {
    try {
        const user = await userService.fetch_user_by_id(req);
        if (user) {
            res.send({ success: true, data: user });
        }
        else {
            res.send({ success: false, message: "failed to fetch user" })
        }
    }
    catch (error) {
        res.send({ success: false, message: error.message })
    }
}


module.exports = {
    deleteAllUsers,
    get_all_users,
    get_user_by_userID
}