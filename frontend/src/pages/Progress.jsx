function Progress() {
  return (
    <div className="px-5 pt-6">
      <h2 className="text-lg font-semibold">Mood Tracker</h2>

      <div className="flex bg-white rounded-full p-1 mt-4">
        {["Day", "Week", "Month", "Year"].map(tab => (
          <button
            key={tab}
            className={`flex-1 py-2 rounded-full text-sm ${
              tab === "Week"
                ? "bg-[#FDBA2D] text-white"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white rounded-3xl p-4 shadow">
        <p className="text-lg font-semibold">32–35</p>
        <p className="text-sm text-gray-400">
          Average level of stress
        </p>

        <div className="h-32 mt-4 flex items-end gap-2">
          {[40,60,80,70,90,50,65].map((h,i)=>(
            <div
              key={i}
              style={{height:`${h}%`}}
              className="w-6 rounded-full bg-gradient-to-t from-yellow-400 to-orange-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Progress;
