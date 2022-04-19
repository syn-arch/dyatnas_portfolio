import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "./GlobalContext";
import swal from "sweetalert";

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
    link: "",
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
      link: "",
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
      data.append("link", input.link);
      axios
        .post(`${URL}/portfolios`, data, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully inserted", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/portfolios");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
          swal("Failed", e.response.data.message, "error");
        });
    } else {
      const data = new FormData();
      data.append("name", input.name);
      data.append("picture", input.picture);
      data.append("description", input.description);
      data.append("id_category", input.id_category);
      data.append("tags", input.tags);
      data.append("link", input.link);
      axios
        .post(`${URL}/portfolios/${currentId}?_method=PUT`, data, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully updated", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/portfolios");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
          swal("Failed", e.response.data.message, "error");
        });
    }

    setCurrentId(-1);
    emptyInput();
  };

  const handleDelete = (e) => {
    const id = e.target.value;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${URL}/portfolios/${id}`, {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          })
          .then((e) => {
            setFetchStatus(true);
          });
        swal("Success", "data successfully deleted", "success");
      }
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
