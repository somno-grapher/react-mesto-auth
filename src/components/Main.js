// react import
import React from 'react';
import { useContext } from 'react';

// project import
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
  cards,
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
  onCardClick,
  onCardDelete,
  onCardLike }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <button className="profile__avatar-container"
          onClick={handleEditAvatarClick}>
          <img src={currentUser.avatar}
            alt="Аватар"
            className="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button"
            className="edit-button profile__edit-button edit-button_type_profile"
            onClick={handleEditProfileClick}>
          </button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button type="button"
          className="add-button profile__add-button add-button_type_card"
          onClick={handleAddPlaceClick}>
        </button>
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardDelete={onCardDelete}
                onCardLike={onCardLike}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );

}

export default Main;
