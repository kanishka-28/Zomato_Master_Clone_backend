import express from "express"
import cors from "cors"
import helmet from "helmet"
import ConnectDB from "./database/connection";

//API's
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurants/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Images/index";
import Order from "./API/Orders/index";
import Review from "./API/Reviews/index";
import User from "./API/User/index";


//config
// import googleAuthConfig from "./Config/google.config"
// import passport from "passport";


//env variable
require("dotenv").config();


const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}))
zomato.use(helmet());
zomato.use(cors());
// zomato.use(passport.initialize());
// zomato.use(passport.session());


// googleAuthConfig(passport);

// API use
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);


zomato.get("/", (req, res)=>{
    res.json({message : "..kanishka"})
});


zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));