// react import
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// project import
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from './ImagePopup.js';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ProtectedRouteElement from './ProtectedRoute';
import Register from './Register';
import * as auth from '../utils/auth';

import okIconPath from '../images/icons/ok.svg';
import errorIconPath from '../images/icons/error.svg';


function App() {

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [userData, setUserData] = useState({
    _id: '',
    email: ''
  });

  const [infoTooltipData, setInfoTooltipData] = useState({
    iconSrc: '',
    message: ''
  });

  function handleTooltipData(isOk) {
    if (isOk) {
      setInfoTooltipData({
        iconSrc: okIconPath,
        message: 'Вы успешно зарегистрировались!'
      })
    } else {
      setInfoTooltipData({
        iconSrc: errorIconPath,
        message: 'Что-то пошло не так! Попробуйте еще раз'
      })
    }
  }

  const navigate = useNavigate();

  function closeAllPopups() {
    setAddPlacePopupState(false);
    setConfirmPopupState(false);
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setInfoTooltipState(false);
    setSelectedCard({});
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleAddPlaceSubmit({ name, link }) {
    api.postCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardDelete(card) {
    api.deleteCardFromServer(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((c) =>
            c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) =>
            c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    handleTokenCheck();
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setUserData({
      _id: '',
      email: ''
    });
    navigate('/sign-in', { replace: true });
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((jsonResponse) => {
          const userData = {
            _id: jsonResponse.data._id,
            email: jsonResponse.data.email
          }
          setUserData(userData);
          setIsLoggedIn(true);
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleUpdateAvatar({ avatar: link }) {
    api.updateAvatar({ link })
      .then((jsonResponseUser) => {
        setCurrentUser(jsonResponseUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api.patchUserInfo({ name, about })
      .then((jsonResponseUser) => {
        setCurrentUser(jsonResponseUser);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleTokenCheck();
  },
    []);

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getInitialCards()])
      .then(([jsonResponseUser, jsonResponseCards]) => {
        setCurrentUser(jsonResponseUser);
        setCards(jsonResponseCards)
      })
      .catch((err) => {
        console.log(err);
      });
  },
    []);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      {/* regular page */}

      <div className="page">
        <Header
          email={userData.email}
          onSignOut={handleSignOut}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouteElement
                element={Main}
                isLoggedIn={isLoggedIn}
                cards={cards}
                handleAddPlaceClick={handleAddPlaceClick}
                handleEditAvatarClick={handleEditAvatarClick}
                handleEditProfileClick={handleEditProfileClick}
                onCardClick={handleCardClick}
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                handleLogin={handleLogin}
              />}
          />
          <Route
            path="/sign-up"
            element={
              <Register
                setInfoTooltipState={setInfoTooltipState}
                handleTooltipData={handleTooltipData}
              />}
          />
          {/* <Route path="*" element={<p>Страницы не существует</p>} /> */}
        </Routes>
        <Footer />
      </div>


      {/* popups */}

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        infoTooltipData={infoTooltipData}
      />

      <PopupWithForm
        name="confirm"
        buttonText="Да"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        title="Вы уверены?"
      >
      </PopupWithForm>

    </CurrentUserContext.Provider>
  );
}

export default App;
