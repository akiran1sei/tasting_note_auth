import connectDB from "@/utils/database";
import { UserModel } from "@/utils/schemaModels";

const register = async (req, res) => {
  await connectDB();
  await UserModel.create(req.body);
  console.log(req.body);
  try {
    return res.status(200).json({ message: "ユーザー登録成功しました。" });
  } catch (error) {
    return res.status(400).json({ message: "ユーザー登録失敗しました。" });
  }
};
export default register;
