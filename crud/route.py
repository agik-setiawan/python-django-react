from django.urls import path
from . import views
urlpatterns=[
    path('',views.index,name='crud.index'),
    path('add/',views.add,name='crud.add'),
    path('store/',views.store,name='crud.store'),
]