import ACTION_TYPES from '../actions/actionTypes';
import superHeroes from '../local-datas/superHeroes.json';

const initialSate = {
    superHeroList: [],
   
}
// чистая функция которая возвращает состояние
const superHeroReducer  = (state = initialSate, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_SUPERHERO_LIST: return {
            ...state,
            superHeroList:superHeroes};
       
        default: return state;
    }

};
export default superHeroReducer;