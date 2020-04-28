import React from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { Col, Divider, Skeleton } from "antd";
import { get } from "lodash";
import { useRouter } from "next/router";
import { Error } from "../Components/Error";

import { useAuth0 } from "../Auth/auth0/react-auth0-wrapper";
import { roomPageQuery } from "../../services/queries/roomPageQuery";
import { LoginToJoin } from "../Components/Room/LoginToJoin";
import { StartGame } from "../Components/Room/StartGame";
import { JoinGame } from "../Components/Room/JoinGame";
import { updatedRoom } from "../../services/subscriptions/updatedRoom";

const defaultRoom = {};
const useRoomPageQuery = () => {
  const { query = {} } = useRouter();
  const { roomId } = query;
  const { data, loading, error, refetch } = useQuery(roomPageQuery, {
    variables: { roomId },
    skip: !roomId,
  });
  const room = get(data, "room", defaultRoom);
  const { data: updatedRoomSubscription } = useSubscription(updatedRoom, {
    variables: { roomId },
  });
  
  // refetch when subscription data changes
  // which means the room we are watching updated
  // start subscription on mount
  React.useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    refetch();
  }, [updatedRoomSubscription]);

  return {
    room,
    loading,
    error,
  };
};
const useRoomContainer = () => {
  const { isAuthenticated } = useAuth0();
  const { room, loading, error } = useRoomPageQuery();

  return {
    loading,
    error,
    room,
    isAuthenticated,
  };
};

export const Room = () => {
  const { room, loading, error, isAuthenticated } = useRoomContainer();

  if (loading) return <Skeleton />;

  if (error) return <Error error={JSON.stringify(error)} />;

  if (!room) return <Error error="No Room Found" />;

  const { started, players } = room;

  return (
    <Col className="Room">
      <Divider />
      {isAuthenticated && <JoinGame players={players} />}
      <Divider />
      {!isAuthenticated && <LoginToJoin />}
      <Divider />
      {!started && <StartGame players={players} />}
      {/*TODO started && <Match />*/}
    </Col>
  );
};
