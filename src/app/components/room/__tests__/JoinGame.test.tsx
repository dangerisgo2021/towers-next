import { useJoinGameContainer } from "app/components/room/hooks/useJoinGameContainer";
import { JoinGame } from "app/components/room/components/JoinGame";
import renderer from "react-test-renderer";

jest.mock("app/components/room/hooks/useJoinGameContainer", () => {
  return {
    useJoinGameContainer: jest.fn(),
  };
});

test("JoinGame renders with no props", () => {
  // @ts-ignore useJoinGameContainer is mocked but typescript doesnt know that
  useJoinGameContainer.mockImplementation(() => ({}));
  const component = renderer.create(<JoinGame />).toJSON();
  expect(component).toMatchSnapshot();
});
