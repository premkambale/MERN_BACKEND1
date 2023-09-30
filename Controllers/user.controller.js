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

module.exports = {
    deleteAllUsers
}