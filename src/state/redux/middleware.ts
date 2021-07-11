import { loggerMiddleware } from "state/redux/utils/middleware/loggerMiddleware";
import { throttleMiddleware } from "state/redux/utils/middleware/throttleMiddleware";
import { debounceMiddleware } from "state/redux/utils/middleware/debounceMiddleware";
import { expandSliderOnOpenMenuButtonClick } from "state/redux/sider/middleware/expandSliderOnOpenMenuButtonClick";
import { collapseSliderOnOutsideExpandedSliderClick } from "state/redux/sider/middleware/collapseSliderOnOutsideExpandedSliderClick";
import { fetchProfileOnUserReceived } from "state/redux/auth/middleware/fetchProfileOnUserReceived";
import { openCreateRoomModal } from "state/redux/createRoomModal/middleware/openCreateRoomModal";
import { submitCreateRoomForm } from "state/redux/createRoomModal/middleware/submitCreateRoomForm";
import { navigateToRoom } from "state/redux/home/middleware/navigateToRoom";
import { notificationOnFailedMove } from "state/redux/local/middleware/notificationOnFailedMove";
import { addPlayerToRoom } from "state/redux/room/middleware/addPlayerToRoom";
import { removePlayerFromRoom } from "state/redux/room/middleware/removePlayerFromRoom";
import { startMatchInRoom } from "state/redux/room/middleware/startMatchInRoom";
import { applyMoveToMatch } from "state/redux/room/middleware/applyMoveToMatch";
import { resetRoomMatch } from "state/redux/room/middleware/resetRoomMatch";
import { collapseSliderOnSideNavItemClicked } from "state/redux/sider/middleware/collapseSliderOnSideNavItemClicked";
import { signInUser } from "state/redux/auth/middleware/signIn";
import { getLatestSession } from "state/redux/auth/middleware/getLatestSession";

export const middleware = [
  loggerMiddleware,
  throttleMiddleware,
  debounceMiddleware,
  expandSliderOnOpenMenuButtonClick,
  collapseSliderOnOutsideExpandedSliderClick,
  fetchProfileOnUserReceived,
  openCreateRoomModal,
  submitCreateRoomForm,
  navigateToRoom,
  notificationOnFailedMove,
  addPlayerToRoom,
  removePlayerFromRoom,
  startMatchInRoom,
  applyMoveToMatch,
  resetRoomMatch,
  collapseSliderOnSideNavItemClicked,
  signInUser,
  getLatestSession,
];
