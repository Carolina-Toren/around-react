export default function PopupWithForm({ name, title, input, isOpen, onClose }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_visible" : ""} `}>
      <div className="popup__window">
        <button
          className="popup__close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close button"
          id="close_btn_edit"
        />

        <h2 className="popup__window-title"> {title} </h2>

        <form className={`popup__form popup__form_${name}`} name="popup__form_edit" onSubmit={onClose}>
          {input}
          <button type="submit" className="popup__save-button" id="edit-save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
