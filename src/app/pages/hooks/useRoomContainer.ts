import { useSelector } from "react-redux";
import { getIsAuthenticated } from "state/redux/auth/selectors/getIsAuthenticated";
import { getProfileId } from "state/redux/auth/selectors/getProfileId";
import { useRoomPageQuery } from "app/pages/hooks/useRoomPageQuery";

export const useRoomContainer = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const profileId = useSelector(getProfileId);
  const { room, loading, error, moveNames } = useRoomPageQuery();
  return {
    loading,
    error,
    room,
    isAuthenticated,
    moveNames,
    profileId,
  };
};
