# Functions to check which badges are awarded

from django.apps import apps
Badge = apps.get_model('badges', 'Badge')

# Badges based on an individual's cities
user_towns = [
  {
  "model": "travels.town",
  "pk": 3705,

    "name": "\ufeffTokyo",
    "name_ascii": "Tokyo",
    "lat": "35,685",
    "lng": "139,7514",
    "country": "Japan",
    "iso2": "JP",
    "iso3": "JPN",
    "admin_name": "T\u014dky\u014d",
    "capital": "primary",
    "population": 35676000,
    "visitors": []
  
},
{
  "model": "travels.town",
  "pk": 3706,

    "name": "New York",
    "name_ascii": "New York",
    "lat": "40,6943",
    "lng": "-73,9249",
    "country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "New York",
    "capital": "",
    "population": 19354922,
    "visitors": []
  
}
]

def get_badges(towns): 
      countries = set(map(lambda town: town['country'], towns))
      badges = Badge.objects.filter(name__in=countries)
      print(countries)
    







    # def put(self, request, pk):
    #     request.data['owner'] = request.user.id
    #     user = User.objects.get(pk=pk)
    #     user_towns = Town.objects.filter(id__in=request.data.towns)

    #     user_badges = get_badges(user_towns)

        # ... update the user somehow with new towns and badges and post to database ...


get_badges(user_towns)

# Badges based on everybody's cities
