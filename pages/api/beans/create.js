// import auth from "@/utils/auth.js";
import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";
const createBeans = async (req, res) => {
  try {
    await connectDB();

    await BeansModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
};

// export default auth(createBeans);
export default createBeans;
