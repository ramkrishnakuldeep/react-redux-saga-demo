import React, { Component } from 'react';
import { getItemsDetailsAction } from '../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ItemDetailProps } from '../propTypes';
import { ItemDetailDefaultProps } from '../defaultProps';
import ItemDetail from '../components/ItemDetail';

class ItemDetailContainer extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        this.props.getItemsDetailsAction(this.props.id);
    }

    render () {
        const { itemDetails } = this.props;
        return (
            <ItemDetail itemDetails={itemDetails} />
        );
    }
}

ItemDetailContainer.propTypes = ItemDetailProps;

ItemDetailContainer.defaultProps = ItemDetailDefaultProps;

const mapStateToProps = (state, props) => ({
    id: props.match.params.itemId,
    itemDetails: state.itemDetails
});

const mapDispatchToProps = (dispatch) => ({
    getItemsDetailsAction: (_id) => dispatch(getItemsDetailsAction(_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer));
