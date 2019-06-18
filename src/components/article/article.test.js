import React from 'react';
import Article from './index';
import { shallow } from 'enzyme';

describe('Article', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Article
                heading="heading"
                content="content"
                colour="info"
                minHeight="200"
            />
        )

        expect(wrapper).toMatchSnapshot();
    })
})