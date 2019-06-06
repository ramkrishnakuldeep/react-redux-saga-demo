import React from 'react';
import { shallow } from '../enzyme';
import Item from '../components/Item';
import { MockItem, MockSoldOutItem } from './__mock__/data';

describe('Item component', () => {
    it('render soldout item', () => {
        const component = shallow(<Item item={MockSoldOutItem} />);
        expect(component).toMatchSnapshot();
    });

    it('render item', () => {
        const component = shallow(<Item item={MockItem} />);
        expect(component).toMatchSnapshot();
    });
});
