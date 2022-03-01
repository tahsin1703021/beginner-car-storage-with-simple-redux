import * as actions from './actionTypes';

export function add_car({model,color,regNo,owner,reconditioned}){
    // console.log(model,color,regNo,owner,reconditioned)
    return {
        type: actions.ADD_CAR,
        payload: {
            model,
            color,
            regNo,
            owner,
            reconditioned
        }
    }
};
export function delete_car(id){
    return {
        type: actions.DELETE_CAR,
        payload: {
            id
        }
    }
};
