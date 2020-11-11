import { useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../actions/constants";

function UserInformationContainer() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const dispatch = useDispatch();

  function saveUserInformation() {
    dispatch({
      type: Actions.SET_USER_INFORMATION,
      data: { name: name, lastname: lastname }
    });
  }

  return (
    <>
      <h2> Användarinfo: </h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={lastname} onChange={e => setLastname(e.target.value)} />
      <button onClick={saveUserInformation}> Spara </button>
    </>
  );
}

export default UserInformationContainer;
