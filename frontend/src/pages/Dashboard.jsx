import { useState } from "react";
import EmotionCard from "../components/EmotionCard";
import MoodChart from "../components/MoodChart";

function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="space-y-8 text-slate-100">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-slate-100">
            Hi User 👋
          </h1>
          <p className="text-sm text-slate-400">
            Here's your Mental wellness overview
          </p>
        </div>
        <span className="text-sm text-slate-500">
          Today
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Weekly Mood Trend */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-base font-semibold text-slate-200 mb-1">
            Weekly Mood Trend
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Average emotional state over the last 7 days
          </p>

          {/* IMPORTANT: fixed height for chart */}
          <div className="h-56 w-full">
            <MoodChart refreshKey={refreshKey} />
          </div>
        </div>

        {/* Mood Analysis */}
        <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
          <EmotionCard onAnalyze={() => setRefreshKey(prev => prev + 1)} />
        </div>

        {/* Wellness Summary */}
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-base font-semibold text-slate-200 mb-4">
            Wellness Summary
          </h3>
          <div className="space-y-3 text-sm text-slate-400">
            <p>• Emotion history is tracked</p>
            <p>• Music adapts to mood</p>
            <p>• Trends update in real time</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
