def get_wellness_tip(emotion: str) -> str:
    tips = {
        "happy": "Enjoy the moment and spread positivity.",
        "sad": "It's okay to feel sad. Take some time for yourself.",
        "anger": "Pause, breathe deeply, and step away from triggers.",
        "stress": "Try a short breathing exercise to relax.",
        "calm": "Maintain this balance with mindfulness.",
        "neutral": "Check in with yourself and stay present."
    }

    return tips.get(emotion, "Take a moment to care for yourself.")
