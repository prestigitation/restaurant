import Title from '../Title'
import history_first from '../../img/history_1.png'
import history_second from '../../img/history_2.png'
import history_third from '../../img/history_3.png'
import history_fourth from '../../img/history_4.png'

function History() {
    const numbersData = [
            {
            id: 0,
            quantity: '93',
            text: 'Напитки'
            },
            {
            id: 1,
            quantity: '206',
            text: 'Еда'
            },
            {
            id: 2,
            quantity: '71',
            text: 'Закуски'
            }
        ]
    return (
        <>
        <div className="page__history-description">
            <Title text="Наша" highlighted_text="История" first_font_size={54} second_font_size={54} second_color='#FF7400' />
            <div className="page__history-text">
                Как и у любого другого самобытного места, у нас есть своя, особая история. 
                Идея ресторана пришла основателям неожиданно. 
                Во время прогулки по лесу создатель нашего 
                ресторана застрял в сотнях километров от ближайшего населенного пункта. 
                Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
            </div>
            <div className="page__history-numbers">
            {numbersData.map(number => 
                <Title
                    key={number.id} 
                    reverse={true} 
                    text={number.text}
                    highlighted_text={number.quantity}
                    first_font_size={20}
                    second_font_size={40}
                    width={84}
                />
            )}
            </div>
            </div>
            <div className="page__history-images">
                <img src={history_first} className="history_first" alt="history" />
                <img src={history_second} className="history_second" alt="history" />
                <img src={history_third} className="history_third" alt="history" />
                <img src={history_fourth} className="history_fourth" alt="history" />
            </div>
        </>
    )
}

export default History