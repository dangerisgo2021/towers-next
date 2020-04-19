import React from "react";
import { Table } from "antd";
import gql from "graphql-tag";
import get from "lodash.get";
import { useQuery } from "@apollo/client";

const defaultBooks = [];

const booksQuery = gql`
  {
    listBooks {
      items {
        id
        title
      }
    }
  }
`;

const useBookContainer = () => {
  const { loading, error, data } = useQuery(booksQuery);
  console.log({ loading, error, data });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return {
    columns: [
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "id",
      },
    ],
    books: get(data, "listBooks.items", defaultBooks),
  };
};

export const Books = () => {
  const { books, columns } = useBookContainer();

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={books}
      style={{ width: "100%" }}
    />
  );
};
