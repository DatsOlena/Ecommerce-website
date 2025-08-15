import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';
import { useSelector } from 'react-redux';


const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

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