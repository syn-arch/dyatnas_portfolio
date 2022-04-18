import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "./GlobalContext";

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
  const navigate = useNavigate();
  const { URL } = useContext(GlobalContext);
  const [portfolios, setPortfolios] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [previewImage, setPreviewImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    id_category: "",
    picture: "",
    description: "",
    tags: "",
  });
  const [error, setError] = useState({
    message: "",
    errors: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const emptyInput = () => {
    setPreviewImage("");
    setInput({
      name: "",
      id_category: "",
      picture: "",
      description: "",
      tags: "",
    });
  };

  const handleEdit = (e) => {
    const id = e.target.value;
    navigate(`/admin/portfolios/edit/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === -1) {
      const data = new FormData();
      data.append("name", input.name);
      data.append("picture", input.picture);
      data.append("description", input.description);
      data.append("id_category", input.id_category);
      data.append("tags", input.tags);
      axios
        .post(`${URL}/portfolios`, data, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          navigate("/admin/portfolios");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
        });
    } else {
      const data = new FormData();
      data.append("name", input.name);
      data.append("picture", input.picture);
      data.append("description", input.description);
      data.append("id_category", input.id_category);
      data.append("tags", input.tags);
      axios
        .post(`${URL}/portfolios/${currentId}?_method=PUT`, data, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          navigate("/admin/portfolios");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
        });
    }

    setCurrentId(-1);
    emptyInput();
  };

  const handleDelete = (e) => {
    const id = e.target.value;
    axios
      .delete(`${URL}/portfolios/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((e) => {
        setFetchStatus(true);
      });
  };

  const handleChangePicture = (e) => {
    setInput({ ...input, picture: e.target.files[0] });
    setPreviewImage(window.URL.createObjectURL(e.target.files[0]));
  };

  let handleFunction = {
    handleChange,
    handleChangePicture,
    handleSubmit,
    handleEdit,
    handleDelete,
  };

  let state = {
    previewImage,
    portfolios,
    setPortfolios,
    currentId,
    setCurrentId,
    fetchStatus,
    setFetchStatus,
    input,
    setInput,
    emptyInput,
    error,
    setError,
  };
  return (
    <PortfolioContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};