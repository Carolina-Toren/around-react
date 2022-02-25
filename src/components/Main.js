import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  isOpenEdit,
  isOpenAdd,
  isOpenAvatar,
  isOpenImage,
  onClose,
  selectedCard,
}) {
  //////////////////////
  //getting user info///
  /////////////////////

  const [user, setUser] = useState({ userName: "", userDescription: "", userAvatar: "" });

  //////////////////////
  //setting User Info//
  ////////////////////
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUser({ userName: res.name, userDescription: res.about, userAvatar: res.avatar });
        // setUserDescription(res.about);
        // setUserName(res.name);
      })
      .catch(console.log);
  }, []);

  const [cards, setCards] = useState([]);

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

  return (
    <>
      <main className="content">
        <section className="profile">
          <div
            className="profile__image"
            style={{
              backgroundImage: `url("${user.userAvatar}")`,
            }}
          >
            <button className="profile__img-button" onClick={onEditAvatarClick} />
          </div>
          <div className="profile__info">
            <div className="profile__info-title">
              <h1 className="profile__name">{user.userName}</h1>
              <button
                className="profile__edit-button"
                onClick={onEditProfileClick}
                type="button"
                aria-label="Edit profile user information button"
              />
            </div>
            <p className="profile__occupation">{user.userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            onClick={onAddPlaceClick}
            type="button"
            aria-label="Add photo button"
            id="add_btn"
          />
        </section>
        {/* <!--END OF PROFILE SECTION--> */}
        <section className="photo-feed">
          <div className="photo-feed__grid">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                // onDeleteClick={onDeleteClick}
                onCardClick={onCardClick}
                // onCardLike={onCardLike}
              />
            ))}
          </div>
        </section>
        {/* <!--END OF PHOTO FEED SECTION--> */}
      </main>
      <PopupWithForm
        name="edit"
        title="Edit profile"
        input={
          <div>
            <input
              type="text"
              className="popup__input"
              name="name"
              id="name-input"
              maxLength="40"
              minLength="2"
              placeholder="Full Name"
              required
            />
            <span className="popup__error" id="title-input-error" />
            <input
              type="url"
              className="popup__input"
              name="imglink"
              id="img-link-input"
              placeholder="Image link"
              required
            />
            <span className="popup__error" id="img-link-input-error" />
          </div>
        }
        isOpen={isOpenEdit}
        onClose={onClose}
      />
      <PopupWithForm
        name="add"
        title="New Place"
        input={
          <div>
            <input
              type="text"
              className="popup__input"
              name="title"
              id="title-input"
              maxLength="30"
              minLength="1"
              placeholder="Title"
              required
            />
            <span className="popup__error" id="title-input-error" />
            <input
              type="url"
              className="popup__input"
              name="imglink"
              id="img-link-input"
              placeholder="Image link"
              required
            />

            <span className="popup__error" id="img-link-input-error" />
          </div>
        }
        isOpen={isOpenAdd}
        onClose={onClose}
      />
      <PopupWithForm
        name="profile-img"
        title="Change profile picture"
        input={
          <div>
            <input
              type="url"
              className="popup__input"
              name="avatar"
              id="profileImg-input"
              placeholder="Image link"
              required
            />

            <span className="popup__error" id="title-input-error" />
          </div>
        }
        isOpen={isOpenAvatar}
        onClose={onClose}
      />
      <ImagePopup onClick={onCardClick} selectedCard={selectedCard} isOpen={isOpenImage} onClose={onClose} />
    </>
  );
}
