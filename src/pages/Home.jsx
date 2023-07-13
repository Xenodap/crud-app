import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
    setUsers(result.data);
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
              {/* <td>
               
                <Link
                  to={`/edituser/${user.id}`}
                  className="btn btn-outline-warning mx-2"
                >
                  수정
                </Link>
                <button
                  onClick={() => user.id}
                  className="btn btn-outline-danger mx-2"
                >
                  삭제
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <td>
        <Link to="adduser" className="btn btn-outline-warning">
          등록
        </Link>
      </td>
    </div>
  );
}
export default Home;
