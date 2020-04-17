import React from "react";
import { useQuery } from "@apollo/client";
import { messagesQuery } from "../../../services/queries/messagesQuery";

const useHomeContainer = () => {
  const { data, loading, error } = useQuery(messagesQuery);

  return {
    data,
    loading,
    error,
  };
};
export const Home = () => {
  const { data, loading, error } = useHomeContainer();

  if (loading) return "loading";
  if (error) return JSON.stringify(error.message);

  return <div>{JSON.stringify(data)}</div>;
};
