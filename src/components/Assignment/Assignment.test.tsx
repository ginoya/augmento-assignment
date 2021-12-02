import { ElectricRickshawOutlined } from '@mui/icons-material';
import { shallow } from 'enzyme';
import AssigmentReducer from './AssigmentReducer';
import Assignment from './Assignment';
import { Provider } from 'react-redux';
import store, { middlewares, rootReducer } from "../../store";
import { applyMiddleware, createStore } from 'redux';
import App from '../../App';
import { Children } from 'react';
import { find } from 'highcharts';


const findByDataTestAttr = (component: any, attr: string) => {
    return component.find(`[data-test='${attr}']`);
}

export const testStore = (initialState: any) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Provider store={store}><Assignment /></Provider>).childAt(0).dive();
    return wrapper;
}
describe('Reducer Testing', () => {

    let wrapper: any;
    beforeEach(() => {
        const initialState = {
            dashboard: {}
        }
        wrapper = setUp(initialState);
    })

    it('should render Assignment-Dashboard', () => {
        const component = findByDataTestAttr(wrapper, 'test');
        console.log(component.debug());
        expect(component.length).toBe(1);

    })

    
    it('Should have header', () => {
        const component = shallow(
            <Provider store={store}>
                <Assignment store={store} />
            </Provider>
        ).dive();
        const foundElement = findByDataTestAttr(component, 'Assignment-Dashboard');

        console.log(component.debug());
        expect(foundElement.length).toBe(1);
    })

    // it('Should return default state', () => {
    //     const reducerResponse = AssigmentReducer({}, { type: '', payload: null });
    //     expect(reducerResponse).toEqual({});
    // })
})