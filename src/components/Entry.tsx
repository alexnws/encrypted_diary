import React, { useState, useContext } from "react";
import { DiaryContext } from "../context/Provider";

// Composant Entry pour ajouter une nouvelle entrée au journal
const Entry: React.FC = () => {
  const { addEntry } = useContext(DiaryContext); // Accès à la fonction addEntry du contexte pour ajouter une entrée

  const [text, setText] = useState(""); // État pour le texte de l'entrée
  const [password, setPassword] = useState(""); // État pour le mot de passe de l'entrée

  // Fonction pour ajouter l'entrée et réinitialiser les champs de texte et mot de passe
  const handleAddEntry = () => {
    addEntry(text, password); // Appelle addEntry avec le texte et le mot de passe fournis
    setText("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2>New Entry</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your entry..."
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{
          width: "100%",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={handleAddEntry}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Add Entry
      </button>
    </div>
  );
};

export default Entry;
