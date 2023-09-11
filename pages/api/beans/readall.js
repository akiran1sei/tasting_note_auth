import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";

const getAllItems = async (req, res) => {
  try {
    await connectDB();
    // const email = "nakamori.work@gmail.com";
    // const email = "nakamori.1224@gmail.com";

    const allItems = await BeansModel.find({});
    // const allItems = await BeansModel.find({
    //   email: email,
    // });
    return res
      .status(200)
      .json({ message: "読み取り成功（オール）", allItems: allItems });
  } catch (err) {
    return res.status(400).json({ message: "読み取り失敗（オール）" });
  }
};
export default getAllItems;
