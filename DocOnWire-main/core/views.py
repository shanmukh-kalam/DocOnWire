from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, "home.html")


def doctorDashboard(request):
    return render(request, "doctor/dashboard.html")