import AssigmentReducer from './AssigmentReducer';

describe('Reducer Testing', () => {

    it('Should return default state', () => {
        const reducerResponse = AssigmentReducer({}, {type:'',payload:null});
        expect(reducerResponse).toEqual({});
    })

})