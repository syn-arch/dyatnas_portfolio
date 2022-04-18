import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "./GlobalContext";
import swal from "sweetalert";

export const SkillContext = createContext();

export const SkillProvider = (props) => {
  const navigate = useNavigate();
  const { URL } = useContext(GlobalContext);
  const [skills, setSkills] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState({
    message: "",
    errors: [],
  });
  const [input, setInput] = useState({
    name: "",
    picture: "",
    description: "",
    long_experience: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangePicture = (e) => {
    setInput({ ...input, picture: e.target.files[0] });
    setPreviewImage(window.URL.createObjectURL(e.target.files[0]));
  };

  const emptyInput = () => {
    setPreviewImage("");
    setInput({
      name: "",
      picture: "",
      description: "",
      long_experience: "",
    });
  };

  const handleEdit = (e) => {
    const id = e.target.value;
    navigate(`/admin/skills/edit/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === -1) {
      const data = new FormData();
      data.append("name", input.name);
      data.append("picture", input.picture);
      data.append("description", input.description);
      data.append("long_experience", input.long_experience);
      axios
        .post(`${URL}/skills`, data, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully inserted", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/skills");
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
      data.append("long_experience", input.long_experience);
      axios
        .post(`${URL}/skills/${currentId}?_method=PUT`, data, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        })
        .then((e) => {
          setFetchStatus(true);
          swal("Success", "data successfully updated", "success");
          setError({
            message: "",
            errors: [],
          });
          navigate("/admin/skills");
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
          .delete(`${URL}/skills/${id}`, {
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
    handleChangePicture,
    handleSubmit,
    handleEdit,
    handleDelete,
  };

  let state = {
    previewImage,
    skills,
    setSkills,
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
    <SkillContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </SkillContext.Provider>
  );
};
