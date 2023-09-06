import store from "./store.js";

let count = 100;
console.log(store.getState())
store.dispatch({
    type : "INC",
    data : count,
})

console.log(store.getState())

store.dispatch({
    type : "INC",
    data : count,
})

console.log(store.getState())

store.dispatch({
    type : "TODO",
    data : "Amit"
})

store.dispatch({
    type : "TODO",
    data : "Yadav"
})

console.log(store.getState())
