const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bffa400793msh06c129c1ac19a74p1e8721jsn61efb91f19e0",
    "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com",
  },
};

export const search = async (searchQuery = "") => {
  try {
    const response = await fetch(
      `https://youtube-v38.p.rapidapi.com/search/?q=${searchQuery}&hl=en&gl=US`,
      options
    );
    const data = await response.json();
    // console.log("data in api call: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
