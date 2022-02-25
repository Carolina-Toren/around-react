import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
export default function Main(props) {
  //////////////////////
  //getting user info///
  /////////////////////
  const [userName, setuserName] = useState();
  const [userDescription, setuserDescription] = useState();
  const [userAvatar, setuserAvatar] = useState();

  //////////////////////
  //setting User Info//
  ////////////////////
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setuserAvatar(res.avatar);
        setuserDescription(res.about);
        setuserName(res.name);
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
              backgroundImage: `url("${userAvatar}")`,
            }}
          >
            <button className="profile__img-button" onClick={props.onEditAvatarClick}></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-title">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                onClick={props.onEditProfileClick}
                type="button"
                aria-label="Edit profile user information button"
              ></button>
            </div>
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            onClick={props.onAddPlaceClick}
            type="button"
            aria-label="Add photo button"
            id="add_btn"
          ></button>
        </section>
        {/* <!--END OF PROFILE SECTION--> */}
        <section className="photo-feed">
          <div className="photo-feed__grid">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                // onDeleteClick={props.onDeleteClick}
                onCardClick={props.onCardClick}
                // onCardLike={props.onCardLike}
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
            <span className="popup__error" id="title-input-error"></span>
            <input
              type="url"
              className="popup__input"
              name="imglink"
              id="img-link-input"
              placeholder="Image link"
              required
            />
            <span className="popup__error" id="img-link-input-error"></span>
          </div>
        }
        isOpen={props.isOpenEdit}
        isClose={props.isClose}
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
            <span className="popup__error" id="title-input-error"></span>
            <input
              type="url"
              className="popup__input"
              name="imglink"
              id="img-link-input"
              placeholder="Image link"
              required
            />

            <span className="popup__error" id="img-link-input-error"></span>
          </div>
        }
        isOpen={props.isOpenAdd}
        isClose={props.isClose}
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

            <span className="popup__error" id="title-input-error"></span>
          </div>
        }
        isOpen={props.isOpenAvatar}
        isClose={props.isClose}
      />
      <ImagePopup
        onClick={props.onCardClick}
        selectedCard={props.selectedCard}
        isOpen={props.isOpenImage}
        isClose={props.isClose}
      />
    </>
  );
}
