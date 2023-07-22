import axios from "axios";
import { server } from "../../server";

// load user

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const receiveddata = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    console.log("Loaduser-redux", receiveddata.data.user);
    dispatch({
      type: "LoadUserSuccess",
      payload: receiveddata.data.user,
    });
  } catch (e) {
    dispatch({ type: "LoadUserFail", payload: e.response.data.message });
  }
};
