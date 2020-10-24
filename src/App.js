import React from "react";
// import logo from './logo.svg';
import "./App.css";
import CourseDetailScreen from "./E_learning/Screens/Details";
import HomeScreen from "./E_learning/Screens/Home";
import SignupScreen from "./E_learning/Screens/SignUp";
// Routing trong JS
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./E_learning/layouts/Headers";
import SignInScreen from "./E_learning/Screens/SignIn";

function App() {
  return (
    // <div className="App">
    //   <HomeScreen />
    //   <CourseDetailScreen />
    //   <SignupScreen />

    // </div>
    // Boc cac file trong BorwserRoute
    // exact xu ly loi path rong.
    // C1:
    // <BrowserRouter>
    //   <Route path="/" exact component={HomeScreen}/>
    //   <Route path="/detail" exact component={CourseDetailScreen}/>
    //   <Route path="/sign-up" exact component={SignupScreen}/>
    // </BrowserRouter>
    // C2 su dung switch
     <BrowserRouter>
     <Header />
     <Switch>
       {/* :courseId Tham so URL truyen vao */}
      <Route path="/detail/:courseId"  component={CourseDetailScreen}/>
      <Route path="/sign-up"  component={SignupScreen}/>
       <Route path="/sign-in"  component={SignInScreen}/>
      <Route path="/"  component={HomeScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
