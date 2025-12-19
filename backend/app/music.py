import requests
from .config import YOUTUBE_API_KEY

def get_music_video(emotion: str) -> str:
    if not YOUTUBE_API_KEY:
        return ""

    query_map = {
        "happy": "happy upbeat music",
        "sad": "sad calm music",
        "angry": "rock intense music",
        "calm": "lofi relaxing music"
    }

    query = query_map.get(emotion, "relaxing music")

    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": query,
        "key": YOUTUBE_API_KEY,
        "type": "video",
        "maxResults": 1
    }

    response = requests.get(url, params=params).json()

    # 🔐 SAFE CHECK
    if "items" not in response or len(response["items"]) == 0:
        print("YouTube API error:", response)
        return ""

    return response["items"][0]["id"]["videoId"]
