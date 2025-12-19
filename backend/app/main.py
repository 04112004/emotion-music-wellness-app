from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import engine, SessionLocal
from .models import Mood              # ✅ FROM MODELS
from .schemas import EmotionRequest, EmotionResponse, MoodResponse
from .emotion import detect_emotion
from .music import get_music_video
from .wellness import get_wellness_tip

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
from .models import Base
Base.metadata.create_all(bind=engine)

# ----------------------------
# ANALYZE
# ----------------------------
@app.post("/analyze", response_model=EmotionResponse)
def analyze_emotion(payload: EmotionRequest):
    emotion = detect_emotion(payload.text)
    video_id = get_music_video(emotion)
    tip = get_wellness_tip(emotion)

    db: Session = SessionLocal()
    db.add(Mood(emotion=emotion))
    db.commit()
    db.close()

    return {
        "emotion": emotion,
        "video_id": video_id,
        "wellness_tip": tip
    }

# ----------------------------
# HISTORY
# ----------------------------
@app.get("/history", response_model=list[MoodResponse])
def get_history():
    db: Session = SessionLocal()
    moods = (
        db.query(Mood)
        .order_by(Mood.timestamp.desc())
        .limit(7)
        .all()
    )
    db.close()
    return moods
