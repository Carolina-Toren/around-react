export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image">
          <button className="profile__img-button"></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-title">
            <h1 className="profile__name">Carolina Toren</h1>

            <button
              class="profile__edit-button"
              type="button"
              aria-label="Edit profile user information button"
            ></button>
          </div>

          <p className="profile__occupation">Web developer</p>
        </div>

        <button className="profile__add-button" type="button" aria-label="Add photo button" id="add_btn"></button>
      </section>

      {/* <!--END OF PROFILE SECTION--> */}

      <section className="photo-feed">
        <div className="photo-feed__grid">{/* <!-- photo feed created in JS--> */}</div>
      </section>

      {/* <!--END OF PHOTO FEED SECTION--> */}
    </main>
  );
}
