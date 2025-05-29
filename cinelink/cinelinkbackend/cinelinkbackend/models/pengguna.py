from sqlalchemy import Column, Integer, String, TIMESTAMP
from .meta import Base

class Pengguna(Base):
    __tablename__ = 'pengguna'
    user_id = Column(Integer, primary_key=True)
    username = Column(String)
    password_hash = Column(String)
    email = Column(String)
    created_at = Column(TIMESTAMP)
