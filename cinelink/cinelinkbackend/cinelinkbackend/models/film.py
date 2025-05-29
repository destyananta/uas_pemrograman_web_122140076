from sqlalchemy import Column, Integer, String, Text, Time
from sqlalchemy.orm import relationship
from . import Base

class Film(Base):
    __tablename__ = 'film'
    film_id = Column(Integer, primary_key=True)
    nama_film = Column(String(255), nullable=False)
    deskripsi = Column(Text)
    genre = Column(String(100))
    durasi = Column(Time)

    jadwals = relationship("Jadwal", back_populates="film", cascade="all, delete-orphan")
    