import React from "react";
import "./nurseryCard.scss";

function NurseryCard() {
  const crechesData = [
    {
      id: 1,
      name: "Picoti Picota",
      imageLink: "../src/assets/creche3.jpeg",
      presentation:
        "La crèche « Picoti Picota » n’est pas qu’un lieu de garde, c’est surtout un lieu d’échange et d’accueil des enfants et des familles dans une confiance réciproque où le respect, l’autonomie et la sécurité sont des références privilégiées dans notre projet.",
      openingHours: "Lundi - Samedi : 9h-16h",
      contact: {
        phone: "05 56 56 56 56",
        email: "contact@picotipicota.fr",
      },
      availability: {
        "lundi 14": false,
        "mardi 15": true,
        "mercredi 16": false,
        "jeudi 17": true,
        "vendredi 18": false,
        "samedi 19": true,
      },
      type: "créche parentale",
      rate: "4,5/5",
    },
  ];

  return (
    <div className="card_container">
      {crechesData.map((creche) => (
        <div key={creche.id}>
          <h1>Créche {creche.name}</h1>
          <h2>{creche.type}</h2>
          <div className="infos_card">
            <div className="picture_card">
              <img src={creche.imageLink} alt={creche.name} />
            </div>
            <div className="description_card">
              <h3>{creche.rate}</h3>
              <h4>Description</h4>
              <p>{creche.presentation}</p>
            </div>
            <div className="horaires_nursery">
              <ul>
                <li>{creche.openingHours}</li>
                <li>{creche.contact.phone}</li>
                <li>{creche.contact.email}</li>
              </ul>
            </div>
            <div className="disponibility_nursery">
              <h4>Disponibilités</h4>
            </div>
            <div className="experience_nursery">
              <h4>Expériences</h4>
              <ul>
                <li>Formation premiers secours</li>
                <li>Formation Nesting</li>
                <li>Pedagogie Montessori</li>
              </ul>
            </div>
            <div className="accueil_nursery">
              <h4>Accueil</h4>
              <ul>
                <li>Sorties Extérieur</li>
                <li>Repas Maison</li>
                <li>Foyer non-fumeur</li>
              </ul>
            </div>
            <div className="activity_nursery">
              <h4>Activités</h4>
              <ul>
                <li>Promenade</li>
                <li>Activité d'éveil</li>
                <li>Atelier musique</li>
              </ul>
            </div>
            <button type="button">Reserver</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NurseryCard;
