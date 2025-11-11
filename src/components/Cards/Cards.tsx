import React from "react";
import "./Cards.css";

interface CardProps {
    title: string;
    description: string;
    image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="card"
             style={{
                 backgroundImage: image
                     ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`
                     : undefined,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
             }}>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
