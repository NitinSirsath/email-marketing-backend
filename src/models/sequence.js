import mongoose from "mongoose";

const SequenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nodes: { type: Array, required: true }, // Array of flowchart nodes
    email: { type: String, required: true }, // Email associated with the sequence
    scheduleTime: { type: Date, required: true }, // Scheduled time for the sequence
  },
  { timestamps: true }
);

const Sequence = mongoose.model("Sequence", SequenceSchema);
export default Sequence;
