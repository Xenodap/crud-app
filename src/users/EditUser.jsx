import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();

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

  const onSubmit = async (e) => {
    if (window.confirm("게시글을 수정하시겠습니까?")) {
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/");
    }
  };

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                제목
              </label>
              <input
                required
                type="text"
                id="title"
                value={title}
                onChange={onInputChange}
                className="form-control"
                placeholder="제목"
                name="title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                닉네임(변경불가)
              </label>
              <input
                required
                type="text"
                id="username"
                value={username}
                // onChange={onInputChange}
                className="form-control"
                name="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                내용
              </label>
              <input
                required
                type="text"
                id="content"
                value={content}
                onChange={onInputChange}
                className="form-control"
                placeholder="내용"
                name="content"
              />
            </div>

            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                수정
              </button>
              <Link
                to={{ pathname: `/viewuser/${id}` }}
                type="reset"
                className="btn btn-outline-danger px-3 mx-2"
              >
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditUser;
