const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
    try {
        const dbconn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2dz6peu.mongodb.net/?retryWrites=true&w=majority`,
            //ssl = false
        );
        console.log("conectou ao BD");

        return dbconn;
    } catch (error) {
        console.log(error) 
    }
};

conn();