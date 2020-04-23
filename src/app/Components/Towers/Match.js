import React from "react";
import { Col } from "antd";
import { Towers } from "./Towers";

export const Match = ({ matchSelector }) => (
  <Col>
    <Towers matchSelector={matchSelector} />
  </Col>
);
