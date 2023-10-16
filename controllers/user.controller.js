import md5 from "md5";
import { User } from "../models/user.model.js";

export const UserController = {
  async demo(req, res) {
    try {
      const reponse = await User.create({});
    } catch (error) {
      res.json({ error: "" });
    }
  },
  async register(req, res) {
    try {
      let { username, password } = req.body;
      if (!username && !password) {
        res.json({
          error: "Xin vui lòng nhập đầy đủ thông tin",
        });
      }

      password = md5(password);
      const user = await User.create({
        username: username,
        password: password,
      });
      return res.json({ success: true, message: "Tạo mới user thành công" });
    } catch (error) {
      //   const check = error.errors.find(
      //     (e) => e.path === "username" && e.validatorKey === "not_unique"
      //   );
      //   if (check) {
      //     return res.json("Username đã tồn tại");
      //   }
      return res.json({ error: error });
    }
  },
  async getProfile(req, res) {},
};
