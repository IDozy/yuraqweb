import React from "react";
import "./Segmentos.css";
import ConstructionIcon from '@mui/icons-material/Construction';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Metalurgia from '@mui/icons-material/LocalFireDepartmentOutlined';


const segmentos = [
  {
    id: 1,
    title: "Minería",
    image: "/mineria.png",
    icon: <EngineeringIcon style={{ fontSize: 60 }} />,
  },
  {
    id: 2,
    title: "Construcción",
    image: "/construccion.png",
    icon: <ConstructionIcon style={{ fontSize: 60 }} />,
  },
  {
    id: 3,
    title: "Agricultura",
    image: "/agricultura.png",
    icon: <AgricultureIcon style={{ fontSize: 60 }} />,
  },
  {
    id: 4,
    title: "Metalurgia",
    image: "/metalurgia.png",
    icon: <Metalurgia style={{ fontSize: 60 }} />,
  },
];

export default function Segmentos() {
  return (
    <section className="segmentos">
      <h2 className="segmentos-title"> Segmentos a los que nos dirigimos </h2>
      <p className="segmentos-subtitle">
        Contemplamos el abastecimiento en diversidad de industrias a continuación conoce algunas de las más comunes.
      </p>
      <div className="segmentos-grid">
        {segmentos.map(({ id, title, image, icon }) => (
          <div
            key={id}
            className="segmento-card"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="segmento-icon">
              <icon style={{ fontSize: 60 }}>{icon}</icon>
            </div>
            <div className="segmento-hover-text">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
