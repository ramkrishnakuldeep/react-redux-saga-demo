import React from 'react';
import { shallow } from '../enzyme';
import ListItem from '../components/ItemList';
import { MockItemList } from './__mock__/data';

describe('ListItem component', () => {
    it('initial render', () => {
        const component = shallow(<ListItem items={MockItemList.data} />);
        expect(component).toMatchSnapshot();
    });
});
