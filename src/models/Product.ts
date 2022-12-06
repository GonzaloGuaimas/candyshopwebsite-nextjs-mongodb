import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    list1: Number,
    list2: Number,
    list3: Number,
    cost: Number,
    category: String,
    quantity: Number,
    created: String
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)