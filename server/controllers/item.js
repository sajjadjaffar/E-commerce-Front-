// const ItemsSchema = require("../models/items");

// //items handlers
// async function handleGetItems(req, res) {
//   try {
//     const items = await ItemsSchema.find({});
//     res.json(items);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching items." });
//   }
// }
// async function handleAddItems(req, res) {
//   try {
//     const { itemName, price, colors, quantity } = req.body;

//     const colorsArray = colors.split(",").map((color) => color.trim());

//     const imagePaths =
//       req.files && req.files.length > 0
//         ? req.files.map((file) => file.path)
//         : ["uploads/default.png", "uploads/default.png", "uploads/default.png"];

//     const newItem = await ItemsSchema.create({
//       itemName,
//       price,
//       quantity,
//       image: imagePaths,
//       colors: colorsArray,
//     });

//     res.status(201).json(newItem);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: "Error adding item." });
//   }
// }
// async function handleDeleteItem(req, res) {
//   const { uniqueId } = req.body;
//   const user = await ItemsSchema.findOneAndDelete({ uniqueId: uniqueId });
//   res.json("User deleted success");
// }
// async function handleGetItemInfo(req, res) {
//   const { uniqueId } = req.body;

//   const item = await ItemsSchema.findOne({ uniqueId: uniqueId });
//   res.json(item);
// }
// async function handleItemupdate(req, res) {
//   try {
//     const { uniqueId, itemName, quantity, price, colors } = req.body;
//     const imagePaths = req.files.map((file) => file.path);

//     if (!uniqueId) {
//       return res.status(400).json({ message: "uniqueId is required" });
//     }
//     const colorsArray = colors.split(",").map((color) => color.trim());

//     const newItem = {
//       itemName,
//       quantity,
//       price,
//       colors: colorsArray,
//       image: imagePaths,
//     };

//     const updatedItem = await ItemsSchema.findOneAndUpdate(
//       { uniqueId },
//       { $set: newItem },
//       { new: true }
//     );

//     if (!updatedItem) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Item updated successfully", data: updatedItem });
//   } catch (error) {
//     console.error("Update error:", error);
//     res.status(500).json({ message: "An error occurred during item update" });
//   }
// }

// module.exports = {
//   handleGetItems,
//   handleAddItems,
//   handleDeleteItem,
//   handleGetItemInfo,
//   handleItemupdate,
// };
