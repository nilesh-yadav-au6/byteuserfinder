import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
const columns = [
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "date",
    text: "DOB",
  },
];

function UserTable() {
  const [user, setUser] = useState({
    user: "",
    dob: "",
  });
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUser() {
      const { data } = await axios(`/get/table`);
      console.log(data);
      setUserList(data.Tables);
    }
    getUser();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.user || !user.dob) {
      NotificationManager.error("Error Message", "Please entre All Fields");
      return;
    }
    await axios.post(`/add/table`, {
      name: user.user,
      date: user.dob,
    });
    setTimeout(() => {
      setUser({
        user: "",
        dob: "",
      });
    }, 1000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if(e.target.name === "dob"){

      const date = e.target.value
      console.log(date)
      setUser({
        ...user,
        [e.target.name]: date,
      });
    }else{
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "100%" }}
    >
      <div>
        <h2>Add User</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="user"
            onChange={handleChange}
            placeholder="Add User"
            value={user.user}
            className="input-txt"
          />
          <Form.Control
            type="date"
            name="dob"
            onChange={handleChange}
            placeholder="DOB"
            value={user.dob}
            className="input-txt"
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <ToolkitProvider keyField="id" data={userList} columns={columns} search>
          {(props) => (
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default UserTable;
