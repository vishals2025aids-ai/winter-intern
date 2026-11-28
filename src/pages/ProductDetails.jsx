
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const getProduct = async () => {
        try {
            setLoading(true)

            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            )

            setProduct(response.data)

        } catch (error) {
            setError('Failed to load product details')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])

    if (loading) {
        return (
            <h2 className="text-center text-xl mt-10">
                Loading Product Details...
            </h2>
        )
    }

    if (error) {
        return (
            <h2 className="text-center text-red-500 mt-10">
                {error}
            </h2>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
                Product Details
            </h1>

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Product Image */}

                    <div className="flex justify-center items-center bg-gray-50 rounded-lg p-5">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-72 w-full object-contain"
                        />

                    </div>

                    {/* Product Information */}

                    <div className="flex flex-col gap-4">

                        <span className="text-sm text-blue-600 uppercase font-semibold">
                            {product.category}
                        </span>

                        <h2 className="text-2xl font-bold text-gray-800">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>

                        <h3 className="text-3xl font-bold text-green-600">
                            ${product.price?.toFixed(2)}
                        </h3>

                        <div className="flex items-center gap-2">

                            <span className="text-yellow-500 text-xl">
                                ★
                            </span>

                            <span className="font-semibold">
                                {product.rating?.rate}
                            </span>

                            <span className="text-gray-500">
                                ({product.rating?.count} reviews)
                            </span>

                        </div>

                        <Link
                            to="/products"
                            className="bg-blue-600 text-white text-center p-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Back to Products
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
