export default function CardAbout({ obj }) {
    return (
        <div className="WrapperCard">
            {obj.icon}
            <h1 className="HeadingCardAbout">{obj.title}</h1>
            <div className = 'wrapperTextCard'>
                <p>{obj.text}</p>
            </div>

        </div>
    )
}


