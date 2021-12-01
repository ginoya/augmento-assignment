import Enzyme from 'enzyme';
import EnzymneAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter:new EnzymneAdapter(),
    disableLifecycleMethods:true
})