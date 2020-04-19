import React from "react";
import { Table } from "antd";
import get from "lodash.get";
import { useQuery } from "@apollo/client";
import { searchForOpenRooms } from "../../services/queries/searchForOpenRooms";
import { useDispatch } from "react-redux";
import { openRoomsTableRowClicked } from "../../state/redux/home/actions";

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
  const { data, loading, error } = useQuery(searchForOpenRooms);
  const dispatch = useDispatch();
  const openRooms = get(data, "rooms.nodes");
  const onRowClick = ({ record }) => {
    dispatch(openRoomsTableRowClicked({ roomId: record.id }));
  };
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
      }
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
