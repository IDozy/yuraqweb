import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function CounterHome() {
  const counters = [
    { label: "Años de experiencia", value: 30 },
    { label: "Proyectos atendidos", value: 110 },
    { label: "Clientes satisfechos", value: 100 },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px", padding: "2rem" }}>
      {counters.map((counter, index) => (
        <AnimatedCounter key={index} target={counter.value} label={counter.label} />
      ))}
    </div>
  );
}

function AnimatedCounter({ target, label }) {
  const count = useMotionValue(0);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCurrentValue(latest);
      },
    });
    return controls.stop;
  }, [count, target]);

  return (
    <div style={{ textAlign: "center" }}>
      <motion.h2
        style={{
          fontSize: "3rem",
          color: "#E91E63",
          fontWeight: "bold",
        }}
      >
        {Math.floor(currentValue)}+
      </motion.h2>
      <div style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>{label}</div>
    </div>
  );
}
