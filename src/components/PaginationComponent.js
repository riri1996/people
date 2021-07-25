import React from "react";
import { Pagination } from "react-bootstrap";

export default function MyPagination(props) {
  const [pageArray, setPageArray] = React.useState([]);

  React.useEffect(() => {
    var totalPages = parseInt(props.totalPages);
    var currentPage = parseInt(props.currentPage);
    var pageArray1 = [];
    if (totalPages > 1) {
      if (totalPages <= 9) {
        var i = 1;
        while (i <= totalPages) {
          pageArray1.push(i);
          i++;
        }
      } else {
        if (currentPage <= 5)
          pageArray1 = [1, 2, 3, 4, 5, 6, 7, 8, "", totalPages];
        else if (totalPages - currentPage <= 4)
          pageArray1 = [
            1,
            "",
            totalPages - 7,
            totalPages - 6,
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ];
        else
          pageArray1 = [
            1,
            "",
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
            "",
            totalPages,
          ];
      }
    }
    setPageArray(pageArray1);
  }, []);

  return (
    <React.Fragment>
      {props.children}
      <div style={{ marginTop: "15px" }}>
        <Pagination style={{ justifyContent: "center" }}>
          {pageArray.map((element, index) => {
            const toReturn = [];

            if (index === 0) {
              toReturn.push(
                <Pagination.First
                  key={"firstpage"}
                  onClick={
                    props.currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Prev
                  key={"prevpage"}
                  onClick={
                    props.currentPage === 1
                      ? () => {}
                      : () => {
                          props.pageClicked(props.currentPage - 1);
                        }
                  }
                />
              );
            }

            if (element === "")
              toReturn.push(<Pagination.Ellipsis key={index} />);
            else
              toReturn.push(
                <Pagination.Item
                  key={index}
                  active={props.currentPage === element ? true : false}
                  onClick={
                    props.currentPage === element
                      ? () => {}
                      : () => {
                          props.pageClicked(element);
                        }
                  }
                >
                  {element}
                </Pagination.Item>
              );

            if (index === pageArray.length - 1) {
              toReturn.push(
                <Pagination.Next
                  key={"nextpage"}
                  onClick={
                    props.currentPage === element
                      ? () => {}
                      : () => {
                          props.pageClicked(props.currentPage + 1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Last
                  key={"lastpage"}
                  onClick={
                    props.currentPage === element
                      ? () => {}
                      : () => {
                          props.pageClicked(element);
                        }
                  }
                />
              );
            }

            return toReturn;
          })}
        </Pagination>
      </div>
    </React.Fragment>
  );
}
