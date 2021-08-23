import React from "react";
import { Col, Table } from "antd";

import { useMyGamesContainer } from "app/pages/hooks/useMyGamesContainer";

export const MyGames = () => {
  const { isAuthenticated, columns, userRooms, onRowClick } = useMyGamesContainer();
  const onRow = (record) => {
    return {
      onClick: () => {
        onRowClick({ record });
      },
    };
  };
  return (
    <Col className="MyGames">
      {isAuthenticated && (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={userRooms}
          onRow={onRow}
          style={{ width: "100%" }}
        />
      )}
    </Col>
  );
};
