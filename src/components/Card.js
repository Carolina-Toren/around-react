export default function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className="photo-feed__card">
      <button
        className="photo-feed__delete-btn"
        // onClick={props.onDeleteClick}
        type="button"
        aria-label="delete button"
      />

      <img className="photo-feed__image" onClick={handleClick} src={`${card.link}`} alt={`${card.name}`} />

      <div className="photo-feed__card-caption">
        <h2 className="photo-feed__text"> {`${card.name}`}</h2>
        <div className="photo-feed__like-container">
          <button
            className="photo-feed__card-button"
            // onClick={props.onCardLike}
            type="button"
            aria-label="like button"
          />
          <span className="photo-feed__card-button-counter">{`${card.likes.length}`}</span>
        </div>
      </div>
    </div>
  );
}
