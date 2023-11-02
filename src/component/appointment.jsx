import { useEffect, useState } from "react";
import { Table, Divider } from "antd";
//import * as HistoryService from "../service/historyService";
//import MessageParser from "../component/messageParser";
//import ErrorBoundary from "../errorboundry/errorboundary";
//import FallBackUIComponent from "../errorboundry/fallbackUIComponent";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
  {
    title: "Day",
    dataIndex: "day",
  },
  {
    title: "Availability",
    dataIndex: "availability",
  },
  {
    title: "Book now",
    dataIndex: "booknow",
    render: (text, record) => (
      <button type="primary" onClick="handleBookNowClick(record)">
        Book Now
      </button>
    ),
  },
];

const data = [
  {
    key: "1",
    date: "John Brown",
    day: 32,
    availability: "New York No. 1 Lake Park",
  },
];

const Appointment = () => {
  //const [loading, setLoading] = useState(true);

  const handleBookNowClick = (record) => {
    console.log("Book now clicked for record:", record);
  };

  //   useEffect(() => {
  //     setLoading(true);
  //     fetchHistory();
  //   }, []);
  const tableStyle = {
    border: "1px solid #e8e8e8",
    borderRadius: "5px",
  };
  return (
    <>
      <Divider>Appointment</Divider>
      {/* <ErrorBoundary
        tryAgain={true}
        fallBackUIComponent={<FallBackUIComponent />}
      > */}
      <Table
        //loading={loading}
        columns={columns}
        dataSource={data}
        className="pd-2 m-5"
        size="middle"
        style={tableStyle}
      />
      {/* </ErrorBoundary> */}
    </>
  );
};
export default Appointment;
