import React from "react";
import { Col, Row } from "antd";
import { TowersClient } from "../../Components/TowersClient";
import { GameActions } from "../../Components/GameActions";
import { MoveList } from "../../Components/MoveList";

export const Local = () => {
  return (
    <Col>
      <Row>
        <TowersClient />
      </Row>
      <Row>
        <GameActions />
      </Row>
      <Row>
        <MoveList />
      </Row>
    </Col>
  );
};
