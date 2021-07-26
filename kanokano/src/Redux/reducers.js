const initialState ={
    "theme" : 'normal',
    "characters" : {
        "character1" : {
            "id" : "1",
            "originalName":"向井 直也",
            "name":"MUKAI NAOYA",
            "CV" : "榎⽊淳弥",
            "student" : "高校１年生。",
            "relationship" : "超が付くほどの真面目人間。",
            "info" : "真面目すぎるゆえに、自分に嘘がつけない。幼馴染みの彼女・咲に小学1年生の時から月１ペースで告白し、高校生になってようやく付き合うようになった。",
            "food" : "好きな食べ物：バナナ",
            "birthday" : "誕生日：12月31日",
            "url" : 'https://kanokano-anime.com/assets/img/character-detail-img05@2x.png',
            "icon" : 'https://kanokano-anime.com/assets/img/chara_icon_001.png',
        }, 
        "character2" : {
            "id" : "2",
            "originalName":"佐⽊ 咲",
            "name":"SAKI SAKI",
            "CV" : "佐倉綾⾳",
            "student" : "高校１年生。",
            "relationship" : "直也の幼馴染みであり、明るく元気な最初の彼女。",
            "info" : "「二股してもいいか？」という直也からのありえない提案に、戸惑いつつも渋々OKしてしまう…。戸惑いつつも渋々OKしてしまう…。",
            "food" : "好きな食べ物：パフェ",
            "birthday" : "誕生日：4月13日",
            "url" : 'https://kanokano-anime.com/assets/img/character-detail-img01@2x.png',
            "icon" : 'https://kanokano-anime.com/assets/img/chara_icon_002.png',
        },
        "character3" : {
            "id" : "3",
            "originalName":"⽔瀬 渚",
            "name":"MINASE NAGISA",
            "CV" : "和氣あず未",
            "student" : "高校１年生。",
            "relationship" : "直也の2人目の彼女。直也と咲のクラスメイト。",
            "info" : "性格は健気で謙虚。少々要領が悪いところもあるが、超頑張り屋さん。気立てがよく料理上手。",
            "food" : "好きな食べ物：納豆",
            "birthday" : "誕生日：3月18日",
            "url" : 'https://kanokano-anime.com/assets/img/character-detail-img02@2x.png',
            "icon" : 'https://kanokano-anime.com/assets/img/chara_icon_003.png',
        },
        "character4" : {
            "id" : "4",
            "originalName":"星崎 理⾹",
            "name":"HOSHIZAKI RIKA",
            "CV" : "⽵達彩奈",
            "student" : "高校１年生。",
            "relationship" : "美しい容姿で学校内の男子から人気が高い。",
            "info" : "親や学校には内緒で人気美少女配信者の「ミリカ」としても 活動しており、高校生らしからぬ財力を持ち合わせている。ツンデレ。",
            "food" : "好きな食べ物：ハンバーグ",
            "birthday" : "誕生日：8月1日",
            "url" : 'https://kanokano-anime.com/assets/img/character-detail-img03@2x.png',
            "icon" : 'https://kanokano-anime.com/assets/img/chara_icon_004.png',
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