import WellnessCard from "../components/WellnessCard";

function Exercises() {
  const exercises = [
    {
      title: "Deep Breathing",
      description: "Breathe slowly for 5 minutes to calm your mind."
    },
    {
      title: "Body Scan",
      description: "Relax each part of your body one by one."
    },
    {
      title: "Gratitude Pause",
      description: "List 3 things you are grateful for today."
    }
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Wellness Exercises 🧘</h2>
      {exercises.map((ex, index) => (
        <WellnessCard
          key={index}
          title={ex.title}
          description={ex.description}
        />
      ))}
    </div>
  );
}

export default Exercises;
