import mongoose from 'mongoose';

export default (db: string) => {
    const connect = () => {
        mongoose
            .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
            .then(() => {
                return console.log(`Successfully connected to ${db}`)
            })
            .catch(err => {
                console.log(`Error connecting to DB: ${err}`);
                return process.exit(1);
            })
    };

    connect();

    mongoose.connection.on("disconnected", connect);
}