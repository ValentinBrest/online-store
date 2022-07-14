import './App.css';
import Filters from './layout/Filters/Filters';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import ProductsList from './layout/ProductsList/ProductsList';
import { useState } from 'react';
import { date } from './products';

function App() {
    const [quantityProducts, setQuantityProducts] = useState(0);
    const [products, setProducts] = useState(date);

    return (
        <div className="App">
            <Header quantityProducts={quantityProducts} />
            <div className="main">
                <div className="container">
                    <div className="main__wrap">
                        <Filters date={date} setProducts={setProducts} />
                        <ProductsList
                            setQuantityProducts={setQuantityProducts}
                            products={products}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
