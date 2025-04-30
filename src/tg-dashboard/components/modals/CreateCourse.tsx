import React, { useState, useMemo } from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { createCourse } from "@store/slices/courseSlice";

interface CreateCourseProps {
  closeModal: () => void;
}

const CreateCourse: React.FC<CreateCourseProps> = ({ closeModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState({
    imageUrl: "",
    courseUrl: "",
    name: "",
    price: "",
    discount: "",
    description: "",
    isPublic: false,
    isFeatured: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValid = useMemo(() => {
    return (
      form.imageUrl.trim() !== "" &&
      form.courseUrl.trim() !== "" &&
      form.name.trim() !== "" &&
      form.description.trim() !== "" &&
      form.price.trim() !== "" &&
      !isNaN(Number(form.price)) &&
      form.discount.trim() !== "" &&
      !isNaN(Number(form.discount))
    );
  }, [form]);

  const handleCreateCourse = () => {
    if (!isValid) return;

    const newCourse = {
      imageUrl: form.imageUrl,
      videoUrl: form.courseUrl,
      name: form.name,
      price: Number(form.price),
      discountPrice: Number(form.discount),
      description: form.description,
      isPublic: form.isPublic,
      isFeatured: form.isFeatured,
    };

    dispatch(createCourse(newCourse));
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-fit max-h-full bg-white rounded-[20px] shadow-sm z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Add Course</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent cursor-pointer rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <div
              className="border flex justify-center items-center p-2 rounded-full ml-2"
              onClick={closeModal}
            >
              <CloseIcon color="#101828" />
            </div>
          </button>
        </div>

        <div className="p-4 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col mb-2">
            <input
              name="imageUrl"
              type="text"
              value={form.imageUrl}
              onChange={handleChange}
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Image URL"
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="courseUrl"
              type="text"
              value={form.courseUrl}
              onChange={handleChange}
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Video URL"
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Title"
            />
          </div>
          <div className="w-full flex mb-2">
            <input
              name="price"
              type="text"
              value={form.price}
              onChange={handleChange}
              className="block w-3xs mr-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Price"
            />
            <input
              name="discount"
              type="text"
              value={form.discount}
              onChange={handleChange}
              className="block w-3xs ml-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Discount Price"
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="block w-full h-[160px] p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-[1rem] bg-[#F9F9F9]"
              placeholder="Course Description"
            />
          </div>
          <div className="flex w-full justify-center gap-10 items-center mt-1 ml-2">
            <div className="flex items-center mr-4">
              <input
                id="isPublic"
                type="checkbox"
                name="isPublic"
                checked={form.isPublic}
                onChange={handleChange}
                className="w-4 h-4 text-[#BB8F32] bg-[#BB8F32] rounded-sm"
              />
              <label
                htmlFor="isPublic"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Public Course
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="isFeatured"
                type="checkbox"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleChange}
                className="w-4 h-4 text-[#BB8F32] bg-[#BB8F32] rounded-sm"
              />
              <label
                htmlFor="isFeatured"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Featured Course
              </label>
            </div>
          </div>
          <button
            disabled={!isValid}
            onClick={handleCreateCourse}
            className={`${
              isValid
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-50"
            } bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-1/2 rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 flex justify-center items-center text-center`}
          >
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
