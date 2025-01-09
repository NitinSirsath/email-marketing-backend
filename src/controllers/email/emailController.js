import agenda from "../../config/agenda.js";
import Sequence from "../../models/sequence.js";

// Save a new sequence
export const saveSequence = async (req, res) => {
  const { nodes, email, scheduleTime } = req.body; // Added scheduleTime to the request body
  const userId = req.user.id;

  try {
    // Validate scheduleTime
    if (!scheduleTime) {
      return res
        .status(400)
        .json({ success: false, message: "Schedule time is required" });
    }

    // Save sequence to the database
    const sequence = new Sequence({ userId, nodes });
    await sequence.save();
    console.log("calling save");

    // Schedule an email job at the provided time
    await agenda.schedule(scheduleTime, "sendEmail", {
      email,
      subject: "New Sequence Saved",
      text: `Your sequence with ID ${sequence._id} has been saved successfully.`,
    });

    res.status(200).json({
      success: true,
      message: `Sequence saved and email scheduled at ${scheduleTime}`,
      sequence,
    });
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
