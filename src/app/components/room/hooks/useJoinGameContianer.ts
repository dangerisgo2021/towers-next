import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { joinRoomClicked, leaveRoomClicked } from "state/redux/room/actions";
import { useGetRoomIdFromUrl } from "app/components/room/hooks/useGetRoomIdFromUrl";
import { getSessionUserId } from "state/redux/auth/selectors/getSessionUserId";

export const useJoinGameContainer = ({ gameConfig, players }) => {
  const dispatch = useDispatch();
  const roomId = useGetRoomIdFromUrl();
  const userId = useSelector(getSessionUserId);
  const joined =
    players &&
    players.find((player) => get(player, "profile.userId") === userId);
  const currentPlayerCount = Array.isArray(players) ? players.length : 0;
  const { minPlayers, maxPlayers } = gameConfig;
  const percent = (currentPlayerCount / minPlayers) * 100;
  const isJoinDisabled = joined || currentPlayerCount >= maxPlayers;
  const isLeaveDisabled = !joined;

  return {
    percent,
    isJoinDisabled,
    isLeaveDisabled,
    joinRoomClicked: () => {
      dispatch(joinRoomClicked({ roomId }));
    },
    leaveRoomClicked: () => {
      dispatch(leaveRoomClicked({ roomId }));
    },
  };
};
