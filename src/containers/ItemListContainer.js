import React, { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemsAction } from '../actions';

import { ItemListProps } from '../propTypes';
import { ItemListDefaultProps } from '../defaultProps';

import Header from '../components/Header';
import CategoryContainer from './CategoryContainer';
import ListItem from '../components/ItemList';

class ItemListContainer extends PureComponent {
    componentDidMount () {
        this.props.getItemsData();
    }

    render () {
        const { items } = this.props;
        return (
            <React.Fragment>
                <Header />
                <CategoryContainer />
                <ListItem items={items} />
            </React.Fragment>
        );
    }
}

ItemListContainer.propTypes = ItemListProps;

ItemListContainer.defaultProps = ItemListDefaultProps;

const mapStateToProps = (state) => ({
    items: state.items.filter((item) => item.category_id === state.filterBy),
    filterBy: state.filterBy
});

const mapDispatchToProps = {
    getItemsData: getItemsAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemListContainer));
