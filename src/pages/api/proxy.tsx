import axios from 'axios';

export default async function handler(req: any, res: any) {
    const { type } = req.query;

    try {
        const response = await axios.get(`https://fakestoreapi.in/api/products/category`, {
            params: { type },
        });
        res.status(200).json(response.data);
    } catch (error: any) {
        res.status(error.response?.status || 500).json({ message: 'Something went wrong!' });
    }
}