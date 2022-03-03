import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [currentUser, setCurenUser] = useState({ name: "", about: "", avatar: "", _id: "" });

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurenUser({ name: res.name, about: res.about, avatar: res.avatar, _id: res._id });
      })
      .catch(console.log);
  }, []);

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    name: "",
    link: "",
  });

  const [deleteCard, setDeletedCard] = useState({
    _id: "",
  });
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleDeleteClick() {
    api
      .deleteCard(deleteCard._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== deleteCard._id);
        setCards(newCards);
      })
      .catch(console.log)
      .finally(() => {
        closeAllPopups();
      });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, seIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }
  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true);
    setDeletedCard({ _id: card._id });
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
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(data) {
    api
      .editPrifileInfo(data)
      .then((res) => {
        setCurenUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id,
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(data) {
    api
      .editPrifileImg(data)
      .then((res) => {
        setCurenUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id,
        });
      })

      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleAddPlaceSubmit(data) {
    api
      .createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.log);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          isOpenImage={isImagePopupOpen}
          onDeleteClick={handleDeleteCardClick}
          cards={cards}
          onCardLike={handleCardLike}
        />

        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onDeleteCardSubmit={handleDeleteClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
