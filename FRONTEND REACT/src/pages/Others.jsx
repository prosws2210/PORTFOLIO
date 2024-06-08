import React from 'react'
import ApiDataFetch from "../components/Others/ApiDataFetch.jsx"; 
import AutheticationForm from "../components/Others/AutheticationForm.jsx";
import Calculator from "../components/Others/Calculator.jsx";
import Calender from "../components/Others/Calender.jsx";
import CollegeAdmissionForm from "../components/Others/CollegeAdmissionForm.jsx";
import CounterApp from "../components/Others/CounterApp.jsx";
import DynamicBackground from "../components/Others/DynamicBackground.jsx";
import FileUploader from "../components/Others/FileUploader.jsx";
import ImageCarousel from "../components/Others/ImageCarousel.jsx";
import ListComponent from "../components/Others/ListComponent.jsx";
import QuizApp from "../components/Others/QuizApp.jsx";
import RealTimeInput from "../components/Others/RealTimeInput.jsx";
import SearchBar from "../components/Others/SearchBar.jsx";
import Timer from "../components/Others/Timer.jsx";
import ToDoList from "../components/Others/ToDoList.jsx";
import ToggleSwitch from "../components/Others/ToggleSwitch.jsx";
import UserProfile from "../components/Others/UserProfile.jsx";


const Others = () => {
  return (
    <div>
        Others
        <ApiDataFetch />
        <AutheticationForm />
        <Calculator />
        <Calender />
        <CollegeAdmissionForm />
        <CounterApp />
        <DynamicBackground />
        <FileUploader />
        <ImageCarousel />
        <ListComponent />
        <QuizApp />
        <RealTimeInput />
        <SearchBar />
        <Timer />
        <ToDoList />
        <ToggleSwitch />
        <UserProfile />
    </div>
  )
}

export default Others