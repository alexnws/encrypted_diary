import React, { useState } from "react";
import CryptoJS from "crypto-js";

interface PasswordComponentProps {
  onDecrypt: (decryptedText: string) => void; // Fonction pour transmettre le texte déchiffré
  encryptedText: string; // Texte chiffré à déchiffrer
}

// Composant pour déchiffrer un texte avec un mot de passe
const PasswordComponent: React.FC<PasswordComponentProps> = ({
  onDecrypt,
  encryptedText,
}) => {
  const [password, setPassword] = useState(""); // État pour stocker le mot de passe entré

  // Fonction pour déchiffrer le texte en utilisant le mot de passe fourni
  const handleDecrypt = () => {
    try {
      // Déchiffre le texte avec CryptoJS en utilisant le mot de passe
      const bytes = CryptoJS.AES.decrypt(encryptedText, password);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8); // Convertit le résultat en texte lisible
      onDecrypt(decryptedText); // Appelle la fonction onDecrypt avec le texte déchiffré
    } catch (e) {
      alert("Wrong password");
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleDecrypt}>Decrypt</button>
    </div>
  );
};

export default PasswordComponent;
