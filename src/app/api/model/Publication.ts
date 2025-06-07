import mongoose from 'mongoose'

const PublicationSchema = new mongoose.Schema({
  title: String,
  year: String,
  image: String,
}, { timestamps: true })

export const Publication =
  mongoose.models.Publication || mongoose.model('Publication', PublicationSchema)
