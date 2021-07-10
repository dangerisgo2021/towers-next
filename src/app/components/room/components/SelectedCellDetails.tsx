import React from "react";
import { Row, Col } from "antd";
import { GiStoneTower, GiCastle } from "react-icons/gi";
import { isNil } from "lodash";

export const SelectedCellDetails = ({
         selectedCell,
         selectedController,
         player,
         currentPlayer,
       }) => (
         <Row
           align="middle"
           justify="space-between"
           style={{
             fontSize: "1.5em",
             border: "1vw solid black",
             backgroundColor: isNil(selectedController.owner)
               ? "grey"
               : selectedController.owner
               ? "blue"
               : "red",
           }}
         >
           <Col>
             {player === 0 ? "Red" : "Blue"} Player
             {player === currentPlayer ? " Go" : " Wait"}
           </Col>
           <Col>
             <Row align="middle" justify="space-around">
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
           </Col>
         </Row>
       );
