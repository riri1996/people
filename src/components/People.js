import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Person from "./person";
import MyPagination from "./PaginationComponent";

//Create a client
const queryClient = new QueryClient();

//Queries
const People = () => {
  const [personList, setTagList] = React.useState([]);
  const [currPage, setCurrPage] = React.useState(3);

  React.useEffect(() => {
    afterPageClicked(3);
  }, []);

  //Fetch data from api
  const afterPageClicked = (page_number) => {
    setCurrPage(page_number);
    fetch(`https://dummyapi.io/data/api/user?limit=10&page=${page_number}`, {
      headers: {
        "app-id": "60fd71a2eafc502a65501c4d",
      },
    })
      .then((response) => response.json())
      .then((data) => setTagList(data.data));
  };
  return (
    <div>
      <MyPagination
        totalPages={10}
        currentPage={currPage}
        pageClicked={(element) => {
          afterPageClicked(element);
        }}
      >
        <ul>
          {personList.map((person) => {
            console.log(person);
            return <Person key={person.id} person={person} />;
          })}
        </ul>
      </MyPagination>
    </div>
  );
};

// Provide the client to App
export default function Wraped() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <People />
    </QueryClientProvider>
  );
}
