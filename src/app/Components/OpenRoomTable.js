import React from "react";
import { Table } from "antd";
import faker from "faker";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Mode",
    dataIndex: "mode",
    key: "mode",
  },
];
const useOpenRoomTableContainer = () => {
  const loading = false;
  const error = null;
  const openRooms = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    name: faker.random.word(),
    rating: faker.random.number({ min: 1400, max: 3200 }),
    time: faker.random.number({ min: 4, max: 9 }) + "min",
    mode: !!faker.random.boolean() ? "Ranked" : "Casual",
  }));
  return {
    openRooms,
    loading,
    error,
    columns,
  };
};

export const OpenRoomTable = () => {
  const { openRooms, columns } = useOpenRoomTableContainer();

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={openRooms}
      pagination={false}
      style={{ width: "100%" }}
    />
  );
};
