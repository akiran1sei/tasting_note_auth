// pages/api/user/login
import connectDB from "@/utils/database";
import { UserModel } from "@/utils/schemaModels";
import jwt from "jsonwebtoken";
const secret_key = "tasting_coffee";
const loginUser = async (req, res) => {
  try {
    await connectDB();
    const savedUserData = await UserModel.findOne({ email: req.body.email });
    if (savedUserData) {
      if (req.body.password === savedUserData.password) {
        // パスワードが正しい場合の処理
        const payload = {
          email: req.body.email,
        };
        const token = jwt.sign(payload, secret_key, { expiresIn: "1h" });
        console.log(token);
        return res.status(200).json({ message: "ログイン成功", token: token });
      } else {
        // パスワードが間違っている場合の処理
        return res
          .status(400)
          .json({ message: "ログイン失敗：パスワードが間違っています" });
      }
    }
  } catch (error) {
    // ユーザーデータが存在しない場合の処理
    return res
      .status(400)
      .json({ message: "ログイン失敗：ユーザー登録をしてください" });
  }
};
export default loginUser;
