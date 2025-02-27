require("dotenv").config();

const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const app = express();

app.options('*', cors());

app.use(cors({
  origin: ['https://race-car-new.vercel.app','http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow sending cookies
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5555;

const { registered_users, guest_users, leaderboard } = require("./mongo");

async function hashPassword(password) {
  // Generate a salt
  const salt = await bcryptjs.genSalt(10); // You can specify the salt rounds (10 is standard)
  // Hash the password with the salt
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
}

// Function to validate a password
async function validatePassword(plainPassword, hashedPassword) {
  // Compare the plain password with the hashed password
  const isMatch = await bcryptjs.compare(plainPassword, hashedPassword);
  return isMatch;
}

app.get("/", (req, res) => {
  res.send("hello from the server of car-race");
});

app.post("/checkAuth", (req, res) => {

  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return res.json({ decoded });
  } catch (e) {
    res.json({ decoded: false });
  }
});

app.post("/alwaysInsertRecord", async (req, res) => {
  try {
    const time = req.body.time;

    await guest_users.insertMany([{ time }]);

    return res.json({
      success: true,
      msg: "Added your record successully!",
    });
    // }
  } catch (e) {
    return res.json({
      success: false,
      msg: `err from addNewRecord ${e.message}`,
    });
  }
});

app.post("/addNewRecord", async (req, res) => {
  try {
    const userName = req.body.userName;
    const time = req.body.time;
    const password = req.body.password;

    const token = jwt.sign({ userName }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });

    const leaderboardResults = await leaderboard.find();
    const leaderboardCheck = await leaderboard.findOne({ userName });

    if (leaderboardCheck) {
      if (time < leaderboardCheck.time) {
        await leaderboard.updateOne({ userName }, { $set: { time } });
      }
    } else {
      if (leaderboardResults.length < 50) {
        const data = {
          userName,
          time,
        };
        await leaderboard.insertMany([data]);
      } else {
        const lastRecord = await leaderboard.find().sort({ time: -1 }).limit(1);

        if (lastRecord[0].time > time) {
          await leaderboard.deleteOne({ time: lastRecord[0].time });
          const data = {
            userName,
            time,
          };
          await leaderboard.insertMany([data]);
        }
      }
    }

    const existingRecord = await registered_users.findOne({ userName });
    if (existingRecord) {
      if (await validatePassword(password, existingRecord.password)) {
        if (existingRecord.time < time) {
          return res.json({
            success: false,
            msg: "You already have a better time!",
          });
        }
        // else {
        await registered_users.updateOne({ userName }, { $set: { time } });
        return res.json({
          success: true,
          token,
          msg: "Yay! You have a new best time, your record has been updated.",
        });
        // }
      }
      // else {
      return res.json({
        success: false,
        msg: "Incorrect password for this user name",
      });
      // }
    }
    // else {
    const data = {
      userName,
      time,
      password: await hashPassword(password),
    };

    await registered_users.insertMany([data]);

    return res.json({
      success: true,
      token,
      msg: "Added your record successully!",
    });
    // }
  } catch (e) {
    return res.json({
      success: false,
      msg: `err from addNewRecord ${e.message}`,
    });
  }
});

app.post("/updateRecord", async (req, res) => {
  try {
    const userName = req.body.userName;
    const time = req.body.time;

    const leaderboardResults = await leaderboard.find();
    const leaderboardCheck = await leaderboard.findOne({ userName });

    if (leaderboardCheck) {
      if (time < leaderboardCheck.time) {
        await leaderboard.updateOne({ userName }, { $set: { time } });
      }
    } else {
      if (leaderboardResults.length < 50) {
        const data = {
          userName,
          time,
        };
        await leaderboard.insertMany([data]);
      } else {
        const lastRecord = await leaderboard.find().sort({ time: -1 }).limit(1);

        if (lastRecord[0].time > time) {
          await leaderboard.deleteOne({ time: lastRecord[0].time });
          const data = {
            userName,
            time,
          };
          await leaderboard.insertMany([data]);
        }
      }
    }

    // const token = jwt.sign({ userName }, process.env.JWT_KEY, { expiresIn: '7d' });
    const existingRecord = await registered_users.findOne({ userName });
    if (existingRecord) {
      if (existingRecord.time < time) {
        return res.json({
          updated: true,
          msg: "You already have a better time!",
        });
      }
      // else {
      await registered_users.updateOne({ userName }, { $set: { time } });
      return res.json({
        updated: true,
        msg: "Yay! You have a new best time, your record has been updated.",
      });
    }
    // else {
    return res.json({
      updated: false,
      msg: "Error while updating your record",
    });
    // }
    // console.log("name is ", name);
    // console.log("time is ", time);
  } catch (e) {
    return res.json({
      updated: false,
      msg: `err from updateRecord ${e.message}`,
    });
  }
});

app.get("/getLeaderboard", async (req, res) => {
  try {
    const data = await leaderboard.find().sort({ time: 1 }).limit(50);
    // console.log("data is found in server");
    return res.json({ success: true, data });
  } catch (e) {
    // console.log("error", e);
    return res.json({
      success: false,
      msg: `err from getLeaderboard ${e.message}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
