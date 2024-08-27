import bcrypt from "bcrypt";

import HttpError from "../helpers/HttpError.js";
import User from "../models/User.js";

const findUser = (filter) => User.findOne(filter);

export const signup = async (data) => {
  const {email, password} = data;
  const user = await findUser({email});

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  return User.create({...data, password: hashPassword});
};

export const signIn = (data) => {};
