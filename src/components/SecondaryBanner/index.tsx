import Button from "../Button"

function SecondaryBanner() {
    return (
        <div className="secondary__banner-wrapper">
            <div className="secondary__banner-text">
                <div className="secondary__banner-title">
                    Отпразднуйте в одном из самых лучших ресторанов.
                </div>
                <div className="secondary__banner-content text__white">
                    Только в этом месяце бизнес-ланч от 250 ₽
                </div>
            </div>
            <Button text="Заказ столика" />
        </div>
    )
}

export default SecondaryBanner