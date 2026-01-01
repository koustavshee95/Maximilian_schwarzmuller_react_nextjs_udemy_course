import { useEffect, useRef, useState, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

//usig local storage store the selected place
const storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const shortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(shortedPlaces);
    });
  }, []);

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    let storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem("selectedPlace", JSON.stringify([id, ...storedIds]));
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    //setModalIsOpen(false);

    let storedIds = JSON.parse(localStorage.getItem("selectedPlace")) || [];
    localStorage.setItem(
      "selectedPlace",
      JSON.stringify(storedIds.filter((id) => id != selectedPlace.current))
    );
  });
  

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="shorting places by distances..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;

//sideeffect are tasks that dont impect the current component render cycle.
//useEffect hook will be executed after the execution of component func is done.
//if you define dependency array react will take a look at the dependency specified here and it will only execute this effect function again is the dependency value changed.If no dependency so, oviously never change therefore react actually never re-execute this effect function.Instead it execute once after this app component function was executed for the first time.But then this effect-function never executed again.If you remove empty dependency array it would goes to infinite loop so we always use empty dependency array.
