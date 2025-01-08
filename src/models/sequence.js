import mongoose from "mongoose";

const SequenceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nodes: { type: Array, required: true }, // Array of flowchart nodes
  },
  { timestamps: true }
);

const Sequence = mongoose.model("Sequence", SequenceSchema);
export default Sequence;
