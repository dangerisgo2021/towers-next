import React from "react";
import { Button, Col, Row } from "antd";
import { TowersClient } from "../../Components/TowersClient";
import { GameActions } from "../../Components/GameActions";
import { useDispatch, useSelector } from "react-redux";
import { getLocalRoomStarted } from "../../../state/redux/local/selectors/getLocalRoomStarted";
import { startButtonClicked } from "../../../state/redux/local/actions";

const useLocalContainer = () => {
  const started = useSelector(getLocalRoomStarted);
  const dispatch = useDispatch();
  const onStartButtonClicked = () => {
    dispatch(startButtonClicked());
  };
  return {
    started,
    onStartButtonClicked,
  };
};

export const Local = () => {
  const { started, onStartButtonClicked } = useLocalContainer();

  return (
    <Col>
      <Row>
        {started ? (
          <TowersClient />
        ) : (
          <Button type="primary" block onClick={onStartButtonClicked}>
            Start Local Session
          </Button>
        )}
      </Row>
      <Row>
        <GameActions />
      </Row>
    </Col>
  );
};
