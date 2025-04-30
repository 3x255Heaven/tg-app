import GraphIcon from "@assets/svgs/icons/GraphIcon";
import ManageCoursesIcon from "@assets/svgs/icons/ManageCoursesIcon";
import UsersIcon from "@assets/svgs/icons/UsersIcon";
import Graph from "@dashboard/components/Graph";
import AdminDashboardLayout from "@dashboard/hoc/AdminDashboardLayout";
import Course from "../Courses/Course";
import FetchData from "@dashboard/hoc/FetchData";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

const Overview = () => {
  const { featuredCourses } = useSelector(
    (state: RootState) => state.courseReducer
  );

  return (
    <AdminDashboardLayout>
      <FetchData>
        <div className="w-full p-4 flex flex-col">
          <div className="w-full flex justify-between items-center">
            <div className="w-full grid gap-4 grid-cols-3 grid-rows-1">
              <div className="bg-white flex py-2 px-4 justify-between items-center rounded-xl shadow">
                <div className="flex flex-col gap-2">
                  <span className="text-[#797D8C] text-[1rem] font-bold">
                    Total Users
                  </span>
                  <span className="text-[#04103B] text-[2rem] font-bold">
                    25.1K
                  </span>
                </div>
                <div className="bg-[#BB8F32]/20 border border-[#BB8F32] rounded-md p-4">
                  <UsersIcon width={60} height={60} />
                </div>
              </div>
              <div className="bg-white flex py-2 px-4 justify-between items-center rounded-xl shadow">
                <div className="flex flex-col gap-2">
                  <span className="text-[#797D8C] text-[1rem] font-bold">
                    Total Sold Courses
                  </span>
                  <span className="text-[#04103B] text-[2rem] font-bold">
                    280
                  </span>
                </div>
                <div className="bg-[#BB8F32]/20 border border-[#BB8F32] rounded-md p-4">
                  <GraphIcon width={60} height={60} />
                </div>
              </div>
              <div className="bg-white flex py-2 px-4 justify-between items-center rounded-xl shadow">
                <div className="flex flex-col gap-2">
                  <span className="text-[#797D8C] text-[1rem] font-bold">
                    Total Courses
                  </span>
                  <span className="text-[#04103B] text-[2rem] font-bold">
                    300
                  </span>
                </div>

                <div className="bg-[#BB8F32]/20 border border-[#BB8F32] rounded-md p-4">
                  <ManageCoursesIcon width={60} height={60} color="#BB8F32" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center pt-6">
            <div className="bg-white p-4 rounded-2xl flex flex-col">
              <span className="text-3xl font-bold mb-1">Revenue</span>
              <Graph />
            </div>
            <div className="bg-white p-4 rounded-2xl flex flex-col mt-6">
              <span className="text-3xl font-bold mb-1">Courses</span>
              <div className="grid grid-cols-4 grid-rows-1 gap-2 mt-4">
                {featuredCourses.map((courseItem) => {
                  return <Course key={courseItem._id} course={courseItem} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </FetchData>
    </AdminDashboardLayout>
  );
};

export default Overview;
