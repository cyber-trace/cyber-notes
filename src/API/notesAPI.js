const REACT_APP_BASIC_URL = "http://localhost:5000";

export const getNotes = async () => {
  try {
    const res = await fetch(`${REACT_APP_BASIC_URL}/notes`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
