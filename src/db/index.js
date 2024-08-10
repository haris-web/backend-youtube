import mongoose from "mongoose";
const dbPath = "mongodb+srv://97jamali:123654@cluster0.7up9lgr.mongodb.net/"
import chalk from "chalk";

function dbConnection (){
    mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log(chalk.green("> Successfully connected to the database"));
  })
  .catch(err => {
    console.log(chalk.red("the error is occur:",err.message));
  });


}

export default dbConnection;