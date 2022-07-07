import cnx from "../config";
import User from "./user";

//faire la correspondance de la table user sur la classe User
cnx.define("user",User); 

export default cnx;