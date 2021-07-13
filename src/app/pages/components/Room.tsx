import React from "react";
import { Col, Divider, Skeleton } from "antd";
import { Error } from "app/components/Error";
import { LoginToJoin } from "app/components/room/components/LoginToJoin";
import { StartGame } from "app/components/room/components/StartGame";
import { JoinGame } from "app/components/room/components/JoinGame";
import { RemoteTowers } from "app/components/room/components/RemoteTowers";
import { useRoomContainer } from "app/pages/hooks/useRoomContainer";

export const Room = () => {
  const {
    room,
    loading,
    error,
    isAuthenticated,
    moveNames,
    userId,
  } = useRoomContainer();

  if (loading) return <Skeleton />;

  if (error) return <Error error={JSON.stringify(error)} />;

  if (!room) return <Error error="No Room Found" />;

  const { started, players } = room;
  const player =
    players && players.findIndex(({ profile }) => profile?.userId === userId);
  console.log({ player, userId, players });
  return (
    <Col className="Room">
      {isAuthenticated && started ? (
        <RemoteTowers
          {...{
            match: room.match,
            moveNames,
            player,
            currentPlayer: room.currentPlayer,
            victoryProgress: room.victoryProgress,
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
