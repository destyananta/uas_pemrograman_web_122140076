from pyramid.view import view_config

@view_config(route_name='create', renderer='json', request_method='POST')
def create_view(request):
    # Logic untuk membuat resource baru
    return {"status": "success"}
