import React from "react";
import { Row, Col } from "antd";
import { GiStoneTower, GiCastle } from "react-icons/gi";
import { isNil } from "lodash";

export const SelectedCellDetails = ({ selectedCell, selectedController }) => (
  <Row
    align="middle"
    justify="space-around"
    style={{
      margin: "1vw",
      padding: "1vw",
      fontSize: "2.5em",
      backgroundColor: isNil(selectedController.owner)
        ? "grey"
        : selectedController.owner
        ? "blue"
        : "red",
    }}
  >
    <Col>Selected</Col>
    <Col>
      <Row align="middle" justify="space-around">
        <Col>
          <Row align="middle">
            <GiStoneTower />
            <div>{selectedCell.size}</div>
            <GiCastle
              style={{
                color: selectedCell.isCastle ? "gold" : undefined,
              }}
            />
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);
