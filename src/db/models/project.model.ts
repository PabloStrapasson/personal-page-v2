import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
   id: { type: mongoose.Schema.Types.ObjectId },
   name: { type: String, required: true },
   tecnologies: { type: [String], required: true },
   git_repository: { type: String, required: true },
   description: { type: String },
   deploy_url: { type: String },
   image_name: { type: String },
})

const project = mongoose.models.projects || mongoose.model('projects', projectSchema)

export default project