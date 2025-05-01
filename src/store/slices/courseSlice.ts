import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@libs/axiosInstance";
import { apiRoutes } from "@constants/api";

export type Course = {
  _id: string;
  name: string;
  description: string;
  isFeatured: boolean;
  isPublic: boolean;
  imageUrl: string;
  courseUrl: string;
  price: number;
  discount: number;
  creationDate: string;
  modificationDate: string;
  __v: number;
};

type CourseState = {
  course: Course | null;
  courses: Course[];
  publicCourses: Course[];
  featuredCourses: Course[];
  userCourses: Course[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CourseState = {
  course: null,
  courses: [],
  publicCourses: [],
  featuredCourses: [],
  userCourses: [],
  isLoading: false,
  error: null,
};

export const getCourses = createAsyncThunk<
  Course[],
  void,
  { rejectValue: string }
>("courses/getCourses", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(apiRoutes.courses);
    return response?.data?.result?.courses;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch courses"
    );
  }
});

export const getFeaturedCourses = createAsyncThunk<
  Course[],
  void,
  { rejectValue: string }
>("courses/getFeaturedCourses", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(apiRoutes.featuredCourses);
    return response?.data?.result?.featuredCourses;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch featured courses"
    );
  }
});

export const getPublicCourses = createAsyncThunk<
  Course[],
  void,
  { rejectValue: string }
>("courses/getPublicCourses", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(apiRoutes.publicCourses);
    return response?.data?.result?.publicCourses;
  } catch (error: any) {
    return rejectWithValue(
      error?.response?.data?.message || "Failed to fetch public courses"
    );
  }
});

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${apiRoutes.course}/${courseId}`
      );
      return response.data.result.course;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get course"
      );
    }
  }
);

export const getUserCourses = createAsyncThunk(
  "course/getUserCourses",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${apiRoutes.courses}/${userId}`);
      return response.data.result.courses;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get courses"
      );
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (courseId: string, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${apiRoutes.course}/${courseId}`);
      return courseId;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete course"
      );
    }
  }
);

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (
    {
      courseId,
      updatedCourseData,
    }: { courseId: string; updatedCourseData: Partial<Course> },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.patch(
        `${apiRoutes.course}/${courseId}`,
        updatedCourseData
      );
      return response.data.result.course;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update course"
      );
    }
  }
);

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (courseData: Partial<Course>, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `${apiRoutes.course}/`,
        courseData
      );
      return response.data.result.course;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create course"
      );
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Courses
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.courses = action.payload;
        }
      )
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Unknown error";
      })

      // Get User Courses
      .addCase(getUserCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getUserCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.userCourses = action.payload;
        }
      )
      .addCase(getUserCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Unknown error";
      })

      // Get Course
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        state.isLoading = false;
        state.course = action.payload;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Unknown error";
      })

      // Delete Course
      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = state.courses.filter(
          (course) => course._id !== action.payload
        );
        state.publicCourses = state.publicCourses.filter(
          (course) => course._id !== action.payload
        );
        state.featuredCourses = state.featuredCourses.filter(
          (course) => course._id !== action.payload
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Create Course
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        const exists = state.courses.some(
          (course) => course._id === action.payload._id
        );
        if (!exists) state.courses.push(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Update Course
      .addCase(updateCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedCourse = action.payload;
        state.course = updatedCourse;
        state.courses = state.courses.map((course) =>
          course._id === updatedCourse._id ? updatedCourse : course
        );
        state.publicCourses = state.publicCourses.map((course) =>
          course._id === updatedCourse._id ? updatedCourse : course
        );
        state.featuredCourses = state.featuredCourses.map((course) =>
          course._id === updatedCourse._id ? updatedCourse : course
        );
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Get Public Courses
      .addCase(getPublicCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getPublicCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.publicCourses = action.payload;
        }
      )
      .addCase(getPublicCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Unknown error";
      })

      // Get Featured Courses
      .addCase(getFeaturedCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getFeaturedCourses.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.featuredCourses = action.payload;
        }
      )
      .addCase(getFeaturedCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default coursesSlice.reducer;
