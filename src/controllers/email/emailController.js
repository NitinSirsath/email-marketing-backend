import Sequence from "../../models/sequence.js";

// Save a new sequence
export const saveSequence = async (req, res) => {
  const { nodes } = req.body;
  const userId = req.user.id;

  try {
    const sequence = new Sequence({ userId, nodes });
    await sequence.save();
    res
      .status(201)
      .json({ success: true, message: "Sequence saved", sequence });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

// Get all sequences for a user
export const getSequences = async (req, res) => {
  const userId = req.user.id;

  try {
    const sequences = await Sequence.find({ userId });
    res.status(200).json({ success: true, sequences });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};
