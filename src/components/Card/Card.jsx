export const Card = ({ image, title, date, description }) => {
    return (
        <div className="card">
            <img className="imagen_roadmap" src={image} alt={title} />
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};