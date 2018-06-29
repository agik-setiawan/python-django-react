from django.shortcuts import render
from django.http import HttpRequest,HttpResponse

# Create your views here
def index(request):
    return render(request,'crud/index.html',{})
def add(request):
    return render(request,'crud/add.html',{})
def store(request):
    return HttpResponse(request.GET['nama'])
