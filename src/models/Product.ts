import mongoose, { Document, Types } from 'mongoose'
export interface IProduct extends Document {
    id: Types.ObjectId;
    name: string
    description: string
    list1: number
    list2: number
    list3: number
    cost: number
    category: string
    quantity: number
    created: string
}
const ProductSchema = new mongoose.Schema<IProduct>({
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

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)