import React, { useContext, useState } from "react";
import { DiaryContext } from "../context/Provider";
import PasswordComponent from "./Password";

// Composant principal pour afficher et gérer la liste des entrées
const ListComponent: React.FC = () => {
  const { entries, deleteEntry } = useContext(DiaryContext); // Accès aux entrées et fonction de suppression via le contexte

  const [selectedEntry, setSelectedEntry] = useState<{
    id: string;
    encryptedText: string;
  } | null>(null); // État pour l'entrée sélectionnée

  const [decryptedText, setDecryptedText] = useState(""); // État pour le texte déchiffré

  // Fonction pour sélectionner une entrée pour la lecture
  const handleRead = (entry: { id: string; encryptedText: string }) => {
    setSelectedEntry(entry); // Définit l'entrée à lire
    setDecryptedText(""); // Réinitialise le texte déchiffré
  };

  // Fonction pour supprimer une entrée
  const handleDelete = (id: string) => {
    deleteEntry(id); // Supprime l'entrée du contexte
    if (selectedEntry && selectedEntry.id === id) {
      // Réinitialise si l'entrée supprimée est sélectionnée
      setSelectedEntry(null);
      setDecryptedText("");
    }
  };

  return (
    <div>
      <h3>Entries List</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <button onClick={() => handleRead(entry)}>Read</button>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedEntry && (
        <PasswordComponent
          encryptedText={selectedEntry.encryptedText}
          onDecrypt={(text) => setDecryptedText(text)}
        />
      )}
      {decryptedText && <p>Decrypted Entry: {decryptedText}</p>}
    </div>
  );
};

export default ListComponent;
