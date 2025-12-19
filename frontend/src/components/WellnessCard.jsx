function WellnessCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow mb-3">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default WellnessCard;
