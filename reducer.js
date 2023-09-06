

const reducer = (store,action) => {


    if(action.type === "INC"){
        return {
            ...store , count :store.count + action.data
        }
    }else if(action.type === "TODO"){
        return {...store , todo : [...store.todo , action.data ]}
    }
  return store;
}

export default reducer
