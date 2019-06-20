import React from 'react';
import ArticleRow from './index';
import { shallow } from 'enzyme';

describe('ArticleRow', () => {
    it('renders correctly', () => {
        const data = ['a', 'b'];

        const wrapper = shallow(
            <ArticleRow
                minHeight="100"
                data={data}
            />
        )
        expect(wrapper.find('.col-md').length).toBe(2)
        expect(wrapper).toMatchSnapshot();
    })
})