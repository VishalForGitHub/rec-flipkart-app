import "../styles/Home.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Sections from "../component/Sections";
import SlidingImages from "../component/SlidingImages";
import ProductCard from "../component/ProductCard";
export default function Home({handleCartCount,floatingMessage}) {
    const [productArr, setProductAryy] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                // Extract the 'products' array and set it to the state
                console.log(response.data.products)
                setProductAryy(response.data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProduct();
    }, []);

    return (
        <div className="homeConatiner">
            <Sections />
            <SlidingImages />
            <div className="card-container">

                {
                    productArr.map((product) => (
                        <ProductCard key={product.id} 
                        id={product.id} 
                        title={product.title}
                        imgurl={product.images}
                        rating={product.rating}
                        price={product.price * 80}
                        discount={product.discountPercentage}
                        handleCartCount={handleCartCount}
                        />
                    ))

                }
            </div>
        </div>
    );
}
