import * as types from '../action-types';
import axios from 'axios';
export default {
    getHomeList() {
        return function (dispatch, getState) {
            axios.get('http://localhost:4000/api/users').then(function (res) {
                let list = res.data;
                dispatch({
                    type: types.SET_HOME_LIST,
                    payload: list,
                });
            });
        }
    }
}