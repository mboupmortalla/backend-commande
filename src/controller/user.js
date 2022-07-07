import cnx from "../model";

const createUser = async (req, resp) => {
    const user = await cnx.models.user.create(req.body);
    resp.json(user);
}

const findAllUsers = async (req , resp) => {
    const users = await cnx.models.user.findAll();
    resp.json(users);
}

const findUserById = async (req , resp) => {
    const user = await cnx.models.user.findOne({
        where: {
            id: req.params.id
        }
    });
    resp.json(user);
}

const updateUser = async (req , resp) => {
    const user = await cnx.models.user.findByPk({
        where: {
            id: req.params.id
        }
    });
    resp.json(user);
}

const deleteUser = async (req , resp) => {
    const user = await cnx.models.user.destroy(req.params.id);
    resp.json(user);
}

export default {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
}