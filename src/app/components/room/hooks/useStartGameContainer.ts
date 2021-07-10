import { useDispatch } from "react-redux";
import { useGetRoomIdFromUrl } from "app/components/room/hooks/useGetRoomIdFromUrl";
import { startButtonClicked } from "state/redux/room/actions";

export const useStartGameContainer = ({
  players,
  gameConfig,
}) => {
  const dispatch = useDispatch();
  const currentPlayerCount = Array.isArray(players) ? players.length : 0;
  const isDisabled = currentPlayerCount < gameConfig.minPlayers;
  const roomId = useGetRoomIdFromUrl();
  console.log("useStartGameContainer", { roomId });
  return {
    isDisabled,
    onStartButtonClicked: () => {
      dispatch(startButtonClicked({ roomId }));
    },
  };
};
