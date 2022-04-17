import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import GlobalContext from "./GlobalContext";

export const SkillContext = createContext();

export const SkillProvider = (props) => {
  const navigate = useNavigate();
  const { URL } = useContext(GlobalContext);
  const [skills, setSkills] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [input, setInput] = useState({
    name: "",
    picture: "",
    description: "",
    long_experience: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const emptyInput = () => {
    setInput({
      name: "",
      picture: "",
      description: "",
      long_experience: "",
    });
  };

  const handleEdit = (e) => {
    const id = e.target.value;
    navigate(`/admin/skill/create/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === -1) {
      axios
        .post(`${URL}/skills`, input, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((e) => {
          setFetchStatus(true);
        });
    } else {
      axios
        .put(`${URL}/skills/${currentId}`, input, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((e) => {
          setFetchStatus(true);
        });
    }

    setCurrentId(-1);
    emptyInput();
  };

  const handleDelete = (e) => {
    const id = e.target.value;
    axios
      .delete(`${URL}/skills/${id}`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
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
    skills,
    setSkills,
    currentId,
    setCurrentId,
    fetchStatus,
    setFetchStatus,
    input,
    setInput,
    emptyInput,
  };
  return (
    <SkillContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </SkillContext.Provider>
  );
};
