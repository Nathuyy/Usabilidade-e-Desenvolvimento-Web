from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render

def home(req):
  return HttpResponse('HOME')

def contato(req):
  return HttpResponse('contato')

def sobre(req):
  return HttpResponse('sobre')