
import Assignment from "./Assignment";
import { applyMiddleware, createStore } from "redux";
import { middlewares, rootReducer } from "../../store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { debug } from "console";
import { shallow } from "enzyme";
import { DirectionsBusFilledTwoTone } from "@mui/icons-material";
import { DashboardConstants } from "./AssignmentActions";
import AssigmentReducer from "./AssigmentReducer";

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
    let commonContainer: any;
    beforeEach(() => {
        store = mockStore(initialState);
        let { container } =
            render(
                <Provider store={store}>
                    <Assignment />
                </Provider>
            );
        commonContainer = container;
    })

    it('render assignment-dashboard div', () => {
        const assigmentDiv = findByDataTestAttr(commonContainer, 'Assignment-Dashboard');
        debug();
        // console.log(assigmentDiv?.outerHTML)
        expect(assigmentDiv).not.toBeNull();
    });

    it('render header component of dashboard', () => {
        const assigmentDiv = findByDataTestAttr(commonContainer, 'Assignment-Dashboard');
        // console.log(assigmentDiv?.outerHTML)
        expect(assigmentDiv?.outerHTML.includes('Gas Performance')).toBe(true);
    })

    it('Assigment reducer should return updated state based on action passed > ' +
        'ACTION:' + DashboardConstants.FETCHED_DATA_SUCCESS + '', () => {
            let initState = {
                data: [],
                error: ''
            }
            let newState = AssigmentReducer(initState, {
                type: DashboardConstants.FETCHED_DATA_SUCCESS,
                payload: ['Dashboard data']
            })
            expect(newState).toEqual({
                data: ['Dashboard data'],
                error: ''
            });
        });

    it('Assigment reducer should return updated state based on action passed > ' +
        'ACTION:' + DashboardConstants.FETCHED_DATA_ERROR + '', () => {
            let initState = {
                data: ['Dashboard data'],
                error: ''
            }
            let newState = AssigmentReducer(initState, {
                type: DashboardConstants.FETCHED_DATA_ERROR,
                payload: 'error ocuured while fetching'
            })
            expect(newState).toEqual({
                data: ['Dashboard data'],
                error: 'error ocuured while fetching'
            });
        })
})