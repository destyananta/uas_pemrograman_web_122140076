from setuptools import setup, find_packages
import os

here = os.path.abspath(os.path.dirname(__file__))

# Baca README dan CHANGES, jika file tidak ada bisa ganti dengan string kosong
try:
    with open(os.path.join(here, 'README.txt'), encoding='utf-8') as f:
        README = f.read()
except FileNotFoundError:
    README = ''

try:
    with open(os.path.join(here, 'CHANGES.txt'), encoding='utf-8') as f:
        CHANGES = f.read()
except FileNotFoundError:
    CHANGES = ''

requires = [
    'plaster_pastedeploy',
    'pyramid',
    'pyramid_jinja2',
    'pyramid_debugtoolbar',
    'waitress',
    'alembic',
    'pyramid_retry',
    'pyramid_tm',
    'SQLAlchemy',
    'transaction',
    'zope.sqlalchemy',
]

tests_require = [
    'WebTest',
    'pytest',
    'pytest-cov',
]

setup(
    name='cinelinkbackend',
    version='0.0',
    description='cinelinkbackend',
    long_description=README + '\n\n' + CHANGES,
    classifiers=[
        'Programming Language :: Python',
        'Framework :: Pyramid',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: WSGI :: Application',
    ],
    author='',
    author_email='',
    url='',
    keywords='web pyramid pylons',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    extras_require={
        'testing': tests_require,
    },
    install_requires=requires,
    entry_points={
        'paste.app_factory': [
            'main = cinelinkbackend:main',
        ],
        'console_scripts': [
            'initialize_cinelinkbackend_db=cinelinkbackend.scripts.initialize_db:main',
        ],
    },
)
