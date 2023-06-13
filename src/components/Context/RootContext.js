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
    const subscribe = [
        {
            decor: "Оформление подписки",
            name: {
                title: "ФИО",
                input: "Muslim Bolot Joodarovich"
            },
            email: {
                title: "Електронная почта",
                input: "Example@gmail.com"
            },
            number: {
                title: "Номер телефона",
                input: "+996 770 55 55 55 "
            },
            password: {
                title: "Промокод",
                input: "If you do have"
            },
            pay: {
                title: "Оплата",
                visa: "Visa",
                card: "Master Card"
            },
            cart: {
                title: "Номер карты",
                number: "1234 4567 7788 9210",
                term: "Срок",
                time: "12/25",
                cvv: "398"
            },

            average: {
                title: "Уровень пакета",
                usual: "Обычный",
                usual2: "Ежемесячно",
                usual3: "Ежегодно",
                usual4: "Все новые статьи",
                usual5: "Все мастер классы по саморозвитию",
                usual6: "Цена: 225$",
                usual7: "Выбрано",
            },
            Intensive: {
                title2: "Интенсив",
                careful: "Ежемесячно",
                careful1: "Ежегодно",
                careful2: "Все новые статьи",
                careful3: "Все мастер классы по саморозвитию",
                careful4: "Курс по чтению языка тела",
                careful5: "Курс по накоплению средств с выполотой долгов",
                careful6: "Курс по быстрому карьерному росту",
                careful7: "Курс по одолеванию страха потери",
                coin: "Цена: 500$",
                coin2: "750$",
                Choose: "Выбрать"
            }
        },
    ]
    const [language, setLanguage] = useState(false)
    const getKG = () => {
        setLanguage(true)
    }
    const getRU = () => {
        setLanguage(false)
    }
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <LanguageContext.Provider value={{
            language,
            data,
            getKG,
            getRU,
            subscribe
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default RootContext;