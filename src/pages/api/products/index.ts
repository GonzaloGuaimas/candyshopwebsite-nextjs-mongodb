import dbConnect from '../../../utils/dbConnect'
import Product from '../../../models/Product'

export default async function (req: any, res: any) {
    const { method } = req

    await dbConnect()

    switch (method){
        case 'GET':
            try {
                const products = await Product.find({})
                return res.status(200).send({products})
            } catch(error){
                res.status(400).json({ success: false })
            }
            break
    }
}