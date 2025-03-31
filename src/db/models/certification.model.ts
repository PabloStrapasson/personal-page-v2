import mongoose from "mongoose"

const certificationSchema = new mongoose.Schema({
   id: { type: mongoose.Schema.Types.ObjectId },
   name: { type: String, required: true },
   workload: { type: Number, required: true },
   completion_date: { type: Date },
   description: { type: String },
   certificate_link: { type: String }
})

const certification = mongoose.models.certifications || mongoose.model('certifications', certificationSchema)

export default certification