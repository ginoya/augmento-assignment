// import { ElectricRickshawOutlined } from '@mui/icons-material';
// import { shallow } from 'enzyme';
// import AssigmentReducer from './AssigmentReducer';
// import Assignment from './Assignment';
// import { Provider } from 'react-redux';
// import store, { middlewares, rootReducer } from "../../store";
// import { applyMiddleware, createStore } from 'redux';
// import App from '../../App';
// import { Children } from 'react';
// import { find } from 'highcharts';


// const findByDataTestAttr = (component: any, attr: string) => {
//     return component.find(`[data-test='${attr}']`);
// }

// export const testStore = (initialState: any) => {
//     const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//     return createStoreWithMiddleware(rootReducer, initialState);
// }

// const setUp = (initialState = {}) => {
//     const store = testStore(initialState);
//     const wrapper = shallow(<Provider store={store}><Assignment /></Provider>).childAt(0).dive();
//     return wrapper;
// }
// describe('Reducer Testing', () => {

//     let wrapper: any;
//     beforeEach(() => {
//         const initialState = {
//             dashboard: {}
//         }
//         wrapper = setUp(initialState);
//     })

//     it('should render Assignment-Dashboard', () => {
//         const component = findByDataTestAttr(wrapper, 'test');
//         console.log(component.debug());
//         expect(component.length).toBe(1);

//     })


//     it('Should have header', () => {
//         const component = shallow(
//             <Provider store={store}>
//                 <Assignment />
//             </Provider>
//         ).dive();
//         const foundElement = findByDataTestAttr(component, 'Assignment-Dashboard');

//         console.log(component.debug());
//         expect(foundElement.length).toBe(1);
//     })

//     // it('Should return default state', () => {
//     //     const reducerResponse = AssigmentReducer({}, { type: '', payload: null });
//     //     expect(reducerResponse).toEqual({});
//     // })
// })


// -----------------------------------*********************--------------------------------


import Assignment from "./Assignment";
import { applyMiddleware, createStore } from "redux";
import { middlewares, rootReducer } from "../../store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { debug } from "console";
import { shallow } from "enzyme";

export const findByDataTestAttrEz = (component: any, attr: string) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

export const testStore = (initialState: any) => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}
export const findByDataTestAttr = (container: HTMLElement, attr: string) => {
    return container.querySelector('[data-test=' + attr + ']')
}
describe('Assignment component', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;

    it('render assignment-dashboard div', () => {
        store = mockStore(initialState);
        const { container } =
            render(
                <Provider store={store}>
                    <Assignment />
                </Provider>
            );
        const assigmentDiv = findByDataTestAttr(container,'Assignment-Dashboard');
        //container.querySelector('[data-test=' + 'Assignment-Dashboard' + ']');
        expect(assigmentDiv).not.toBeNull();
    });



})
// describe('Reducer Testing enzyme', () => {
//     const mockStore = configureStore();
//     let store = mockStore({});
//     it('Should have header', () => {
//         const component = shallow(
//             <Provider store={store}>
//                 <Assignment />
//             </Provider>
//         ).childAt(0).shallow();
//         const foundElement = findByDataTestAttrEz(component, 'Assignment-Dashboard');
//         console.log(component);
//         expect(foundElement.length).toBe(1);
//     })
// });