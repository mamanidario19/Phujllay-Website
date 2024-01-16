import { Link } from 'react-router-dom';
import './RoadmapCard.css';
import React from 'react';

export const RoadmapCard = ({ id, title, date }) => {
    const url = `/roadmap-info/${id}`;

    return (
        <article className="roadmap-card">
            <Link to={url} className='roadmap-card-link'>              
                <h2 className="roadmap-card-title">{title}</h2>
                <h3 className="roadmap-card-date">{date}</h3>
            </Link>
        </article>
    );
};