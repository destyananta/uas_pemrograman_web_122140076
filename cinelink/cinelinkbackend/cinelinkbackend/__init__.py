from pyramid.config import Configurator
from pyramid.events import NewRequest
from sqlalchemy import engine_from_config
from .models import DBSession, Base

def add_dbsession(event):
    """Tambah atribut dbsession ke setiap request agar bisa dipakai di view."""
    request = event.request
    request.dbsession = DBSession()

def main(global_config, **settings):
    config = Configurator(settings=settings)

    # Buat engine dan bind session ke database
    engine = engine_from_config(settings, 'sqlalchemy.')
    DBSession.configure(bind=engine)
    Base.metadata.bind = engine

    # Registrasi subscriber untuk inject dbsession ke request
    config.add_subscriber(add_dbsession, NewRequest)

    config.include('pyramid_jinja2')

    # Daftarkan semua route aplikasi
    config.add_route('home', '/')
    config.add_route('get_films', '/api/films')
    config.add_route('create', '/create')
    config.add_route('create_booking', '/book-ticket')
    config.add_route('delete_movie', '/movies/{id}')
    config.add_route('list_movies', '/movies')





    # Scan semua view dengan @view_config decorator
    config.scan('cinelinkbackend.routes.movie')


    return config.make_wsgi_app()
