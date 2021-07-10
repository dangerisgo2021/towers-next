import {useDispatch, useSelector} from "react-redux";
import {move, redo, reset, undo} from "state/redux/match/actions";

export const useTowersContainer = ({ matchSelector }) => {
    const dispatch = useDispatch();
    const match = useSelector(matchSelector);

    const {
        // @ts-ignore
        id = "MATCH_ID_MISSING",
        // @ts-ignore
        board: { cells = [], width = 7, height = 7 } = {},
        // @ts-ignore
        maxTowerSize,
        // @ts-ignore
        currentPlayerIndex = "0",
    } = match || {}

    return {
        G: {
            board: { cells, width, height },
            maxTowerSize,
        },
        ctx: { currentPlayer: currentPlayerIndex },
        moves: {
            build: (currentPlayer, selectedCell) => {
                dispatch(
                    move({ matchId: id, name: "build", currentPlayer, selectedCell })
                );
            },
            pushUp: (currentPlayer, selectedCell) => {
                dispatch(
                    move({
                        matchId: id,
                        name: "push",
                        direction: "up",
                        currentPlayer,
                        selectedCell,
                    })
                );
            },
            pushLeft: (currentPlayer, selectedCell) => {
                dispatch(
                    move({
                        matchId: id,
                        name: "push",
                        direction: "left",
                        currentPlayer,
                        selectedCell,
                    })
                );
            },
            pushRight: (currentPlayer, selectedCell) => {
                dispatch(
                    move({
                        matchId: id,
                        name: "push",
                        direction: "right",
                        currentPlayer,
                        selectedCell,
                    })
                );
            },
            pushDown: (currentPlayer, selectedCell) => {
                dispatch(
                    move({
                        matchId: id,
                        name: "push",
                        direction: "down",
                        currentPlayer,
                        selectedCell,
                    })
                );
            },
        },
        reset: () => {
            dispatch(reset({ matchId: id }));
        },
        undo: () => {
            dispatch(undo({ matchId: id }));
        },
        redo: () => {
            dispatch(redo({ matchId: id }));
        },
    };
};