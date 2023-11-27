import React from "react";
import ImageSliderSmoothList from "../../components/moviesList/components/imageSliderSmoothList/ImageSliderSmoothList";
import Navbar from "../../components/navbar/Navbar";
import { PRODUCTS } from "./mock/products";

const HomePage: React.FC = () => {

    return (
        // Navbar
        <>
            <Navbar />
            <ImageSliderSmoothList chunks={4} items={PRODUCTS} render={(items) => (
                <>
                    {items.map((item, index) => (
                        <div>
                            <img style={{ minWidth: '100%', maxWidth: '100%' }} key={index} src={item} />
                        </div>
                    ))}
                </>
            )} />
        </>
    )

}

export default HomePage;