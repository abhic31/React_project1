import axios from 'axios'
import { useEffect, useState } from 'react';
import { Headers } from '../components/Headers';
import './HomePage.css';
import PropTypes from 'prop-types';
import { formatMoney } from '../utils/money';


export function HomePage({ cart }) {
    const [products, setproducts] = useState([])

    useEffect(() => {
        const getHomedata = async () => {
          const response = await axios.get('/api/products/');
          setproducts(response.data);
        };
      
        getHomedata();
      }, []);
    

    return (
    <>
        <Headers cart={cart} />
        
        <div className="home-page">
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <div key={product.id} className="product-container">
                    <div className="product-image-container">
                        <img className="product-image"
                        src={product.image} />
                    </div>

                    <div className="product-name limit-text-to-2-lines">
                        {product.name}
                    </div>

                    <div className="product-rating-container">
                        <img className="product-rating-stars"
                        src="images/ratings/rating-45.png" />
                        <div className="product-rating-count link-primary">
                        {product.rating.count}
                        </div>
                    </div>

                    <div className="product-price">
                        {/* ${(product.priceCents).toFixed(2)} */}
                        {formatMoney(product.priceCents)}
                    </div>

                    <div className="product-quantity-container">
                        <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>

                    <div className="product-spacer"></div>

                    <div className="added-to-cart">
                        <img src="images/icons/checkmark.png" />
                        Added
                    </div>

                    <button className="add-to-cart-button button-primary">
                        Add to Cart
                    </button>
                    </div>
                        )
            })}
        </div>
        </div>
    </>
    );
}
HomePage.propTypes = {
    cart: PropTypes.array.isRequired
};