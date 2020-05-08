import { loggerMiddleware } from "./utils/middleware/loggerMiddleware";
import { throttleMiddleware } from "./utils/middleware/throttleMiddleware";
import { debounceMiddleware } from "./utils/middleware/debounceMiddleware";
import { expandSliderOnOpenMenuButtonClick } from "./sider/middleware/expandSliderOnOpenMenuButtonClick";
import { collapseSliderOnOutsideExpandedSliderClick } from "./sider/middleware/collapseSliderOnOutsideExpandedSliderClick";
import { fetchProfileOnUserReceived } from "./auth/middleware/fetchProfileOnUserReceived";
import { openCreateRoomModal } from "./createRoomModal/middleware/openCreateRoomModal";
import { submitCreateRoomForm } from "./createRoomModal/middleware/submitCreateRoomForm";
import { navigateToRoom } from "./home/middleware/navigateToRoom";
import { notificationOnFailedMove } from "./local/middleware/notificationOnFailedMove";
import { addPlayerToRoom } from "./room/middleware/addPlayerToRoom";
import { removePlayerFromRoom } from "./room/middleware/removePlayerFromRoom";
import { startMatchInRoom } from "./room/middleware/startMatchInRoom";
import { applyMoveToMatch } from "./room/middleware/applyMoveToMatch";
import { resetRoomMatch } from "./room/middleware/resetRoomMatch";
import { collapseSliderOnSideNavItemClicked } from "./sider/middleware/collapseSliderOnSideNavItemClicked";

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
];
