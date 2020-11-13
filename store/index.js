
import Vuex from 'vuex';
import volunteers from "./modules/volunteers";
import organisations from "./modules/organisations";
import menuModal from "./modules/menuModal"



const store = () => {
    return new Vuex.Store({

    modules: {
        volunteers, organisations, menuModal
    },
    
   
});
}
export default store;