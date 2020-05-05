import React from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { Col, Divider, Skeleton } from "antd";
import { get } from "lodash";
import { Error } from "../Components/Error";

import { useAuth0 } from "../Auth/auth0/react-auth0-wrapper";
import { roomPageQuery } from "../../services/queries/roomPageQuery";
import { LoginToJoin } from "../Components/Room/LoginToJoin";
import { StartGame } from "../Components/Room/StartGame";
import { JoinGame } from "../Components/Room/JoinGame";
import { updatedRoom } from "../../services/subscriptions/updatedRoom";
import { useGetRoomIdFromUrl } from "../Components/Room/hooks/useGetRoomIdFromUrl";
import { RemoteTowers } from "../Components/Room/RemoteTowers";

const defaultRoom = {};
const defaultMoves = [];
const useRoomPageQuery = () => {
  const roomId = useGetRoomIdFromUrl();
  const { data, loading, error, refetch } = useQuery(roomPageQuery, {
    variables: { roomId },
    skip: !roomId,
  });
  const room = get(data, "room", defaultRoom);
  const moveNames = get(data, "__type.enumValues", defaultMoves);
  const { data: updatedRoomSubscription } = useSubscription(updatedRoom, {
    variables: { roomId },
  });

  // refetch when subscription data changes
  // which means the room we are watching updated
  // start subscription on mount
  React.useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    if (updatedRoomSubscription) {
      refetch().catch(console.error);
    }
  }, [updatedRoomSubscription]);

  return {
    room,
    moveNames,
    loading,
    error,
  };
};

const useRoomContainer = () => {
  const { isAuthenticated } = useAuth0();
  const { room, loading, error, moveNames } = useRoomPageQuery();
  return {
    loading,
    error,
    room,
    isAuthenticated,
    moveNames,
  };
};

export const Room = () => {
  const {
    room,
    loading,
    error,
    isAuthenticated,
    moveNames,
  } = useRoomContainer();

  if (loading) return <Skeleton />;

  if (error) return <Error error={JSON.stringify(error)} />;

  if (!room) return <Error error="No Room Found" />;

  const { started, players } = room;
  return (
    <Col className="Room">
      {isAuthenticated && started ? (
        <RemoteTowers
          {...{
            match: room.match,
            moveNames,
            currentPlayer: room.currentPlayer,
            victoryProgress: room.victoryProgress
          }}
        />
      ) : (
        <>
          <Divider />
          {isAuthenticated && <JoinGame players={players} />}
          <Divider />
          {!isAuthenticated && <LoginToJoin />}
          <Divider />
          {!started && <StartGame players={players} />}
        </>
      )}
    </Col>
  );
};
