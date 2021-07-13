import { useSelector } from "react-redux";
import { getIsAuthenticated } from "state/redux/auth/selectors/getIsAuthenticated";
import { useRoomPageQuery } from "app/pages/hooks/useRoomPageQuery";
import { getSessionUserId } from "state/redux/auth/selectors/getSessionUserId";

export const useRoomContainer = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const userId = useSelector(getSessionUserId);
  const { room, loading, error, moveNames } = useRoomPageQuery();
  return {
    loading,
    error,
    room,
    isAuthenticated,
    moveNames,
    userId,
  };
};
