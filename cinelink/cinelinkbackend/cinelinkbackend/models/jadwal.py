from sqlalchemy import Column, Integer, String, Time, ForeignKey
from sqlalchemy.orm import relationship
from . import Base

class Jadwal(Base):
    __tablename__ = 'jadwal'
    jadwal_id = Column(Integer, primary_key=True)
    film_id = Column(Integer, ForeignKey('film.film_id'))
    hari = Column(String(50))
    jam_tayang = Column(Time)

    film = relationship("Film", back_populates="jadwals")
