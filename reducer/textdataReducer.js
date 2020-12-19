/*export default function(){
    return {
        //{
            textString: 'vaishwi'
        //}   
    }
}*/

export default function (state=null, action) {
    switch(action.type){
        case "TEXT_MODIFIED":
            //console.log("Actions switch : ",action.payload);
            return action.payload;
            break;
    }
    return state;
}