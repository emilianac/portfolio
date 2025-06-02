import React, { useState } from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
];

const projects = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    skills: ["React", "CSS", "Node.js"],
    description: "Dashboard para controle financeiro pessoal.",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Pessoal",
    skills: ["React", "CSS"],
    description: "Meu site pessoal para mostrar projetos e skills.",
    link: "#",
  },
  {
    id: 3,
    title: "Bot de Automação",
    skills: ["Python"],
    description: "Bot que automatiza tarefas repetitivas.",
    link: "#",
  },
  {
    id: 4,
    title: "Jogo da Velha",
    skills: ["JavaScript", "CSS"],
    description: "Jogo simples de Tic Tac Toe para treino.",
    link: "#",
  },
];

export default function Portfolio() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Filtra projetos pelo skill selecionado ou mostra todos
  const filteredProjects = selectedSkill
    ? projects.filter((p) => p.skills.includes(selectedSkill))
    : projects;

  return (
    <div className={darkMode ? "dark" : ""} style={{ fontFamily: "Arial, sans-serif", padding: 20, backgroundColor: darkMode ? "#121212" : "#f0f0f0", color: darkMode ? "#eee" : "#222", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1>Meu Portfólio Interativo</h1>
        <button onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer", padding: "8px 12px" }}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      <section>
        <h2>Skills</h2>
        <div style={{ display: "flex", gap: 15, marginBottom: 30 }}>
          {skills.map(({ name, level }) => (
            <div
              key={name}
              onClick={() => setSelectedSkill(selectedSkill === name ? null : name)}
              style={{
                cursor: "pointer",
                padding: 10,
                borderRadius: 8,
                border: selectedSkill === name ? "2px solid #4caf50" : "2px solid transparent",
                backgroundColor: darkMode ? "#222" : "#fff",
                textAlign: "center",
                width: 100,
                userSelect: "none",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: 6 }}>{name}</div>
              <div
                style={{
                  height: 10,
                  backgroundColor: "#4caf50",
                  width: `${level}%`,
                  borderRadius: 5,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Projetos {selectedSkill ? `com ${selectedSkill}` : ""}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
          {filteredProjects.map(({ id, title, description, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: 15,
                backgroundColor: darkMode ? "#333" : "#fff",
                borderRadius: 8,
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                color: darkMode ? "#eee" : "#222",
                textDecoration: "none",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </a>
          ))}
          {filteredProjects.length === 0 && <p>Nenhum projeto encontrado para essa skill.</p>}
        </div>
      </section>
    </div>
  );
}