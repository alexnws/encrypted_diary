import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { waitFor } from "@testing-library/react";

test("Checks user input in the text area", () => {
  render(<App />);

  // Saisir un message dans la zone de texte
  const messageBox = screen.getByPlaceholderText("Write your entry...");
  userEvent.type(messageBox, "Alex");
  expect(messageBox).toHaveValue("Alex");
});

test("Checks password field input", () => {
  render(<App />);

  // Saisir un mot de passe dans le champ
  const passField = screen.getByPlaceholderText("Enter password");
  userEvent.type(passField, "Alex");
  expect(passField).toHaveValue("Alex");
});

test("Adds an entry, then reads it", async () => {
  render(<App />);

  // Ajouter une entrée avec un message et un mot de passe
  const messageBox = screen.getByPlaceholderText("Write your entry...");
  userEvent.type(messageBox, "Alex");
  expect(messageBox).toHaveValue("Alex");

  const passField = screen.getByPlaceholderText("Enter password");
  userEvent.type(passField, "Alex");
  expect(passField).toHaveValue("Alex");

  const submitButton = screen.getByText("Add Entry");
  userEvent.click(submitButton);

  // Vérifier que l'entrée est ajoutée et visible une fois que l'on appuie sur le bonton lire

  await waitFor(() => {
    expect(screen.queryByText("Read")).toBeInTheDocument();
  });

  const readButton = screen.getByText("Read");
  userEvent.click(readButton);
});
