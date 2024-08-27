import ctrlWrapper from "../helpers/ctrlWrapper.js";
import * as authServices from "../services/authServices.js";

export const register = ctrlWrapper(async (req, res) => {
  const newUser = await authServices.signup(req.body);

  res.status(201).json({
    subscription: newUser.subscription,
    email: newUser.email,
  });
});

export const login = ctrlWrapper(async (req, res) => {});
