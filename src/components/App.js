import React, { useState, useEffect } from "react";
import "../pages/index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { api } from "../utils/api";
import Card from "./Card";

// function handleDeleteClick() {
//   console.log("deleting");
// }

// function handleLikeClick() {
//   console.log("like works");
// }

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, seIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }
  function handleEditAvatarClick() {
    seIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    seIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page__container">
        <Header />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          // onDeleteClick={handleDeleteClick}
          // onCardLike={handleLikeClick}
          isOpenEdit={isEditProfilePopupOpen}
          isOpenAdd={isAddPlacePopupOpen}
          isOpenAvatar={isEditAvatarPopupOpen}
          isOpenImage={isImagePopupOpen}
          onClose={closeAllPopups}
          selectedCard={selectedCard}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
