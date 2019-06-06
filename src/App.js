import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

class App extends Component {
    render () {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path={'/items/:itemId'} component={ItemDetailContainer}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
