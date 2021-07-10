import { useDispatch } from "react-redux";
import { loginToJoinClicked } from "state/redux/room/actions";

export const useLoginToJoinContainer = () => {
  const dispatch = useDispatch();

  return {
    onLoginToJoinCButtonClicked: () => {
      dispatch(loginToJoinClicked());
    },
  };
};
