export default function ImagePopup({ selectedCard, isOpen, onClose }) {
  console.log(selectedCard);
  return (
    <div className={`popup popup_photo ${isOpen ? "popup_visible" : ""} `}>
      <div className="popup__image-container">
        <button className="popup__close-btn" onClick={onClose} id="close_btn_photo" />

        <figure className="popup__figure-container">
          <img className="popup__image" src={selectedCard.link} alt={selectedCard.name} />

          <figcaption className="popup__image-caption">{selectedCard.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
