import mongoose from "mongoose";

export default async function createDBConnection(){
    try {
      const dbConnection = await mongoose.connect(String(process.env.DB_CONNECTION_STRING), {
        dbName: 'PersonalData'
      })
      return dbConnection.connection
    } catch(error) {
      console.error(error)
    }
}
