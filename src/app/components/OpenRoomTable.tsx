import React from "react";
import { Table } from "antd";
import { useOpenRoomTableContainer } from "app/components/towers/hooks/useOpenRoomTableContainer";

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
