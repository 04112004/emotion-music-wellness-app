from pydantic import BaseModel
from datetime import datetime

class EmotionRequest(BaseModel):
    text: str

class EmotionResponse(BaseModel):
    emotion: str
    video_id: str
    wellness_tip: str

class MoodResponse(BaseModel):
    emotion: str
    timestamp: datetime

    class Config:
        orm_mode = True

