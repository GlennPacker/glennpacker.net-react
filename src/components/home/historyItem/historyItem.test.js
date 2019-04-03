import React from 'react';
import { shallow } from 'enzyme';

import HistoryItem from './index';

describe('historyItem', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<HistoryItem />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})