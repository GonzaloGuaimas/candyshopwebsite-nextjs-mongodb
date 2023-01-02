import axiosInstance from '../pages/api/axios'

export const getProducts = async () => {
    const tours = await axiosInstance.get('/products')
    console.log(tours)
    return tours.data.products
}