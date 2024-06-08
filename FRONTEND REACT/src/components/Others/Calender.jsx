import React, { useState } from "react";

function Calendar() {
    const [date, setDate] = useState(new Date());

    const daysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    const renderCalendar = () => {
        const days = [];
        const totalDays = daysInMonth(date);
        const firstDay = firstDayOfMonth(date);

        // Fill in the days of the previous month
        for (let i = firstDay; i > 0; i--) {
            days.push(
                <div key={`prev${i}`} className="day prev-month-day text-gray-400">
                    {totalDays - i + 1}
                </div>
            );
        }

        // Fill in the days of the current month
        for (let i = 1; i <= totalDays; i++) {
            days.push(
                <div key={i} className="day text-blue-500 text-center">
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar bg-white p-4 rounded-lg shadow-lg">
            <div className="header flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Previous</button>
                <h2 className="text-2xl font-bold text-blue-500">
                    {date.toLocaleString("default", { month: "long", year: "numeric" })}
                </h2>
                <button onClick={nextMonth} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Next</button>
            </div>
            <div className="days grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="day text-center text-blue-500">{day}</div>
                ))}
            </div>
            <div className="dates grid grid-cols-7 gap-2">
                {renderCalendar()}
            </div>
        </div>
    );
}

export default Calendar;