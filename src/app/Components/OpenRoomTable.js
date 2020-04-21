import React from "react";
import { Table } from "antd";
import { get } from "lodash";
import { useQuery, useSubscription } from "@apollo/client";
import { searchForOpenRooms } from "../../services/queries/searchForOpenRooms";
import { useDispatch } from "react-redux";
import { openRoomsTableRowClicked } from "../../state/redux/home/actions";
import { newRoom as newRoomSubscription } from "../../services/subscriptions/newRoom";

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

const useOpenRoomTableContainer = () => {
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
    refetch();
  }, [newRoomSub]);
  return {
    openRooms,
    loading,
    error,
    columns,
    onRowClick,
  };
};

export const OpenRoomTable = () => {
  const { openRooms = [], columns, onRowClick } = useOpenRoomTableContainer();
  const onRow = (record) => {
    return {
      onClick: (event) => {
        console.log({ event });
        onRowClick({ record });
      },
    };
  };
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={openRooms}
      pagination={false}
      onRow={onRow}
      style={{ width: "100%" }}
    />
  );
};
