import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

export default function UserList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const keySearch = search.toLowerCase().trim();

    if (keySearch === "") {
      setFilteredStudents(students);
      return;
    }
    const filtered = students.filter((sv) =>
      sv.name.toLowerCase().includes(keySearch)
    );
    setFilteredStudents(filtered);
  }, [search, students]);

  const handleAddUser = (user) => {
    const exist = students.find((sv) => sv.id === user.id);
    if (exist) {
      alert("Mã sinh viên đã tồn tại!");
      return;
    } else {
      setStudents([...students, user]);
    }
  };
  const addUserForm = useFormik({
    initialValues: {
      id: "",
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string().required("Mã SV không được để trống"),
      name: Yup.string().required("Họ tên không được để trống"),

      phone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại chỉ được chứa chữ số")
        .required("Số điện thoại không được để trống"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email không được để trống"),
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      handleAddUser(values);
      addUserForm.resetForm();
    },
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="bg-gray-800 text-white text-xl font-semibold p-4 rounded">
        Thông tin sinh viên
      </h2>

      <form
        onSubmit={addUserForm.handleSubmit}
        className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="font-semibold">Mã SV</label>
          <input
            name="id"
            value={addUserForm.values.id}
            onChange={addUserForm.handleChange}
            className="border p-2 w-full rounded mt-1"
          />
          {addUserForm.touched.id && addUserForm.errors.id && (
            <p className="text-red-500">{addUserForm.errors.id}</p>
          )}
        </div>

        <div>
          <label className="font-semibold">Họ tên</label>
          <input
            name="name"
            value={addUserForm.values.name}
            onChange={addUserForm.handleChange}
            className="border p-2 w-full rounded mt-1"
          />
          {addUserForm.touched.name && addUserForm.errors.name && (
            <p className="text-red-500">{addUserForm.errors.name}</p>
          )}
        </div>

        <div>
          <label className="font-semibold">Số điện thoại</label>
          <input
            name="phone"
            value={addUserForm.values.phone}
            onChange={addUserForm.handleChange}
            className="border p-2 w-full rounded mt-1"
          />
          {addUserForm.touched.phone && addUserForm.errors.phone && (
            <p className="text-red-500">{addUserForm.errors.phone}</p>
          )}
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            name="email"
            value={addUserForm.values.email}
            onChange={addUserForm.handleChange}
            className="border p-2 w-full rounded mt-1"
          />
          {addUserForm.touched.email && addUserForm.errors.email && (
            <p className="text-red-500">{addUserForm.errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Thêm sinh viên
        </button>
      </form>

      <input
        type="text"
        value={search}
        placeholder="Nhập họ tên để tìm kiếm"
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full rounded mt-1"
      />

      <table className="w-full mt-6 border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2 border">Mã SV</th>
            <th className="p-2 border">Họ tên</th>
            <th className="p-2 border">Số điện thoại</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((sv, index) => (
            <tr key={index} className="text-center border">
              <td className="p-2 border">{sv.id}</td>
              <td className="p-2 border">{sv.name}</td>
              <td className="p-2 border">{sv.phone}</td>
              <td className="p-2 border">{sv.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
