import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    title: "",
    username: "",
    content: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUser(result.data);
  };

  const { title, username, content } = user;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">게시글</h2>

          <div className="card">
            <div className="card-header">
              유저ID :{id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>제목 :{title} </b>
                </li>
                <li className="list-group-item">
                  <b>닉네임 :{username} </b>
                </li>
                <li className="list-group-item">
                  <b>내용 :{content} </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            돌아기기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
