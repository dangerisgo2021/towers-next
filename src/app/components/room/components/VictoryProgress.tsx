import React from "react";
import { Row, Col } from "antd";
import { GiCastle, GiImperialCrown } from "react-icons/gi";

const emptyVictoryProgress = {
  castles: 0,
};
export const VictoryProgress = ({ victoryProgress, currentPlayer, player }) => {
  console.log({ victoryProgress, currentPlayer, player });
  const player1 =
    (victoryProgress &&
      victoryProgress.playerProgress.find(({ player }) => player === 0)) ||
    emptyVictoryProgress;
  const player2 =
    (victoryProgress &&
      victoryProgress.playerProgress.find(({ player }) => player === 1)) ||
    emptyVictoryProgress;

  return (
    <Row justify="space-around" style={{ margin: "1vw" }}>
      <Col
        style={{
          border: `1vw ${currentPlayer === 0 ? "solid" : "dashed"} red`,
          padding: ".2vw",
          backgroundColor: player === 0 ? "#deb0b0" : undefined,
        }}
      >
        <Row align="middle">
          <Col>
            <GiCastle style={{ color: "red", fontSize: "3em" }} />
          </Col>
          <Col style={{ fontSize: "2em" }}> {player1.castles}/4</Col>
          <Col>
            <Row>
              <GiImperialCrown
                style={{
                  color: player1.crowns > 2 ? "gold" : undefined,
                  fontSize: "1.5em",
                }}
              />
            </Row>
            <Row>
              <GiImperialCrown
                style={{
                  color: player1.crowns > 1 ? "gold" : undefined,
                  fontSize: "1.5em",
                }}
              />
            </Row>
            <Row>
              <GiImperialCrown
                style={{
                  color: player1.crowns > 0 ? "gold" : undefined,
                  fontSize: "1.5em",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        style={{
          border: `1vw ${currentPlayer === 1 ? "solid" : "dashed"} blue`,
          padding: ".2vw",
          backgroundColor: player === 1 ? "lightblue" : undefined,
        }}
      >
        <Row align="middle">
          <Col>
            <GiCastle style={{ color: "blue", fontSize: "3em" }} />
          </Col>
          <Col style={{ fontSize: "1.5em" }}> {player2.castles}/4</Col>
          <Col>
            <Row>
              <GiImperialCrown
                style={{
                  color: player2.crowns > 2 ? "gold" : undefined,
                  fontSize: "1.5em",
                }}
              />
            </Row>
            <Row>
              <GiImperialCrown
                style={{
                  color: player2.crowns > 1 ? "gold" : undefined,
                  fontSize: "1.5em",
                }}
              />
            </Row>
            <Row>
              <GiImperialCrown
                style={{
                  color: player2.crowns > 0 ? "gold" : undefined,
                  fontSize: "2em",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
