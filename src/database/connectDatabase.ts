import { connect } from "mongoose"

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI as string,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
    console.log("Database Connected!")
}