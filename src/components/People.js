import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Person from "./person";

//Create a client
const queryClient = new QueryClient();

//Fetch data from api
const fetchPeople = async () => {
  const res = await fetch(`http://swapi.dev/api/people/`);
  return res.json();
};

//Queries
const People = () => {
  const { data, status } = useQuery(["people"], fetchPeople);
  console.log(data);

  return (
    <div>
      {/* <p>{status}</p> */}
      {status === "loading" && <div>loading data..</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
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
