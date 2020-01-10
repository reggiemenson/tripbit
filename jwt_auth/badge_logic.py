# Functions to check which badges are awarded

# from django.apps import apps
# Badge = apps.get_model('badges', 'Badge')

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
  
},
{
  "model": "travels.town",
  "pk": 7379,

    "name": "Atakpam\u00e9",
    "name_ascii": "Atakpame",
    "lat": "7,53",
    "lng": "1,12",
    "country": "Togo",
    "iso2": "TG",
    "iso3": "TGO",
    "admin_name": "Plateaux",
    "capital": "admin",
    "population": 80683,
    "visitors": []

},
{
  "model": "travels.town",
  "pk": 7380,
    "name": "Brooklyn Park",
    "name_ascii": "Brooklyn Park",
    "lat": "45,1112",
    "lng": "-93,3505",
    "country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Minnesota",
    "capital": "",
    "population": 80581,
    "visitors": []
},
{
  "model": "travels.town",
  "pk": 7381,
    "name": "Deerfield Beach",
    "name_ascii": "Deerfield Beach",
    "lat": "26,3049",
    "lng": "-80,1277",
    "country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "Florida",
    "capital": "",
    "population": 80571,
    "visitors": []

},
{
  "model": "travels.town",
  "pk": 7382,

    "name": "Bing\u00f6l",
    "name_ascii": "Bingol",
    "lat": "38,885",
    "lng": "40,498",
    "country": "Turkey",
    "iso2": "TR",
    "iso3": "TUR",
    "admin_name": "Bing\u00f6l",
    "capital": "admin",
    "population": 80568,
    "visitors": []

},
{
  "model": "travels.town",
  "pk": 7383,
    "name": "Tustin",
    "name_ascii": "Tustin",
    "lat": "33,7309",
    "lng": "-117,8106",
    "country": "United States",
    "iso2": "US",
    "iso3": "USA",
    "admin_name": "California",
    "capital": "",
    "population": 80498,
    "visitors": []
},
{
  "model": "travels.town",
  "pk": 7384,
    "name": "Necochea",
    "name_ascii": "Necochea",
    "lat": "-38,56",
    "lng": "-58,75",
    "country": "Argentina",
    "iso2": "AR",
    "iso3": "ARG",
    "admin_name": "Buenos Aires",
    "capital": "minor",
    "population": 80478,
    "visitors": []
},
{
  "model": "travels.town",
  "pk": 4086,

    "name": "Stockholm",
    "name_ascii": "Stockholm",
    "lat": "59,3508",
    "lng": "18,0973",
    "country": "Sweden",
    "iso2": "SE",
    "iso3": "SWE",
    "admin_name": "Stockholm",
    "capital": "primary",
    "population": 1264000,
    "visitors": []
  }
]

def get_badges(towns): 

    badge_ids = []

    countries = set(map(lambda town: town['country'], towns))
    capitals = [town for town in towns if town['capital'] == 'primary']
    print(countries)

    # Individual country badges
    # badges = Badge.objects.filter(name__in=countries)

    # Individual continent badges
    # waiting for continents to be added to towns data


    # x countries badges
    x_countries_lookup = {
        '184': 5,
        '185': 10,
        '186': 20,
        '187': 30,
        '188': 40,
        '189': 50,
        '190': 60,
        '191': 70,
        '192': 80,
        '193': 90,
        '194': 100
    }

    badges_xcountries = [int(badge) for badge in x_countries_lookup if len(countries) >= x_countries_lookup[badge]]
    badge_ids.extend(badges_xcountries)
    # print(badges_xcountries)

    # x cities badges
    x_cities_lookup = {
        '195': 5,
        '196': 10,
        '197': 50,
        '198': 100,
        '199': 150,
        '200': 200,
        '201': 500
    }

    badges_xcities = [int(badge) for badge in x_cities_lookup if len(towns) >= x_cities_lookup[badge]]
    badge_ids.extend(badges_xcities)
    # print(badges_xcities)

    # Viking (208)
    condition = ('Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland')
    
    for country in countries:
        if country in condition:
            badge_ids.append(208)
            break
        else:
            pass


    # Columbus (209)

    # Kerouac (210)

    # Stan (211)

    # Arctic Circle (212)

    # Equator (213)

    print(badge_ids)


    # def put(self, request, pk):
    #     request.data['owner'] = request.user.id
    #     user = User.objects.get(pk=pk)
    #     user_towns = Town.objects.filter(id__in=request.data.towns)

    #     user_badges = get_badges(user_towns)

        # ... update the user somehow with new towns and badges and post to database ...


get_badges(user_towns)

# Badges based on everybody's cities

# most countries (214)

# most cities (215)

# most capitals (216)

# mega badge (217)