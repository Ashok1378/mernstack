import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie_id: { type: String, required: true },
  movie_title: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

reviewSchema.set('toJSON', { virtuals: true });

export const Review = mongoose.model('Review', reviewSchema);
