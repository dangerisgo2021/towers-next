import React from "react";
import { Button, Col, Row } from "antd";
import { OpenRoomTable } from "../Components/OpenRoomTable";
import { createRoomButtonClicked } from "../../state/redux/home/actions";
import { useDispatch } from "react-redux";

const useHomeContainer = () => {
  const dispatch = useDispatch();
  return {
    createRoomButtonClicked: () => {
      dispatch(createRoomButtonClicked());
    },
  };
};

export const Home = () => {
  const { createRoomButtonClicked } = useHomeContainer();
  return (
    <Col>
      <Row style={{ margin: "1vw 0" }}>
        <Button block onClick={createRoomButtonClicked}>
          Create Room
        </Button>
      </Row>
      <Row>
        <OpenRoomTable />
      </Row>
    </Col>
  );
};
