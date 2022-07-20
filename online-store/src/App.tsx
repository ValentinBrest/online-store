import './App.css';
import Filters from './layout/Filters/Filters';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import ProductsList from './layout/ProductsList/ProductsList';
import { useState } from 'react';
import { date } from './products';
import { Product } from './interfaces/product.interface';
import React from 'react';

function App() {
    const [quantityProducts, setQuantityProducts] = useState<number>(0);
    const [data, setDate] = useState<Product[]>(date);
    const [products, setProducts] = useState<Product[]>(data);

    return (
        <div className="App">
            <Header quantityProducts={quantityProducts} />
            <div className="main">
                <div className="container">
                    <div className="main__wrap">
                        <Filters date={data} setProducts={setProducts} />
                        <ProductsList
                            data={data}
                            setDate={setDate}
                            setQuantityProducts={setQuantityProducts}
                            products={products}
                            quantityProducts={quantityProducts}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
