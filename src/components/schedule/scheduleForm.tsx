/** @format */

"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface DaySchedule {
  isOpen: boolean;
  fromTime: string;
  toTime: string;
}

interface WeekSchedule {
  Monday: DaySchedule;
  Tuesday: DaySchedule;
  Wednesday: DaySchedule;
  Thursday: DaySchedule;
  Friday: DaySchedule;
  Saturday: DaySchedule;
  Sunday: DaySchedule;
}

export default function ScheduleForm() {
  const [schedule, setSchedule] = useState<WeekSchedule>({
    Monday: { isOpen: true, fromTime: "10:30", toTime: "10:30" },
    Tuesday: { isOpen: true, fromTime: "10:30", toTime: "10:30" },
    Wednesday: { isOpen: true, fromTime: "10:30", toTime: "10:30" },
    Thursday: { isOpen: false, fromTime: "10:30", toTime: "10:30" },
    Friday: { isOpen: true, fromTime: "10:30", toTime: "10:30" },
    Saturday: { isOpen: true, fromTime: "10:30", toTime: "10:30" },
    Sunday: { isOpen: false, fromTime: "10:30", toTime: "10:30" },
  });

  const handleSwitchChange = (day: keyof WeekSchedule, isOpen: boolean) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen,
      },
    }));
  };

  const handleTimeChange = (
    day: keyof WeekSchedule,
    timeType: "fromTime" | "toTime",
    value: string
  ) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [timeType]: value,
      },
    }));
  };

  const handleSaveSchedule = () => {
    console.log("Schedule saved:", schedule);
    // Add your save logic here
  };

  const handleCancel = () => {
    console.log("Schedule cancelled");
    // Add your cancel logic here
  };

  const renderDayRow = (day: keyof WeekSchedule) => {
    const dayData = schedule[day];

    return (
      <div
        key={day}
        className="flex items-center justify-between py-6 border-b border-gray-100"
      >
        <div className="flex items-center gap-4 w-32">
          <h3 className="text-lg font-medium text-gray-900">{day}</h3>
        </div>

        <div className="flex items-center gap-6 flex-1">
          <Switch
            checked={dayData.isOpen}
            onCheckedChange={(checked) => handleSwitchChange(day, checked)}
            className="data-[state=checked]:bg-blue-500"
          />

          {dayData.isOpen ? (
            <div className="flex items-center gap-6">
              <div className="flex items-center max-w-[600px] gap-2 border bg-white rounded-md px-3 ">
                <span className="text-gray-500 text-sm">From</span>
                <div className="relative">
                  <input
                    type="time"
                    value={dayData.fromTime}
                    onChange={(e) =>
                      handleTimeChange(day, "fromTime", e.target.value)
                    }
                    className="bg-white border-0 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">To</span>
                <div className="relative">
                  <input
                    type="time"
                    value={dayData.toTime}
                    onChange={(e) =>
                      handleTimeChange(day, "toTime", e.target.value)
                    }
                    className="bg-gray-50 border-0 rounded-md px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm">Closed</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <div className="space-y-1">
        {(Object.keys(schedule) as Array<keyof WeekSchedule>).map((day) =>
          renderDayRow(day)
        )}
      </div>

      <div className="flex justify-center gap-4 mt-8 pt-6">
        <Button
          onClick={handleSaveSchedule}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-md font-medium"
        >
          Save Schedule
        </Button>
        <Button
          onClick={handleCancel}
          variant="outline"
          className="px-8 py-2 rounded-md font-medium border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
