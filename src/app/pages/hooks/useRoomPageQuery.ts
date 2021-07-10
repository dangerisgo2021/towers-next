import {useGetRoomIdFromUrl} from "app/components/room/hooks/useGetRoomIdFromUrl";
import {useQuery, useSubscription} from "@apollo/client";
import {roomPageQuery} from "services/queries/roomPageQuery";
import {updatedRoom} from "services/subscriptions/updatedRoom";
import React from "react";
import { get } from "lodash";

const defaultRoom = {};
const defaultMoves = [];
export const useRoomPageQuery = () => {
    const roomId = useGetRoomIdFromUrl();
    const { data, loading, error, refetch } = useQuery(roomPageQuery, {
        variables: { roomId },
        skip: !roomId,
    });
    const room = get(data, "room", defaultRoom);
    const moveNames = get(data, "__type.enumValues", defaultMoves);
    const { data: updatedRoomSubscription } = useSubscription(updatedRoom, {
        variables: { roomId },
    });

    // start subscription on mount
    React.useEffect(() => {
        // refetch when subscription data changes
        // which means the room we are watching updated
        // noinspection JSIgnoredPromiseFromCall
        if (updatedRoomSubscription) {
            refetch().catch(console.error);
        }
    }, [updatedRoomSubscription]);

    return {
        room,
        moveNames,
        loading,
        error,
    };
};
