export default function ImagePopup(props) {
  return (
    <div className={`popup popup_photo ${props.isOpen ? "popup_visible" : ""} `}>
      <div className="popup__image-container">
        <button className="popup__close-btn" onClick={props.isClose} id="close_btn_photo"></button>

        <figure className="popup__figure-container">
          <img className="popup__image" src={props.selectedCard.src} alt={props.selectedCard.alt} />

          <figcaption className="popup__image-caption">{props.selectedCard.alt}</figcaption>
        </figure>
      </div>
    </div>
  );
}
