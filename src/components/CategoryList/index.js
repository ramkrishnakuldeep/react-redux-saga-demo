import React from 'react';
import './categories.scss';
import { CategoryProps } from '../../propTypes';

const CategoryList = (props) => {
    const {
        categories,
        filterBy,
        filterCategory
    } = props;

    const onCategoryClick = (id) => () => filterCategory(parseInt(id, 10));

    return (
        <div className="categories">
            {
                categories.map((category) => {
                    return (
                        <div className={`category ${filterBy === parseInt(category.id, 10) ? 'active' : 'inactive'}`}
                            onClick={onCategoryClick(category.id)}
                            key={category.id}>
                            {category.name}
                        </div>
                    );
                })
            }
        </div>
    );
};

CategoryList.propTypes = CategoryProps;

export default CategoryList;
