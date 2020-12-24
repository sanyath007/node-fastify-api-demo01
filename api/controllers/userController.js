const userAdator = require('../adaptors/userAdaptor');

const getUsers = async (req, res) => {
    try {
        const { page } = req.query;
        const users = await userAdator.getUsers({ page });

        res.send(users);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getUsers
};
