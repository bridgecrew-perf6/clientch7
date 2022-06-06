import "./edit.scss";
import Sidebar from "../../../components/adminComponents/sidebar/Sidebar";
import Navbar from "../../../components/adminComponents/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import AdminLayout from "../adminLayout/AdminLayout"
import { useNavigate, useParams } from "react-router-dom";
import NativeSelect from '@mui/material/NativeSelect';

const Edit = ({ inputs, subTitle}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const values = { 
    someDate: new Date().toISOString().substring(0, 10),
    someHours: new Date().getHours(),
    someMinutes: new Date().getMinutes(),
   };
  const fullDate = `${values.someDate}T${values.someHours}:${values.someMinutes}`
  const [file, setFile] = useState("");
  const [loadingButton, setLoadingButton] = useState(false)
  const [data, setData] = useState({
    name: "",
    image: "",
    category: "",
    passenger: 0,
    price: 0,
    description: "",
    startRent: "",
    finishRent: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    fetch(`https://backendch7.herokuapp.com/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    if(name === "image") {
      setFile(e.target.files[0])
    }
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingButton(true)
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("passenger", data.passenger);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("startRent", data.startRent);
      formData.append("finishRent", data.finishRent);
      formData.append("createdAt", data.createdAt);
      formData.append("updatedAt", data.updatedAt);

      const res = await fetch(`https://backendch7.herokuapp.com/api/cars/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        setData({ 
          name: "",
          image: "",
          category: "",
          passenger: 0,
          price: 0,
          description: "",
          startRent: "",
          finishRent: "",
          createdAt: "",
          updatedAt: "",
        });
        setLoadingButton(false)
        navigate("/list-cars");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminLayout>
      <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 
                  "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleChange("image")}
                  accept="image/*"
                  name="image"
                  // onChange={handleChange("image")}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                  <label>Nama</label>
                  <input
                   type="text" 
                   placeholder="Nama Mobil"
                   value={data.name}
                   onChange={handleChange("name")}
                  />
              </div>
              <div className="formInput">
                  <label>Tipe</label>
                  
                  <NativeSelect
                    fullWidth
                    label="Age"
                    value={data.category}
                    onChange={handleChange("category")}
                  >
                    <option value="">
                      <em>None</em>
                    </option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                  </NativeSelect>
              </div>
              <div className="formInput">
                  <label>Penumpang</label>
                  <input
                   type="text" 
                   placeholder="Jumlah Penumpang"
                   value={data.passenger}
                   onChange={handleChange("passenger")} 
                  />
              </div>
              <div className="formInput">
                  <label>Harga sewa</label>
                  <input
                   type="text" 
                   placeholder="harga sewa"
                   value={data.price}
                   onChange={handleChange("price")} 
                  />
              </div>
              <div className="formInput">
                  <label>Deskripsi</label>
                  <input
                   type="text" 
                   placeholder="deskripsi"
                   value={data.description}
                   onChange={handleChange("description")} 
                  />
              </div>
              <div className="formInput">
                  <label>Start Rent</label>
                  <input
                   id="date"
                   label="Next appointment"
                   type="datetime-local"
                   value={data.startRent}
                   onChange={handleChange("startRent")} 
                  />
              </div>
              <div className="formInput">
                  <label>Finish Rent</label>
                  <input
                   id="date"
                   label="Next appointment"
                   type="datetime-local"
                   value={data.finishRent}
                   onChange={handleChange("finishRent")} 
                  />
              </div>
              <div className="formInput">
                  <label>Create At</label>
                  <input
                   type="datetime-local" 
                   placeholder="create at"
                  
                   value={data.createdAt}
                   onChange={handleChange("createdAt")} 
                  />
              </div>
              <div className="formInput">
                  <label>updated At</label>
                  <input
                  type="datetime-local"
                
                 value={data.updatedAt}
                   onChange={handleChange("updatedAt")} 
                  />
              </div>
              <button type="submit" onClick={handleSubmit}>
                {loadingButton ? <p>Menyimpan...</p> : <p>Simpan Perubahan</p>}
              </button>
            </form>
          </div>
        </div>
    </AdminLayout>
  );
};

export default Edit;