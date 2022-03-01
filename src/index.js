import store from "./store";
import * as functions from './actions';


store.subscribe(()=> console.log('state changed', store.getState()));

store.dispatch(functions.add_car({
      model: 'ada',
      color: 'sdf',
      regNo: '35434',
      owner: 'sfsg',
      reconditioned: false
 }));

// store.dispatch(functions.add_car('Honda','green','53-0000','Zilani',false));
// store.dispatch(functions.add_car('BMW','black','52-2222','Shamsul',false));
// store.dispatch(functions.delete_car(2));


console.log(store.getState());