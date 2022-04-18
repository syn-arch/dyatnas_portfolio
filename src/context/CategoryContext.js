import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "./GlobalContext";
import swal from "sweetalert";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const navigate = useNavigate();
  const { URL } = useContext(GlobalContext);
  const [categories, setCategories] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    name: "",
  });
  const [error, setError] = useState({
    message: "",
    errors: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const emptyInput = () => {
    setInput({
      name: "",
    });
  };

  const handleEdit = (e) => {
    const id = e.target.value;
    navigate(`/admin/categories/edit/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === -1) {
      axios
        .post(`${URL}/categories`, input, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully inserted", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/categories");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
          swal("Failed", e.response.data.message, "error");
        });
    } else {
      axios
        .put(`${URL}/categories/${currentId}`, input, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully updated", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/categories");
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
          .delete(`${URL}/categories/${id}`, {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          })
          .then((e) => {
            setFetchStatus(true);
          });
        swal("Success", "data successfully deleted", "success");
      }
    });
  };

  let handleFunction = {
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  };

  let state = {
    categories,
    setCategories,
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
    <CategoryContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
