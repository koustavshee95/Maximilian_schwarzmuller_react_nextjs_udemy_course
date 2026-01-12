
export const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  console.log(resData);
  
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
};

export const fetchUserPlaces = async () => {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
};


export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
      "Content-type": "application/json",
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Faield to update the data.");
  }
  return resData.message;
};
