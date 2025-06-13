import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const studentSchema = new Schema(
  {
    userName:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,

    },
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    photo:{
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: [true,'Password is required'],
      minlength: 8,
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male","Female","Other"],
    },
    dob:{
        type: Date,
        required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    guardianName: {
      type: String,
      required: true,
      trim: true,
    },
    guardianPhone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    guardianRelation: {
      type: String,
      required: true,
      trim: true,
    },
    idProof: {
      type: String,
      required: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model("Student", studentSchema);