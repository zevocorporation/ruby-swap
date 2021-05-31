import App from './App'


import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('header rendering',()=>{
    test('header rendered',()=>{
        const screen = shallow(<App/>)
        expect(screen.find('.button').text()).toContain('connect wallet')
    })

})


