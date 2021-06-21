import { useDispatch } from "react-redux";
import { logOut } from "../../redux/login/actions";

const Panel = () => {

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div>
      <div>Здесь будет админка</div>
    <button onClick={onLogOut}>Выход</button>
    </div>
  )
};

export default Panel;