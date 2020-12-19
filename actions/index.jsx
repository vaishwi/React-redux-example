
// action creator
export const  textEnter = (textData) => {
    //console.log("Text feild modified: ",textData);

    return{
        type: "TEXT_MODIFIED",
        payload: textData
    }
};