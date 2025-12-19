import EmotionCard from "../components/EmotionCard";

function Home() {
  return (
    <div className="px-5 pt-10">
      <h1 className="text-2xl font-semibold text-gray-800">
        Alex Nguyen,
      </h1>
      <p className="text-gray-600 mt-1">
        how do you feel today?
      </p>

      <EmotionCard />

      <button className="mt-10 w-full bg-[#FDBA2D] py-4 rounded-full font-semibold text-white">
        Continue
      </button>

      <p className="text-center text-sm text-gray-400 mt-3">
        Skip
      </p>
    </div>
  );
}

export default Home;
