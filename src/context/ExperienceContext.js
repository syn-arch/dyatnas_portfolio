import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "./GlobalContext";

export const ExperienceContext = createContext();

export const ExperienceProvider = (props) => {
  const navigate = useNavigate();
  const { URL } = useContext(GlobalContext);
  const [experiences, setExperiences] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    name: "",
    description: "",
    year: "",
    order: "",
    type: "",
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
      description: "",
      year: "",
      order: "",
      type: "",
    });
  };

  const handleEdit = (e) => {
    const id = e.target.value;
    navigate(`/admin/experiences/edit/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === -1) {
      axios
        .post(`${URL}/experiences`, input, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          navigate("/admin/experiences");
        })
        .catch((e) => {
          setError({
            message: e.response.data.message,
            errors: e.response.data.errors,
          });
        });
    } else {
      axios
        .put(`${URL}/experiences/${currentId}`, input, {
          headers: { Authorization: "Bearer " + Cookies.get("token") },
        })
        .then((e) => {
          setFetchStatus(true);
          navigate("/admin/experiences");
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
      .delete(`${URL}/experiences/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((e) => {
        setFetchStatus(true);
      });
  };

  let handleFunction = {
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
  };

  let state = {
    experiences,
    setExperiences,
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
    <ExperienceContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </ExperienceContext.Provider>
  );
};
