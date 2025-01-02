// require("dotenv").config();
// const mongoose = require("mongoose");
// mongoose
//   .connect(`${process.env.MY_DATABASE_URL}`)
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log("Error connecting to database");
//     console.log(err);
//   });

// const registered_users_schema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: Number,
//     required: true,
//   },
// });

// const guest_users_schema = new mongoose.Schema({
//   time: {
//     type: Number,
//     required: true,
//   },
// });
// const leaderboard_schema = new mongoose.Schema({
//   userName: {
//     type: String,
//     required: true,
//   },
//   // position: {
//   //   type: Number,
//   //   required: true,
//   // },
//   time: {
//     type: Number,
//     required: true,
//   },
// });

// const registered_users = mongoose.model("registered_users", registered_users_schema);
// const guest_users = mongoose.model("guest_users", guest_users_schema);
// const leaderboard = mongoose.model("leaderboard", leaderboard_schema);

// module.exports = {registered_users,guest_users,leaderboard}