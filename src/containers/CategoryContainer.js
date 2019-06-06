import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesAction, filterCategory } from '../actions';
import { CategoryProps } from '../propTypes';
import { CategoryDefaultProps } from '../defaultProps';
import CategoryList from '../components/CategoryList';

class CategoryContainer extends Component {
    componentDidMount () {
        this.props.getCategoriesData();
        this.props.filterCategory(this.props.filterBy);
    }
    render () {
        return <CategoryList {...this.props} />;
    }
}

CategoryContainer.propTypes = CategoryProps;
CategoryContainer.defaultProps = CategoryDefaultProps;

const mapStateToProps = (state) => ({
    categories: state.categories,
    filterBy: state.filterBy
});

const mapDispatchToProps = {
    getCategoriesData: getCategoriesAction,
    filterCategory: filterCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
