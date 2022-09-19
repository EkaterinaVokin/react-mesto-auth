import React, { useState,useEffect } from 'react';
import { Route, Switch} from 'react-router-dom';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import { ImagePopup } from './ImagePopup.js';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { EditProfilePopup } from './EditProfilePopup.js';
import { EditAvatarPopup } from './EditAvatarPopup.js';
import { AddPlacePopup } from './AddPlacePopup.js';
import { RemoveCard } from './RemoveCard.js';
import { Login } from './Login';
import { Register } from './Register';
import { ProtectedRoute } from './ProtectedRoute';
import { Landing } from './Landing'

function App() {

  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
  }); // пер.состояния текущего пользователя

  const [isLoggedIn,setIsLoggedIn] = useState(true);
  // const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false); //пер.состояния открыть попап 'редактировать профиль'
  // const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false); // пер.состояния открыть попап 'новое место'
  // const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false); // пер.состояния открыть попап 'Обновить аватар'
  // const [selectedCard, setSelectedCard] = useState(null); // пер.состояния открыть попап открыть картинку на весь экран

  // const [cards, setCards] = useState([]); // пер.состояния получить массив карточек

  // const [removedCard, setRemovedCard] = useState(null);

  // const [isLoading, setIsLoading] = useState(false); // пер.состояния загрузки

  // const [currentUser, setCurrentUser] = useState({
  //   name: '',
  //   about: '',
  // }); // пер.состояния текущего пользователя

  // const [isLoggedIn,setIsLoggedIn] = useState(false);

  // // обработчик который открывает попап с картинкой и получает эту карточку
  // const handleCardClick = (card) => {
  //   setSelectedCard(card);
  // };

  // // обработчик который меняет состояние и открывает попап 'Обновить аватар'
  // const handleEditAvatarClick = () => {
  //   setEditAvatarPopupOpen(true);
  // };

  // // обработчик который меняет состояние и открывает попап 'редактировать профиль'
  // const handleEditProfileClick = () => {
  //   setEditProfilePopupOpen(true);
  // };

  // // обработчик который меняет состояние и открывает попап 'новое место'
  // const handleAddPlaceClick = () => {
  //   setAddPlacePopupOpen(true);
  // };

  // // обработчик который удаляет карточку
  // function handleCardDelete(card) {
  //   setRemovedCard(card);
  // }

  // // обработчик закрытие попапов
  // const closeAllPopups = () => {
  //   setEditAvatarPopupOpen(false);
  //   setEditProfilePopupOpen(false);
  //   setAddPlacePopupOpen(false);
  //   setSelectedCard(null);
  //   setRemovedCard(null);
  // };

  // // Если хоть одно состояние true или не null, то какой-то попап открыт, значит, навешивать нужно обработчик.
  // const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard || removedCard

  // // функция закрывает попап на кнопку  Esc и добавляет обработчики при открытии или закрытии попап
  // useEffect(() => {
  //   function closeByEscape(evt) {
  //     if(evt.key === 'Escape') {
  //       closeAllPopups();
  //     }
  //   }
  //   if(isOpen) {
  //     document.addEventListener('keydown', closeByEscape);
  //     return () => {
  //       document.removeEventListener('keydown', closeByEscape);
  //     }
  //   }
  // }, [isOpen]) 


  // React.useEffect(() => {
  //   api
  //     .getUser() // получаем ответ с сервера о текущем пользователе
  //     .then((user) => {
  //       setCurrentUser(user); //передаем объект о текущем пользователе в переменную состояния
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   api
  //     .getCard() // получаем ответ с сервера массив карточек
  //     .then((cards) => {
  //       setCards(cards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // function handleCardLike(card, isLiked) {
  //   // вызываем метод и передаем туда id карточки и булевое значение из-за которого будет зависить какой метод в api сработает ,так же приходит ответ с сервера в виде объекта.Смотрим если id карточки совпадает с id карточки где мы поставили лайк или убрали, если совпадает то обновляем карточку если нет то остается старая карточка.Метод map возвращает новый массив карточек и передает это в setCards меняется состояние и идет перерисовка карточек
  //   api
  //     .changeLike(card._id, !isLiked)
  //     .then((newCard) => {
  //       setCards((cards) => {
  //         return cards.map((c) => {
  //           return c._id === card._id ? newCard : c;
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function deleteCard() {
  //   // вызываем метод передаем туда id карточки чтобы удалить данную карточку,отфильтровываются карточки, id которых не равен id удаленной карточки
  //   api
  //     .deleteCard(removedCard._id)
  //     .then(() => {
  //       setCards((cards) => {
  //         return cards.filter((item) => {
  //           return item._id !== removedCard._id;
  //         });
  //       });
  //       setRemovedCard(null);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function handleUpdateUser({ name, about }) {
  //   setIsLoading(true);
  //   api
  //     .editProfile({ name, about }) // вызываем метод и передаем новые данные о пользователе
  //     .then((newUser) => {
  //       // приходит объект с сервера с новыми данными(обновленными) пользователя
  //       setCurrentUser(newUser); //передаем объект о новом пользователе в переменную состояния
  //       closeAllPopups(); // закрываем модальное окно
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  // function handleUpdateAvatar({ avatar }) {
  //   setIsLoading(true);
  //   api
  //     .updateAvatar({ avatar }) // вызываем метод и передаем новые данные о аватарке пользователя
  //     .then((newAvatar) => {
  //       // приходит объект с сервера с новыми данными(обновленными) пользователя
  //       setCurrentUser(newAvatar); // передаем объект о новом пользователе в переменную состояния
  //       closeAllPopups(); // закрываем модальное окно
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  // function handleAddPlaceSubmit({ name, link }) {
  //   setIsLoading(true);
  //   api
  //     .addCard({ name, link }) // вызываем метод и передаем туда новые данные карточки
  //     .then((newCard) => {
  //       // приходит объект с сервера с новой карточкой
  //       setCards([newCard, ...cards]); // добавляем карточку уже в готовый массив
  //       closeAllPopups(); // закрываем модальное окно
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }

  return (
    <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
      <Switch>
      {/* <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} // приходит карточка
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isLoading={isLoading}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        isLoading={isLoading}
      />
      <RemoveCard
        isOpen={!!removedCard}
        onClose={closeAllPopups}
        title="Вы уверены?"
        buttonText={'Да'}
        onDelete={deleteCard}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        isLoading={isLoading}
      />
      <ImagePopup
        isOpen={!!selectedCard}
        card={selectedCard}
        onClose={closeAllPopups}
      /> */}
        <Route path='/sign-up'> // регистрация
          <Register/>
        </Route>
        <Route path='/sign-in'> // авторизация
          <Login/>
        </Route>
        <ProtectedRoute
          path="/"
          isLoggedIn={isLoggedIn}
          exact={true}
          component={Landing}
        />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
