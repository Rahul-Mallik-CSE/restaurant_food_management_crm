/** @format */

import Header from "@/components/common/header";
import ScheduleForm from "@/components/schedule/scheduleForm";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header
          title="Schedule Management"
          description="Manage your restaurant's schedule time"
        />

        {/* Schedule Form */}

        <ScheduleForm />
      </div>
    </div>
  );
}
