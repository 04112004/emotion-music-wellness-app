def detect_emotion(text: str):
    text = text.lower()

    if any(word in text for word in ["angry", "anger", "mad", "furious"]):
        return "anger"
    elif any(word in text for word in ["sad", "down", "depressed"]):
        return "sad"
    elif any(word in text for word in ["happy", "joy", "excited"]):
        return "happy"
    elif any(word in text for word in ["stress", "anxious", "anxiety"]):
        return "stress"
    elif any(word in text for word in ["calm", "relaxed", "peaceful"]):
        return "calm"
    else:
        return "neutral"
