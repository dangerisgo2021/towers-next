import { useDispatch, useSelector } from "react-redux";
import { getIsAuthenticated } from "state/redux/auth/selectors/getIsAuthenticated";
import { useQuery } from "@apollo/client";
import { searchForUserRooms } from "services/queries/searchForUserRooms";
import { openRoomsTableRowClicked } from "state/redux/home/actions";
import { get } from "lodash";
import { getSessionUserId } from "state/redux/auth/selectors/getSessionUserId";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mode",
    dataIndex: "mode",
    key: "mode",
  },
  {
    title: "Winner",
    dataIndex: ["victoryProgress", "winner"],
    key: "winner",
  },
];

export const useMyGamesContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getSessionUserId);
  const { data, loading, error, refetch } = useQuery(searchForUserRooms, {
    variables: { userId },
    skip: !userId,
  });
  const userRooms = get(data, "rooms.nodes");
  console.log({ userRooms });
  const isAuthenticated = useSelector(getIsAuthenticated);
  const onRowClick = ({ record }) => {
    dispatch(openRoomsTableRowClicked({ roomId: record.id }));
  };

  return {
    userRooms,
    isAuthenticated,
    loading,
    error,
    columns,
    onRowClick,
    refetch,
  };
};
