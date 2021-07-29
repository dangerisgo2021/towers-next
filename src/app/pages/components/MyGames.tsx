import React from "react";
import { Col } from "antd";

import { useMyGamesContainer } from "app/pages/hooks/useMyGamesContainer";

export const MyGames = () => {
  const { isAuthenticated } = useMyGamesContainer();

  return <Col className="MyGames">{isAuthenticated && "MyGamesTable"}</Col>;
};
