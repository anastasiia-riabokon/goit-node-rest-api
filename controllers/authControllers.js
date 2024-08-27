import ctrlWrapper from "../helpers/ctrlWrapper.js";
import * as authServices from "../services/authServices.js";

export const register = ctrlWrapper(async (req, res) => {
  const newUser = await authServices.signup(req.body);

  res.status(201).json({
    subscription: newUser.subscription,
    email: newUser.email,
  });
});

export const login = ctrlWrapper(async (req, res) => {
  const {token, user} = await authServices.signIn(req.body);

  res.json({
    token,
    user: {
      subscription: user.subscription,
      email: user.email,
    },
  });
});

export const getCurrent = ctrlWrapper((req, res) => {
  const {subscription, email} = req.user;

  res.json({
    subscription,
    email,
  });
});
