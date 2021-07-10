import { useQuery, useSubscription } from "@apollo/client";
import { searchForOpenRooms } from "services/queries/searchForOpenRooms";
import { newRoom as newRoomSubscription } from "services/subscriptions/newRoom";
import { useDispatch } from "react-redux";
import { openRoomsTableRowClicked } from "state/redux/home/actions";
import React from "react";
import { get } from "lodash";

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
];

export const useOpenRoomTableContainer = () => {
  const { data, loading, error, refetch } = useQuery(searchForOpenRooms);
  const { data: newRoomSub } = useSubscription(newRoomSubscription);
  const dispatch = useDispatch();
  const openRooms = get(data, "rooms.nodes");
  const onRowClick = ({ record }) => {
    dispatch(openRoomsTableRowClicked({ roomId: record.id }));
  };

  //start subscription on mount
  React.useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    if (newRoomSub) {
      refetch().catch(console.error);
    }
  }, [newRoomSub]);
  return {
    openRooms,
    loading,
    error,
    columns,
    onRowClick,
  };
};
