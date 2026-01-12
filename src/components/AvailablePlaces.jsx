import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitute,
            position.coords.lngitute
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (err) {
        setError({
          message:
            err.message || "Could not fetch places Please try again later!",
        });
      } finally {
        setIsFetching(false);
      }
    };

    fetchPlaces();
  }, []);

  /*import axios from "axios";
import { useEffect, useState } from "react";

useEffect(() => {
  async function fetchPlaces() {
    try {
      const response = await axios.get("http://localhost:3000/places");
      setAvailablePlaces(response.data.places);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  }

  fetchPlaces();
}, []);
 */

  if (error) {
    return <Error title="An Error Occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

//fetch() is uses to send http request to some other server. Fetch is not provided by the react. Its provided by the brawser.
