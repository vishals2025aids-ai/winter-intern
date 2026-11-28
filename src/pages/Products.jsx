
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            )

            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">Products Page</h1>

            <p>Welcome to the Products page!</p>

            <div className="grid grid-cols-3 gap-5 p-5">

                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 w-full object-contain"
                        />

                        <h2 className="font-bold mt-3">
                            {product.title}
                        </h2>

                        <p>${product.price.toFixed(2)}</p>

                        <Link to={`/productDetails/${product.id}`}>
                            <button className="bg-blue-500 text-white p-2 mt-2 rounded">
                                View Details
                            </button>
                        </Link>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Products
