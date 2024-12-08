
const intialValue={
    count:0
}

const reducer=(state=intialValue,action)=>{
    switch(action.type)
    {
        case "add":
        return{
            ...state,
            count:intialValue.count+action.payload
        }
        case "take":
        return{
            ...state,
            count:intialValue.count-action.payload
        }
        default:
        return state
    }
}
export default reducer
