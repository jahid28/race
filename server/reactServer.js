require("dotenv").config();
// import cors from 'cors'
// import bcryptjs from 'bcryptjs'
// import express from 'express';
// import nodemailer from 'nodemailer';
// // import jwt from 'jsonwebtoken';
// import { userCollection, productCollection, cartCollection, orderCollection } from "./mongo.js"
// import dotenv from 'dotenv/config';
// import path from 'path'

const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// const {
//   userCollection,
//   productCollection,
//   cartCollection,
//   orderCollection,
// } = require("./mongo");
// const url = require("url");

const PORT = process.env.PORT || 5555;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.get("/", cors(), (req, res) => {
  res.send("hello from the server of car-race");
});

app.post("/checkAuth", cors(), async (req, res) => {
  // const name = cookieParser(req.cookies.token);
  // console.log("name is ", name);
  // get name from cookie parser

  try {
    const token = req.body.token;
    // const existingRecord = await registered_users.findOne({ name });
    // if (existingRecord) {
    //   return res.json({
    //     success: true,
    //     exists: true,
    //     msg: "User name already exists.",
    //   });
    // }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return res.json({ decoded });
  } catch (e) {
    res.json({ decoded: false });
  }
});


app.post("/alwaysInsertRecord", cors(), async (req, res) => {
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

app.post("/addNewRecord", cors(), async (req, res) => {
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
      if (leaderboardResults.length < 100) {
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

app.post("/updateRecord", cors(), async (req, res) => {
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
      if (leaderboardResults.length < 100) {
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

app.get("/getLeaderboard", cors(), async (req, res) => {
  try {
    const data = await leaderboard.find().sort({ time: 1 });
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

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
});
