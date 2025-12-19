import { useState } from "react";
import axios from "axios";

// ✅ API base from environment
const API_BASE = import.meta.env.VITE_API_BASE;

function EmotionCard({ onAnalyze }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please describe how you feel.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/analyze`, {
        text,
      });

      setResult(res.data);
      if (onAnalyze) onAnalyze();

    } catch (err) {
      setError("Failed to analyze mood. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">

      <h3 className="text-base font-semibold text-slate-200">
        Mood Analysis
      </h3>

      {/* Input */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe how you are feeling..."
        rows={4}
        className="
          w-full
          bg-slate-900
          text-slate-100
          placeholder:text-slate-500
          border border-slate-700
          rounded-lg
          px-4 py-3
          text-sm
          focus:outline-none
          focus:ring-2 focus:ring-teal-400
          resize-none
        "
      />

      {/* Error */}
      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Button */}
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="
          w-full
          bg-teal-500 hover:bg-teal-600
          disabled:opacity-60
          text-white
          py-2.5
          rounded-lg
          text-sm font-medium
          transition
        "
      >
        {loading ? "Analyzing..." : "Analyze Mood"}
      </button>

      {/* Result + YouTube Music */}
      {result && (
        <div className="mt-4 space-y-3 text-sm text-slate-300">

          <p>
            <span className="text-slate-400">Emotion:</span>{" "}
            <span className="text-teal-400 font-medium">
              {result.emotion}
            </span>
          </p>

          <p>
            <span className="text-slate-400">Tip:</span>{" "}
            {result.wellness_tip}
          </p>

          {/* YouTube Music */}
          {result.video_id && (
            <div className="mt-4 rounded-lg overflow-hidden border border-slate-700">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${result.video_id}`}
                title="Music Recommendation"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmotionCard;

