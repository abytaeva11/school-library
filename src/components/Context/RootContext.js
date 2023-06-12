
import {LanguageContext} from "./index"
import {useState} from "react";


const RootContext = ({children}) => {
    const data = [
        {
            card: {
                title: "Подпишитесь сейчас за 250,00 $ / год",
                desc: "И получи доступ ко всем нашим материалам и начинай развиваться сейчас вместе со всеми",
                sub: "Подписаться",
                know: "Узнать больше",
                titleKG: "Абоненттүү болу үчүн 250,00 $ / жыл",
                descKG: "Жана бардык материалдарыбызга доступ алып, жана бардык баштоочулармен кызыктаныңыз",
                subKG: "Абоненттүү болуу",
                knowKG: "Кошулууну аныктап көрүү",
            },
            accord: {
                name: "Появились вопросы?",
                question1: "Сколько всего насчитывается материала всего?",
                question2: "Потеряю ли я оставшесея время если перейду на другой до окончания этого?",
                question3: "Могу ли я отказаться от автопродления подписки?",
                question4: "Откуда мне узнавать про новые статьи и курсы?",
                title: "К сожелению мы уже утратили счет материала спустьа столько лет работы и уже их настолько много что их уже не",
                nameKG: "Суроолор барбы?",
                question1KG: "Жалпыда жеткиликтүү материалдар канча?",
                question2KG: "Бул бүтөн болгондон мурун калган убактылууга четкилештиргем?",
                question3KG: "Абоненттикти авто-жаңылоо жөнүндө токтотуу болуу мүмкүнмү?",
                question4KG: "Жаңы макалалар жана курстар тууралуу кабардарымдан какта каламынбы?",
                titleKG: "Кечиресиз, биз жумуш жылдарынан кийин материалдардын санын өзүмүз чыгарып кеттік, жана алар азайы көп болду, алар..."
            }
        }
    ];
    const [language, setLanguage] = useState(false)
    const getKG = () =>{
        setLanguage(true)
    }
    const getRU = () =>{
        setLanguage(false)
    }
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <LanguageContext.Provider value={{
            language,
            data,
            getKG,
            getRU
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;