import { createAction } from "./index";
import {courseService} from "../../Services/index";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";

// Async action
export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
       dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// Truyen tham so id vao (de lay courseId cua chi tiet khoa hoc)
export const fetchCoursesDetail = (id) =>{
  return (dispatch) =>{
    courseService
      .fetchCoursesDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));

      })
      .catch((err) => {
        console.log(err);
      });
  }
}