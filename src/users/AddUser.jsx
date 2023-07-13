import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    username: "",
    content: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { title, username, content } = user;

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/user", user);

    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">글쓰기</h2>

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

            <div className="mb-5">
              <label htmlFor="username" className="form-label">
                닉네임
              </label>
              <input
                required
                type="text"
                id="username"
                value={username}
                onChange={onInputChange}
                className="form-control"
                placeholder="닉네임"
                name="username"
              />
            </div>

            <div className="input-group ">
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
                placeholder="......"
                name="content"
              />
            </div>

            <div className="mb-3 text-center">
              <button
                type="submit"
                className="btn btn-outline-primary px-3 mx-2"
              >
                등록
              </button>
              <Link
                to="/"
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

export default AddUser;
