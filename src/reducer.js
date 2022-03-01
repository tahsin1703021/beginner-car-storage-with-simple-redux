import * as actions from './actionTypes';

let carID = 0;

export default function reducer(state = [], action) {
   
    switch (action.type) {

        case actions.ADD_CAR:
            return [
                ...state, 
                 {
                    carId: ++carID, 
                    model: action.payload.model, 
                    color: action.payload.color,
                    regNo: action.payload.regNo,
                    owner: action.payload.owner,
                    reconditioned: action.payload.reconditioned 
                }
            ];
        case actions.DELETE_CAR:
            return state.filter((car) => car.carId !== action.payload.id);
        default:
            return state;
    }

}