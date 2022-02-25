export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_visible" : ""} `}>
      <div className="popup__window">
        <button
          className="popup__close-btn"
          onClick={props.isClose}
          type="button"
          aria-label="Close button"
          id="close_btn_edit"
        ></button>

        <h2 className="popup__window-title"> {props.title} </h2>

        <form className={`popup__form popup__form_${props.name}`} name="popup__form_edit" onSubmit={props.isClose}>
          {props.input}
          <button type="submit" className="popup__save-button" id="edit-save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
