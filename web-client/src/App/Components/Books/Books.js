import React from "react";
import { Table } from "antd";
import gql from "graphql-tag";
import { get } from "lodash";
import { useQuery } from "@apollo/react-hooks";

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

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log({ data });
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
