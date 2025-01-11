import agenda from "../../config/agenda.js";
import Sequence from "../../models/sequence.js";

export const saveSequence = async (req, res) => {
  const { nodes, email, scheduleTime } = req.body;
  const userId = req.user.id;

  try {
    if (!email || !scheduleTime) {
      return res.status(400).json({
        success: false,
        message: "Email and schedule time are required",
      });
    }

    const sequence = new Sequence({ userId, nodes, email, scheduleTime });
    await sequence.save();

    // Schedule the email job
    await agenda.schedule(new Date(scheduleTime), "sendEmail", {
      email,
      subject: "Sequence Scheduled",
      text: `Your sequence with ID ${sequence._id} has been scheduled.`,
    });

    res.status(200).json({
      success: true,
      message: "Sequence saved and email scheduled successfully",
      sequence,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to save sequence",
      error: err.message,
    });
  }
};

// Get all sequences
export const getSequences = async (req, res) => {
  const userId = req.user.id;

  try {
    // Fetch all sequences for the user
    const sequences = await Sequence.find({ userId }).select(
      "_id nodes email scheduleTime createdAt updatedAt"
    );
    res.status(200).json({ success: true, sequences });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch sequences",
      error: err.message,
    });
  }
};

// Update sequence
export const updateSequence = async (req, res) => {
  const { id, nodes, scheduleTime } = req.body; // Extract ID from body
  const userId = req.user.id;

  try {
    const sequence = await Sequence.findOneAndUpdate(
      { _id: id, userId },
      { nodes, updatedAt: new Date() },
      { new: true }
    );

    if (!sequence) {
      return res
        .status(404)
        .json({ success: false, message: "Sequence not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Sequence updated", sequence });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

// Delete sequence
export const deleteSequence = async (req, res) => {
  const { sequenceId } = req.body;
  console.log(sequenceId, "sequenceId");
  console.log("Delete request received for sequenceId:", sequenceId);

  try {
    const sequence = await Sequence.findOne({ _id: sequenceId });
    console.log("Sequence found:", sequence);

    if (!sequence) {
      return res
        .status(404)
        .json({ success: false, message: "Sequence not found" });
    }

    const now = new Date();
    if (new Date(sequence.scheduleTime) < now) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete a sequence with a past schedule",
      });
    }

    await Sequence.deleteOne({ _id: sequenceId });
    console.log("Sequence deleted:", sequenceId);
    res.status(200).json({ success: true, message: "Sequence deleted" });
  } catch (err) {
    console.error("Error deleting sequence:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete sequence",
      error: err.message,
    });
  }
};
