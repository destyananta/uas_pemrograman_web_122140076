from sqlalchemy import Column, Integer, String, ForeignKey
from . import Base

class PemesananTiket(Base):
    __tablename__ = 'pemesanan_tiket'
    pemesanan_id = Column(Integer, primary_key=True)
    film_id = Column(Integer, ForeignKey('film.film_id'))
    jadwal_id = Column(Integer, ForeignKey('jadwal.jadwal_id'))
    nama_pemesan = Column(String(255))
    jumlah_tiket = Column(Integer)
    kontak = Column(String(100))
