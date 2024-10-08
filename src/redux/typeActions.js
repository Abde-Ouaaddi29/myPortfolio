export const SET_DARKMODE = 'SET_DARKMODE';
export const SET_MYINFO = 'SET_MYINFO';
export const SET_LANG = 'SET_LANG';
export const OPEN_CARD = 'OPEN_CARD';


export const setDarkMode = (value) => {
    return {
        type: SET_DARKMODE,
        payload: value
    }
}

export const setLang = (lang) => {
    return {
        type:SET_LANG,
        payload:lang
    }
}

export const opencard = () => {
    return {
        type:OPEN_CARD
    }
}


// export const setInfo = (data) => {
//     return {
//         type:SET_MYINFO,
//         payload:data
//     }
// }