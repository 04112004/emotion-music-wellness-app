function Talk() {
  return (
    <div className="px-5 pt-16 text-center">
      <img src="/sun.png" className="w-36 mx-auto" />

      <h2 className="mt-6 text-xl font-semibold">
        Say anything that’s on your mind.
      </h2>

      <p className="text-gray-500 text-sm mt-2">
        I’ll listen and analyze your request.
      </p>

      <button className="mt-10 bg-[#FDBA2D] w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
        🎤
      </button>

      <p className="mt-4 text-gray-500">Ready</p>
    </div>
  );
}

export default Talk;
