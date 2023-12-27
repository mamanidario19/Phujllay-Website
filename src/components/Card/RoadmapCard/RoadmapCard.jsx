import './RoadmapCard.css';

export const RoadmapCard = ({ title, date }) => {
    return (
        <article className="roadmap-card">
            <a href="#" className='roadmap-card-link'>                
                <h2 className="roadmap-card-title">{title}</h2>
                <h3 className="roadmap-card-date">{date}</h3>
            </a>
        </article>
    );
};