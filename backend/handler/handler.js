import { userauth } from "../models/db.js";
import { complaintData } from "../models/complaint-model.js";
import bcyrpt from "bcrypt";
import Jwt from "jsonwebtoken";
import { generateAndSendOTP } from "./checkAuth.js";
