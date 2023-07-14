import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./App.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (searchValue.length > 1) {
      searchRequset();
    } else if (searchValue.length < 1) {
      loadUser();
    }
  }, [searchValue]);

  const searchRequset = async () => {
    const result = await axios.get(
      `http://localhost:8080/searchUser?title=${searchValue}`
    );
    setUsers(result.data);
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">제목</th>
            <th scope="col">내용</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <Link to={`/viewuser/${user.id}`}>{user.title}</Link>
              </td>
              <td>{user.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ width: "70px", margin: "10px" }}>
        <Link
          to="adduser"
          className="btn btn-outline-warning"
          // style={{ position: "relative", textAlign: "left" }}
        >
          등록
        </Link>
      </div>

      <div>
        <form
          className="d-flex"
          role="search"
          style={{
            width: "90%",
            position: "relative",
            left: "100px",
            bottom: "48px",
          }}
        >
          <input
            className="form-control me-2"
            type="text"
            onChange={handleChange}
            value={searchValue}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success right" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
