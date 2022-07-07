import  express  from "express";
import cnx from "./src/model";
import UserRoute from "./src/route/user";

require('dotenv').config();

const app = express();
cnx.sync();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(UserRoute);
app.listen(process.env.PORT);
