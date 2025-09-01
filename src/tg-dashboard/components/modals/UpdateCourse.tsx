import React, { useState, useEffect } from "react";
import CloseIcon from "@assets/svgs/icons/CloseIcon";
import { useDispatch } from "react-redux";
import { Course, updateCourse } from "@store/slices/courseSlice";
import { AppDispatch } from "@store/store";

interface UpdateCourseProps {
  closeModal: () => void;
  course: Course;
}

const UpdateCourse: React.FC<UpdateCourseProps> = ({ closeModal, course }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    imageUrl: course.imageUrl,
    courseUrl: course.courseUrl,
    name: course.name,
    price: course.price,
    discount: course.discount,
    description: course.description,
    isPublic: course.isPublic,
    isFeatured: course.isFeatured,
  });

  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const hasChanges = Object.keys(formData).some(
      (key) =>
        formData[key as keyof typeof formData] !==
        course[key as keyof typeof course]
    );

    setIsFormChanged(hasChanges);
  }, [formData, course]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = () => {
    const updatedCourseData = {
      name: formData.name,
      imageUrl: formData.imageUrl,
      courseUrl: formData.courseUrl,
      price: formData.price,
      discount: formData.discount,
      description: formData.description,
      isPublic: formData.isPublic,
      isFeatured: formData.isFeatured,
    };
    dispatch(updateCourse({ courseId: course._id, updatedCourseData }));
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative p-4 w-full max-w-fit max-h-full bg-white rounded-[20px] z-10">
        <div className="flex items-center justify-between p-4 rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Update Course</h3>
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

        <div className="p-2 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col mb-1 justify-center items-center">
            <img
              className="rounded-2xl h-[200px] w-full object-cover"
              src={formData.imageUrl}
              alt="Course Image"
            />
          </div>
          <div className="w-full gap-4 flex mb-1 mt-2">
            <div className="w-full flex flex-col mb-1 mt-2">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Course Image URL
              </span>
              <input
                name="imageUrl"
                type="text"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Course Image"
                value={formData.imageUrl}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full flex flex-col mb-1 mt-2">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Course Video URL
              </span>
              <input
                name="courseUrl"
                type="text"
                className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Course Video"
                value={formData.courseUrl}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col mb-1 mt-2">
            <span className="text-[#BB8F32] font-[600] ml-2">Course Title</span>
            <input
              name="name"
              type="text"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
              placeholder="Course Title"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full flex mb-1 mt-2">
            <div className="flex flex-col">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Course Price
              </span>
              <input
                name="price"
                type="text"
                className="block w-3xs mr-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Course Price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#BB8F32] font-[600] ml-2">
                Discount Price
              </span>
              <input
                name="discount"
                type="text"
                className="block w-3xs ml-2 p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-full bg-[#F9F9F9]"
                placeholder="Discount Price"
                value={formData.discount}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col mb-1 mt-2">
            <span className="text-[#BB8F32] font-[600] ml-2">
              Course Description
            </span>
            <textarea
              name="description"
              className="block w-full h-[160px] p-3 my-1 ps-10 text-sm text-gray-900 border border-[#E1E1E1] rounded-[1rem] bg-[#F9F9F9]"
              placeholder="Course Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex w-full justify-start items-center mt-1 ml-2">
            <div className="flex w-full justify-start items-center mt-1 ml-2">
              <input
                id="checkbox-item-2"
                type="checkbox"
                checked={formData.isPublic}
                onChange={handleInputChange}
                name="isPublic"
                className="w-4 h-4 text-[#BB8F32] bg-[#BB8F32] rounded-sm"
              />
              <label
                htmlFor="checkbox-item-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Public Course
              </label>
            </div>
            <div className="flex w-full justify-start items-center mt-1 ml-2">
              <input
                id="checkbox-item-3"
                type="checkbox"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                name="isFeatured"
                className="w-4 h-4 text-[#BB8F32] bg-[#BB8F32] rounded-sm"
              />
              <label
                htmlFor="checkbox-item-3"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Featured Course
              </label>
            </div>
          </div>
          <span
            onClick={handleUpdate}
            className={`bg-[linear-gradient(274.47deg,#BB8F32_1.53%,#F6DC94_167.81%)] h-[40px] w-1/2 rounded-full border-0 text-white font-poppins text-[16px] font-bold mt-6 cursor-pointer flex justify-center items-center text-center ${
              !isFormChanged ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Update Course
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
