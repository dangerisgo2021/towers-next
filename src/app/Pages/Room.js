import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Col, Divider, notification, Row, Skeleton } from "antd";
import { get } from "lodash";
import { useRouter } from "next/router";
import { Error } from "../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  startButtonClicked,
  playerClicked,
} from "../../state/redux/room/actions";
import { UserOutlined } from "@ant-design/icons";
import { useAuth0 } from "../Auth/auth0/react-auth0-wrapper";
import { getProfileId } from "../../state/redux/auth/selectors/getProfileId";
import { roomPageQuery } from "../../services/queries/roomPageQuery";

const useRoomContainer = () => {
  const dispatch = useDispatch();
  const profileId = useSelector(getProfileId);
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const { query = {} } = useRouter();
  const { roomId } = query;
  const { data, loading, error } = useQuery(roomPageQuery, {
    variables: { roomId },
    skip: !roomId,
  });

  const room = get(data, "room", {});

  return {
    loading,
    error,
    room,
    login: loginWithPopup,
    isAuthenticated,
    onStartButtonClicked: () => {
      dispatch(startButtonClicked());
    },
    onPlayerClicked: (playerIndex) => {
      console.log({ room });
      if (!room.players || !room.players.includes(profileId)) {
        dispatch(playerClicked({ playerIndex, roomId }));
      } else {
        notification.open({
          message: "You have already joined this game",
        });
      }
    },
  };
};

export const Room = () => {
  const {
    room,
    loading,
    error,
    onStartButtonClicked,
    onPlayerClicked,
    isAuthenticated,
    login,
  } = useRoomContainer();

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <Error error={JSON.stringify(error)} />;
  }

  const { started, players } = room;
  const [player1 = null, player2 = null] = players || [];
  console.log({ player1, player2 });
  return (
    <Col>
      <Divider />
      {isAuthenticated && (
        <>
          <Row justify="space-around">
            <Col
              onClick={() => {
                onPlayerClicked(0);
              }}
            >
              <Row justify="center">
                <UserOutlined
                  style={{
                    fontSize: "64px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </Row>
              <Row justify="center">
                {get(player1, "profile.name") || "OPEN"}
              </Row>
            </Col>
            <Col
              onClick={() => {
                onPlayerClicked(1);
              }}
            >
              <Row justify="center">
                <UserOutlined
                  style={{
                    fontSize: "64px",
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </Row>
              <Row justify="center">
                {get(player2, "profile.name") || "OPEN"}
              </Row>
            </Col>
          </Row>
          <Divider />
        </>
      )}
      {!isAuthenticated && (
        <Row justify="space-around">
          <Button
            onClick={() => {
              login();
            }}
          >
            {" "}
            Login to Join{" "}
          </Button>
        </Row>
      )}
      <Divider />
      {!started && (
        <Row justify="center">
          <Button
            type="primary"
            block
            onClick={onStartButtonClicked}
            disabled={!player1 || !player2}
          >
            Start Game Session
          </Button>
        </Row>
      )}
    </Col>
  );
};
