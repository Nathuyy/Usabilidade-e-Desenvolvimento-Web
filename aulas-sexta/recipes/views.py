from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render

def home(req):
  return HttpResponse('''<!DOCTYPE>
                      <html>
                        <head>eai
                        </head>
                      </html>
                      
                      ''')

def contato(req):
  return HttpResponse('contato')

def sobre(req):
  return HttpResponse('sobre')