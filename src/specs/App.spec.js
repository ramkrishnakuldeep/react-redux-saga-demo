import React from 'react';
import { shallow } from '../enzyme';
import App from '../App';

describe('App component', () => {
    it('initial render', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
