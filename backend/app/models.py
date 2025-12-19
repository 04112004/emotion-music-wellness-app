from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class Mood(Base):
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    emotion = Column(String, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow)
