import { User } from "../models/user.model.js";

export const UserController = {
  async demo(req, res) {
    const reponse = await User.create({
      username: "nguyenminhhoang",
      password: "1234567",
      fullname: "nguyen minh hoang",
    });
  },
};
