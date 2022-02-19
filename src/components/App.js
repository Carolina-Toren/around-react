import "../pages/index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
function App() {
  return (
    <body class="page">
      <div class="page__container">
        <Header />

        <Main handleEditAvatarClick handleEditProfileClick handleAddPlaceClick />

        <Footer />
        {/* <!--PpopUps--> */}
        <div class="popup popup_edit" id="popup_edit">
          <div class="popup__window">
            <button class="popup__close-btn" type="button" aria-label="Close button" id="close_btn_edit"></button>

            <h2 class="popup__window-title">Edit profile</h2>

            <form class="popup__form popup__form_edit" name="popup__form_edit">
              <input
                type="text"
                class="popup__input"
                name="name"
                id="name-input"
                maxlength="40"
                minlength="2"
                placeholder="Full Name"
                required
              />
              <span class="popup__error" id="name-input-error"></span>
              <input
                type="text"
                class="popup__input"
                name="occupation"
                id="occupation-input"
                maxlength="200"
                minlength="2"
                placeholder="Occupation"
                required
              />
              <span class="popup__error" id="occupation-input-error"></span>
              <button type="submit" class="popup__save-button" id="edit-save-btn">
                Save
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup_add">
          <div class="popup__window">
            <button
              class="popup__close-btn popup__close-btn_add"
              type="button"
              aria-label="Close button"
              id="close_btn_add"
            ></button>

            <h2 class="popup__window-title">New place</h2>

            <form class="popup__form" name="popup__form_add" id="add_form">
              <input
                type="text"
                class="popup__input"
                name="title"
                id="title-input"
                maxlength="30"
                minlength="1"
                placeholder="Title"
                required
              />
              <span class="popup__error" id="title-input-error"></span>
              <input
                type="url"
                class="popup__input"
                name="imglink"
                id="img-link-input"
                placeholder="Image link"
                required
              />
              <span class="popup__error" id="img-link-input-error"></span>
              <button type="submit" class="popup__save-button" id="add-save-btn">
                Create
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup_profile-img">
          <div class="popup__window">
            <button
              class="popup__close-btn popup__close-btn_profile-img"
              type="button"
              aria-label="Close button"
              id="close_btn_profile-img"
            ></button>

            <h2 class="popup__window-title">Change profile picture</h2>

            <form class="popup__form" name="popup__form_profile-img" id="progile-img_form">
              <input
                type="url"
                class="popup__input"
                name="avatar"
                id="profileImg-input"
                placeholder="Image link"
                required
              />
              <span class="popup__error" id="profileImg-input-error"></span>
              <button type="submit" class="popup__save-button" id="profile-img-save-btn">
                Save
              </button>
            </form>
          </div>
        </div>

        <div class="popup popup_photo">
          <div class="popup__image-container">
            <button class="popup__close-btn" id="close_btn_photo"></button>

            <figure class="popup__figure-container">
              <img class="popup__image" src="#" alt="#" />

              <figcaption class="popup__image-caption"></figcaption>
            </figure>
          </div>
        </div>
        <div class="popup popup_confirmation">
          <div class="popup__window">
            <button
              class="popup__close-btn popup__close-btn_confirmation"
              type="button"
              aria-label="Close button"
              id="close_btn_confirmation"
            ></button>

            <h2 class="popup__window-title">Are you sure?</h2>

            <form class="popup__form" name="popup__form_confirmation" id="confirmation_form">
              <button type="submit" class="popup__save-button" id="delete-confirm-btn">
                Yes
              </button>
            </form>
          </div>
        </div>
      </div>

      <template id="photo-feed__cards">
        <div class="photo-feed__card">
          <button class="photo-feed__delete-btn" type="button" aria-label="delete button"></button>

          <img class="photo-feed__image" src="#" alt="#" />

          <div class="photo-feed__card-caption">
            <h2 class="photo-feed__text"></h2>
            <div class="photo-feed__like-container">
              <button class="photo-feed__card-button" type="button" aria-label="like button"></button>
              <span class="photo-feed__card-button-counter"></span>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
