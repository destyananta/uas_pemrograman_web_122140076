from pyramid.view import view_config
from ..models.film import Film
from pyramid.response import Response

@view_config(route_name='get_films', renderer='json', request_method='GET')
def get_films(request):
    try:
        session = request.dbsession
        films = session.query(Film).all()
        
        # Konversi hasil query ke list dict
        result = [
            {
                'film_id': f.film_id,
                'nama_film': f.nama_film,
                'deskripsi': f.deskripsi,
                'genre': f.genre,
                'durasi': str(f.durasi) if f.durasi else None
            } for f in films
        ]
        return result

    except Exception as e:
        # Tangani error dengan respons JSON yang sesuai
        return Response(
            json_body={'error': 'Terjadi kesalahan saat mengambil data film', 'detail': str(e)},
            status=500
        )
