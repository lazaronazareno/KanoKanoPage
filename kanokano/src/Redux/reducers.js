const initialState ={
    "theme" : 'normal',
    "music" : 'https://audio.jukehost.co.uk/zKl5rDHl9ROn28azFlQtKobZJEehiwyz',
    "characters" : {
        "character1" : {
            "id" : "1",
            "originalName":"向井 直也",
            "name":"MUKAI NAOYA",
            "CV" : "榎⽊淳弥(Enoki Junya)",
            "student" : "First year high school student.",
            "relationship" : "A very straightforward and outgoing person.",
            "info" : "I can't lie to myself because I'm too serious. She confessed to her childhood friend Saki at a monthly pace from the time she was in the first grade of elementary school, and finally became a high school student.",
            "food" : "Favorite food: Banana",
            "birthday" : "Birthday: December 31st",
            "url" : 'https://i.ibb.co/py7DwJy/img00.png',
            "icon" : 'https://i.ibb.co/Gv3MwJN/chara-icon-001.png',
            "music" : 'https://audio.jukehost.co.uk/bqT5rveRmhdX5orFLerjfiSLKsMGxgmD',
        }, 
        "character2" : {
            "id" : "2",
            "originalName":"佐⽊ 咲",
            "name":"SAKI SAKI",
            "CV" : "佐倉綾⾳(Ayane Sakura)",
            "student" : "First year high school student.",
            "relationship" : "Naoya's childhood friend, the bright and energetic first girlfriend.",
            "info" : "Naoya's impossible suggestion [Can't we be three?], Is confusing... She is confused but reluctantly OK ...",
            "food" : "Favorite food: Parfait",
            "birthday" : "Birthday: April 13th",
            "url" : 'https://i.ibb.co/HpCHNHK/img01.png',
            "icon" : 'https://i.ibb.co/7Yzz4RT/chara-icon-002.png',
            "music" : 'https://audio.jukehost.co.uk/a8uyT3zxgLT1V6kcYRO220FF7fGe9CYW',
        },
        "character3" : {
            "id" : "3",
            "originalName":"⽔瀬 渚",
            "name":"MINASE NAGISA",
            "CV" : "和氣あず未(Azumi Waki)",
            "student" : "First year high school student.",
            "relationship" : "Naoya's second girlfriend. Naoya and Saki's are classmates.",
            "info" : "His personality is sane and humble. He's a little sloppy, but he's a super hard worker. He has a good temper and is good at cooking.",
            "food" : "Favorite food: Natto",
            "birthday" : "Birthday: March 18th",
            "url" : 'https://i.ibb.co/SmCDPZD/img02.png',
            "icon" : 'https://i.ibb.co/WkDQdbh/chara-icon-003.png',
            "music" : 'https://audio.jukehost.co.uk/Wkx6yNvROxGBkMxWz8byt6ksZZmPEmAy',
        },
        "character4" : {
            "id" : "4",
            "originalName":"星崎 理⾹",
            "name":"HOSHIZAKI RIKA",
            "CV" : "⽵達彩奈(Ayana Taketatsu)",
            "student" : "First year high school student.",
            "relationship" : "With her beautiful appearance, she is very popular with boys in the school.",
            "info" : "She is also active as a popular beautiful girl streamer [Mirika] without anyone knowing this, and has financial stability that is not like a high school student. Tsundere.",
            "food" : "Favorite food: Hamburger",
            "birthday" : "Birthday: August 1st",
            "url" : 'https://i.ibb.co/KFffrTN/img03.png',
            "icon" : 'https://i.ibb.co/pbPPvMP/chara-icon-004.png',
            "music" : 'https://audio.jukehost.co.uk/tPwrdN5l49tl4PNt49NOIj7AhsVbet1J',
        },
    },
}

const CHANGE_THEME = 'CHANGE_THEME';

export default function reducer (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case CHANGE_THEME : 
        return {
            ...state,
            theme: action.payload
        }

        default : return state
    }
}

export const changeTheme = (theme) => (dispatch, getState) => {
    dispatch({
        type: CHANGE_THEME,
        payload: theme
    })
}