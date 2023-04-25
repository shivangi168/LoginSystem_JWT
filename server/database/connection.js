const mongoose=require('mongoose');
const connect =async()=>{
    try{
    //     const con=mongoose.connect("mongodb+srv://shukla:12345@cluster0.pua7xpl.mongodb.net/?retryWrites=true&w=majority",
    //     { useNewUrlParser : true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // })
    // mongodb connection
    const con = await mongoose.connect("mongodb+srv://shukla:12345@cluster0.pua7xpl.mongodb.net/?retryWrites=true&w=majority", {
        // useNewUrlParser : true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
    });
    console.log(`MongoDB connected successfully. : ${con.connection.host}`);

}

    
    catch(err){
        console.log(err);
        process.exit(1);

    }
}
module.exports=connect;