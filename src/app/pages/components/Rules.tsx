import React from "react";
import { Card, Col } from "antd";

export const Rules = () => (
  <Col className="Rules">
    <Card title="Game Summary">
      <p>
        Towers is a 3-dimensional strategy game pitting two players against each
        other to build massive towers to control the land, and capture the 5
        castles that dot the countryside.
      </p>
      <p>
        Players take turns building their mighty towers or, claim new territory
        or capture their opponent’s lesser towers.
      </p>
      <p>
        Outwit your opponent, and be the first to claim enough castles, and take
        your seat on the throne of your new kingdom
      </p>
    </Card>
    <Card title="Starting Towers">
      <p>
        To start a game create a room on the homepage. Give it a name and click
        ok.
      </p>
      <p>
        Next click the room with the name you entered and press the join button.
        Wait for an opponent to join and then click start game
      </p>
      <p>
        At the start of the match players will have towers in each but opposite
        corners of the board with the castles towards the center. With the first
        player chosen randomly
      </p>
    </Card>
    <Card title="Playing Towers">
      <p>
        A player wins if he controls 4 of the 5 castles on the board, controls 3
        or more crowned castles, or his opponent cannot move.
      </p>
      <p>
        Controlling a castle means your piece is on top of a tower with a green
        base.
      </p>
      <p>
        Crowning a castle means controlling it when it is 5 pieces tall. When a
        castle is crowned there is not action an opponent can do to regain
        control of the castle
      </p>
    </Card>
    <Card title="Winning Towers">
      <p>
        Towers is a 3-dimensional strategy game pitting two players against each
        other to build massive towers to control the land, and capture the 5
        castles that dot the countryside.
      </p>
      <p>
        Players take turns building their mighty towers or, claim new territory
        or capture their opponent’s lesser towers.
      </p>
      <p>
        Outwit your opponent, and be the first to claim enough castles, and take
        your seat on the throne of your new kingdom
      </p>
    </Card>
    <Card title="Your Turn">
      <p>
        During your turn, a player must either build or push a tower he
        controls. The player can only take one of the two actions, not both. If
        the player cannot take either action, he loses the game.
      </p>

      <p>
        Outwit your opponent, and be the first to claim enough castles, and take
        your seat on the throne of your new kingdom
      </p>
    </Card>
    <Card title="Building">
      <p>
        To build, a tower you control and press the build button. You cannot
        build on a tower that is 5 pieces tall. A player may not build on a
        castle, even if he controls it, nor may he build on an empty field or a
        tower controlled by an opponent.
      </p>
    </Card>
    <Card title="Pushing">
      <p>
        To push a tower select a tower you control and click one of the push
        button based on which direction you want the tower to fall. Towers fall
        according to the following steps:
      </p>
      <ol>
        <li>
          Select a tower or castle that is more than one piece tall to push that
          you control.
        </li>
        <li>Choose a non-diagonal direction to push the tower.</li>
        <li>
          Check the next square in the chosen direction by checking which pieces
          of the original tower are blocked(on the same level as another piece)
          by the tower square in the next. The lowest piece of the original
          tower always counts as blocked. (if the next space is off the board
          all pieces count as blocked)
        </li>
        <li>
          Repeat step 3 using the new tower to see which of the original pieces
          are blocked until all of the original tower's pieces have been
          blocked. Making sure only pieces of the original tower are moved
        </li>
      </ol>
    </Card>
    <Card title="Quick Tips">
      <ol>
        <li>
          Pushing is how you travel around the board and building lets you
          change how far you go and what you can capture.
        </li>
        <li>You can only gain control of the castle by falling on them.</li>
        <li>A Tower will never be higher than 5 pieces tall EVER.</li>
        <li>
          A Tower during a push will never travel farther than its starting
          height.
        </li>
        <li>You cannot push a tower that is 1 piece tall</li>
        <li>
          At least 1 piece of the original tower has to move for it to count as
          a move
        </li>
        <li>A push cannot change directions.</li>
        <li>
          At least 1 piece of the original tower must be left in each space the
          tower falls through
        </li>
        <li>
          It does count as a push if only one piece moves. (ie: if a tower is 4
          tall and the next tower is the push is 3 tall the top piece of the
          4 tall tower will move on top of the 3 tall one and that's the entire
          push.)
        </li>
        <li>You can't push a tower that is 1 tall.</li>
        <li>
          You can push castles but if they were crowned they no longer are.
        </li>
        <li>
          Only pieces of the original tower move but you use the towers they
          fall on top of to determine which ones are blocked.
        </li>
        <li>
          You cannot push onto or through a tower that is taller than the tower
          falling
        </li>
        <li>
          A push must travel as far as possible even if it would be more useful
          to
        </li>
        <li>You may only do one action on your turn build or push.</li>
      </ol>
    </Card>
  </Col>
);
