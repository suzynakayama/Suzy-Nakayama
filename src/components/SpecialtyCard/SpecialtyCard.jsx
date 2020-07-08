import React from "react";
import "./SpecialtyCard.css";

export default function SpecialtyCard({data}) {
    return (
        <div className="specialty-card__container">
            {data.map((lang, idx) => {
                return (
                    <div key={idx} className="specialty-card__each">
                        {lang.icon}
                        <p>{lang.name}</p>
                    </div>
                );
            })}
        </div>
    );
}
