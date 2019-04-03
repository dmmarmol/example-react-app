import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../Home';
import Players from '../components/Players';
import Filters from '../components/Filters';

describe('<Home />', () => {
    it('renders a <Filters /> & <Players /> components', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Players)).to.have.length(1);
        expect(wrapper.find(Filters)).to.have.length(1);
    });
});
