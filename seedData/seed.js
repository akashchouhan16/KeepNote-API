const mongoose = require('mongoose');
const note = require('../model/notes.model');
require('dotenv').config();

mongoose.connect(process.env.DB_URL,
 {
     useNewUrlParser: true,
     useCreateIndex: true,
    useUnifiedTopology: true
 },()=>console.log(`SEED CONNECTED TO DB, COLLECTION~ ${process.env.COLLECTION}`));


const seedData = async ()=>{
    await note.deleteMany({});
    // Add Seed Data acc to the notes model.
    for(let i=0;i<10;i++){
        let n1 = new note({
            title : `Note for the Day #${i+1}`,
            description : `Sample description #${i+1}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel nulla nobis repellendus eos sit ex officia fugit laborum! Atque magnam voluptate a hic repudiandae eum soluta facere sint libero.`,
            date : Date.now()
        });
        await n1.save();
    }
}

seedData().then(() => {
    mongoose.connection.close();
    console.log("DB Connection closed for SEED.");
})