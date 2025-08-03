import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';


const Category = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]);

    useEffect(() => {
        const categoryProducts = categories[category];
        setProducts(categoryProducts);
    }, [category, categories]);

    return (
        <>
            <h2 className='title'>{category.toLocaleUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
        </>
    );
}


export default Category;