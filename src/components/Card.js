export default function Card(props) {
  return (
    <div className="photo-feed__card">
      <button
        className="photo-feed__delete-btn"
        // onClick={props.onDeleteClick}
        type="button"
        aria-label="delete button"
      ></button>

      <img
        className="photo-feed__image"
        onClick={props.onCardClick}
        src={`${props.card.link}`}
        alt={`${props.card.name}`}
      />

      <div className="photo-feed__card-caption">
        <h2 className="photo-feed__text"> {`${props.card.name}`}</h2>
        <div className="photo-feed__like-container">
          <button
            className="photo-feed__card-button"
            // onClick={props.onCardLike}
            type="button"
            aria-label="like button"
          ></button>
          <span className="photo-feed__card-button-counter">{`${props.card.likes.length}`}</span>
        </div>
      </div>
    </div>
  );
}
