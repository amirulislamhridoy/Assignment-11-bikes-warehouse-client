import React from "react";
import { ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/bike", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        toast('You are added a new Item');
        alert('You are added a new Item')
      });
  };
  return (
    <div className="" style={{ marginTop: "150px", marginBottom: '50px' }}>
      <form className="w-25 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} placeholder="Bike Name" required/>
        <br />
        <input type="text" {...register("img")} placeholder="Photo URL" required/>
        <br />
        <input
          type="text"
          {...register("description")}
          placeholder="Description"
          required
        />
        <br />
        <input type="number" {...register("price")} placeholder="Price" required/>
        <br />
        <input type="number" {...register("quantity")} placeholder="Quantity" required/>
        <br />
        <input
          type="text"
          {...register("supplierName")}
          placeholder="Supplier Name"
          required
        />
        <br />
        <input type="submit" />
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddNewItem;
