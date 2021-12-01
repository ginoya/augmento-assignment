import Assignment from "./Assignment"
import { Provider } from 'react-redux';
import store from "../../store";

export default {
    title: 'Assigment/Dashboard',
    component: Assignment
}

export const Dashboard = () => {
    return (
        <Provider store={store}>
            <Assignment />
        </Provider>
    );
}