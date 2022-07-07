import {Router} from "express";
import UserCtrl from "../controller/user";

const UserRoute = Router();
UserRoute.post("/api/user", UserCtrl.createUser)
UserRoute.get("/api/user", UserCtrl.findAllUsers)
UserRoute.get("/api/user/:id", UserCtrl.findUserById)
UserRoute.put("/api/user/:id", UserCtrl.updateUser)
UserRoute.delete("/api/user/:id", UserCtrl.deleteUser)

export default UserRoute;
