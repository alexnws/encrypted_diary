import React, { createContext, useState, ReactNode } from "react";
import CryptoJS from "crypto-js";

// Contexte pour partager les entrées du journal et les fonctions d'ajout et de suppression
export const DiaryContext = createContext<{
  entries: { id: string; encryptedText: string }[];
  addEntry: (text: string, password: string) => void;
  deleteEntry: (id: string) => void;
}>({
  entries: [],
  addEntry: () => {},
  deleteEntry: () => {},
});

// Provider pour gérer les entrées et fournir le contexte à l'application
export function Provider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<
    { id: string; encryptedText: string }[]
  >([]);

  // Ajout d'une entrée avec chiffrement
  const addEntry = (text: string, password: string) => {
    const encryptedText = CryptoJS.AES.encrypt(text, password).toString();
    setEntries([...entries, { id: Date.now().toString(), encryptedText }]);
  };

  // Supprime une entrée par ID
  const deleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </DiaryContext.Provider>
  );
}
