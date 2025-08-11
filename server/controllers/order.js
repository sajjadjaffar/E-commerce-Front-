// const Orderschema = require("../models/order");
// const { v4: uuidv4 } = require("uuid");
// const CartSchema = require("../models/cart");

// //order handlers
// async function handleOrder(req, res) {
//   try {
//     const { filteredCart, userId, orderId } = req.body;
//     console.log(filteredCart);
//     console.log(userId);
//     console.log(orderId);

//     if (!filteredCart || !userId || !orderId) {
//       return res
//         .status(400)
//         .json({ message: "Missing cart or userId or orderId" });
//     }

//     const newOrder = await Orderschema.create({
//       OrderDetail: filteredCart,
//       userId: userId,
//       OrderId: orderId,
//     });

//     res.status(201).json(newOrder);
//   } catch (error) {
//     console.error("Order creation error:", error);
//     res.status(500).json({ message: "Failed to create order", error });
//   }
// }
// async function handleCart(req, res) {
//   const { userId, item } = req.body;

//   if (!userId || !item) {
//     return res.status(400).json({ success: false, message: "Missing data" });
//   }

//   try {
//     let cart = await CartSchema.findOne({ userId });
//     if (!cart) {
//       // If no cart exists, create one
//       cart = new CartSchema({
//         userId,
//         orderId: uuidv4(),
//         items: [item],
//       });
//     } else {
//       // Cart exists — check if item (with same uniqueId and selectedColor) is already there
//       const existingItem = cart.items.find(
//         (cartItem) =>
//           cartItem.uniqueId === item.uniqueId &&
//           cartItem.selectedColor === item.selectedColor
//       );

//       if (existingItem) {
//         existingItem.quantity += item.quantity;
//       } else {
//         cart.items.push(item);
//       }
//     }

//     await cart.save();

//     res.status(200).json({ success: true, cart });
//   } catch (err) {
//     console.error("Add to cart error:", err);
//     res.status(500).json({ success: false, message: "Failed to add item" });
//   }
// }
// async function handleCartInfo(req, res) {
//   try {
//     const { userId } = req.body;
//     const order = await CartSchema.find({ userId: userId });
//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error retrieving users");
//   }
// }
// async function handlequantityupdate(req, res) {
//   const { userId, uniqueId, quantity } = req.body;

//   try {
//     const cart = await CartSchema.findOne({ userId });
//     if (!cart) return res.status(404).json({ message: "Cart not found" });

//     const item = cart.items.find((item) => item.uniqueId === uniqueId);

//     if (!item) {
//       return res.status(404).json({ message: "Item not found in cart" });
//     }

//     item.quantity = quantity; // Update quantity
//     await cart.save();

//     res.status(200).json({ message: "Quantity updated successfully" });
//   } catch (error) {
//     console.error("Error updating cart quantity:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// module.exports = {
//   handleCart,
//   handleOrder,
//   handleCartInfo,
//   handlequantityupdate,
// };
