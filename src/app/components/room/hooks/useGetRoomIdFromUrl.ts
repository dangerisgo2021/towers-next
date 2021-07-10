import { useRouter } from "next/router";

export const useGetRoomIdFromUrl = () => {
  const { query = {} } = useRouter();
  const { roomId } = query;
  return roomId;
};
