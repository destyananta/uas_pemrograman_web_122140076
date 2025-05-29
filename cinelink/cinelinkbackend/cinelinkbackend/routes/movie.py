from pyramid.view import view_config
from pyramid.response import Response
from ..models.film import Film
from ..models.jadwal import Jadwal
from ..models.pemesanan import PemesananTiket
from sqlalchemy.orm import joinedload
import json
from datetime import datetime
from ..models.film import Film


@view_config(route_name='list_movies', renderer='json', request_method='GET')
def list_movies(request):
    films = request.dbsession.query(Film).all()
    return [{
        "film_id": f.film_id,
        "nama_film": f.nama_film,
        "deskripsi": f.deskripsi,
        "genre": f.genre,
        "durasi": str(f.durasi)
    } for f in films]

@view_config(route_name='detail_movie', renderer='json', request_method='GET')
def detail_movie(request):
    film_id = request.matchdict['id']
    film = request.dbsession.query(Film).options(joinedload(Film.jadwals)).filter(Film.film_id == film_id).first()
    if not film:
        return Response(json.dumps({"error": "Film tidak ditemukan"}), status=404, content_type='application/json')
    return {
        "film_id": film.film_id,
        "nama_film": film.nama_film,
        "deskripsi": film.deskripsi,
        "genre": film.genre,
        "durasi": str(film.durasi),
        "jadwal": [{
            "jadwal_id": j.jadwal_id,
            "hari": j.hari,
            "jam_tayang": str(j.jam_tayang)
        } for j in film.jadwals]
    }

@view_config(route_name='create_booking', renderer='json', request_method='POST')
def create_booking(request):
    data = request.json_body
    try:
        booking = PemesananTiket(
            film_id=data['film_id'],
            jadwal_id=data['jadwal_id'],
            nama_pemesan=data['nama_pemesan'],
            jumlah_tiket=data['jumlah_tiket'],
            kontak=data.get('kontak', '')
        )
        request.dbsession.add(booking)
        request.dbsession.flush()
        return {"status": "success", "pemesanan_id": booking.pemesanan_id}
    except Exception as e:
        return Response(json.dumps({"error": str(e)}), status=400, content_type='application/json')

@view_config(route_name='update_movie', renderer='json', request_method='PUT')
def update_movie(request):
    film_id = request.matchdict['id']
    data = request.json_body
    film = request.dbsession.query(Film).filter(Film.film_id == film_id).first()
    if not film:
        return Response(json.dumps({"error": "Film tidak ditemukan"}), status=404, content_type='application/json')
    film.nama_film = data.get('nama_film', film.nama_film)
    film.deskripsi = data.get('deskripsi', film.deskripsi)
    film.genre = data.get('genre', film.genre)
    if 'durasi' in data:
        film.durasi = datetime.strptime(data['durasi'], '%H:%M:%S').time()
    request.dbsession.flush()
    return {"status": "success"}

@view_config(route_name='delete_movie', renderer='json', request_method='DELETE')
def delete_movie(request):
    film_id = request.matchdict['id']
    film = request.dbsession.query(Film).filter(Film.film_id == film_id).first()
    if not film:
        return Response(json.dumps({"error": "Film tidak ditemukan"}), status=404, content_type='application/json')
    request.dbsession.delete(film)
    request.dbsession.flush()
    return {"status": "success"}
