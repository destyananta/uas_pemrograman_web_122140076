from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# Import semua model agar dikenali oleh SQLAlchemy
from .film import Film
# from .jadwal import Jadwal
# from .pengguna import Pengguna
# from .pemesanan import PemesananTiket

# Setelah semua model diimport, konfigurasi mapper
configure_mappers()

# Buat session factory dan Base class
DBSession = scoped_session(sessionmaker())
Base = declarative_base()

def get_engine(settings, prefix='sqlalchemy.'):
    from sqlalchemy import engine_from_config
    return engine_from_config(settings, prefix)

def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory

def get_tm_session(session_factory, transaction_manager, request=None):
    """Session SQLAlchemy yang terintegrasi dengan transaction manager Pyramid."""
    dbsession = session_factory(info={"request": request})
    zope.sqlalchemy.register(dbsession, transaction_manager=transaction_manager)
    return dbsession

def includeme(config):
    """
    Fungsi includeme untuk di-include di __init__.py utama Pyramid.
    Biasanya di sini kamu daftarkan config terkait database dan transaction manager.
    """
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'

    config.include('pyramid_tm')
    config.include('pyramid_retry')

    dbengine = settings.get('dbengine')
    if not dbengine:
        dbengine = get_engine(settings)

    session_factory = get_session_factory(dbengine)
    config.registry['dbsession_factory'] = session_factory

    def dbsession(request):
        dbsession = request.environ.get('app.dbsession')
        if dbsession is None:
            dbsession = get_tm_session(session_factory, request.tm, request=request)
        return dbsession

    config.add_request_method(dbsession, reify=True)
