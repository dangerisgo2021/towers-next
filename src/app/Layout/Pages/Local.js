import React from "react";
import { Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLocalRoomStarted } from "../../../state/redux/local/selectors/getLocalRoomStarted";
import { startButtonClicked } from "../../../state/redux/local/actions";
import { Match } from "../../Components/Towers/Match";
import { getLocalRoomId } from "../../../state/redux/local/selectors/getLocalRoomId";
import { getLocalMatch } from "../../../state/redux/local/selectors/getLocalMatchGameState";

const useLocalContainer = () => {
  const started = useSelector(getLocalRoomStarted);
  const roomId = useSelector(getLocalRoomId);

  const dispatch = useDispatch();
  const onStartButtonClicked = () => {
    dispatch(startButtonClicked());
  };
  return {
    roomId,
    started,
    onStartButtonClicked,
  };
};

export const Local = () => {
  const { roomId, started, onStartButtonClicked } = useLocalContainer();

  return (
    <Col>
      <Row justify="center">
        {started ? (
          <Match roomId={roomId} matchSelector={getLocalMatch} />
        ) : (
          <Button type="primary" block onClick={onStartButtonClicked}>
            Start Local Session
          </Button>
        )}
      </Row>
    </Col>
  );
};
