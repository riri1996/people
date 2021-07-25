import React from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <People />
      </div>
      <QueryClientProvider client={queryClient}>
        {/* The rest of your application */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
