import mongoose from "mongoose";
const TweetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    parentTweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
    text: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },
    tweets: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Tweet",
      },
    ],
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Tweet", TweetSchema);
