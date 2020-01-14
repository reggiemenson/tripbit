# Functions to check which badges are awarded
# from django.apps import apps
# Badge = apps.get_model('badges', 'Badge')
from travels.models import Badge, Town
from travels.serializers import BadgeSerializer
# from .travels.models import Badge


all_countries = ['Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Angola', 'Austria', 'Azerbaijan', 'Bahamas, The', 'Bahrain', 'Bangladesh',
'Barbados', 'Belarus', 'Belgium', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia And Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Myanmar', 'Burundi',
'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Costa Rica', 'Côte D’Ivoire', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia',
'Denmark', 'Djibouti', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'French Polynesia',
'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan',
'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico',
'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Sao Tome And Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria',
'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad And Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine',
'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]


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
        "continent": "Asia",
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
        "continent": "North America",
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
        "continent": "Africa",
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
        "continent": "North America",
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
        "continent": "North America",
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
        "continent": "Asia",
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
        "continent": "South America",
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
        "continent": "South America",
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
        "continent": "Europe",
        "visitors": []
    },
    {
        "model": "travels.town",
        "pk": 4769,

        "name": "Belfast",
        "name_ascii": "Belfast",
        "lat": "54,6",
        "lng": "-5,96",
        "country": "United Kingdom",
        "iso2": "GB",
        "iso3": "GBR",
        "admin_name": "Belfast",
        "capital": "",
        "population": 450406,
        "continent": "Europe",
        "visitors": []
    },
  {
        "model": "travels.town",
        "pk": 4102,
  
        "name": "Almaty",
        "name_ascii": "Almaty",
        "lat": "43,325",
        "lng": "76,915",
        "country": "Kazakhstan",
        "iso2": "KZ",
        "iso3": "KAZ",
        "admin_name": "Almaty",
        "capital": "admin",
        "population": 1209000,
        "continent": "Asia",
        "visitors": []
  },
  {
  "model": "travels.town",
  "pk": 3835,

    "name": "Lisbon",
    "name_ascii": "Lisbon",
    "lat": "38,7227",
    "lng": "-9,1449",
    "country": "Portugal",
    "iso2": "PT",
    "iso3": "PRT",
    "admin_name": "Lisboa",
    "capital": "primary",
    "population": 2812000,
    "continent": "Europe",
    "visitors": []
  },
  {
    "model": "travels.town",
    "pk": 3761,
       
      "name": "Barcelona",
      "name_ascii": "Barcelona",
      "lat": "41,3833",
      "lng": "2,1834",
      "country": "Spain",
      "iso2": "ES",
      "iso3": "ESP",
      "admin_name": "Catalonia",
      "capital": "admin",
      "population": 4920000,
      "continent": "Europe",
      "visitors": []
  },

  {
  "model": "travels.town",
  "pk": 3806,
  
    "name": "Kabul",
    "name_ascii": "Kabul",
    "lat": "34,5167",
    "lng": "69,1833",
    "country": "Afghanistan",
    "iso2": "AF",
    "iso3": "AFG",
    "admin_name": "K\u0101bul",
    "capital": "primary",
    "population": 3277000,
    "continent": "Asia",
    "visitors": []
  },
  {
  "model": "travels.town",
  "pk": 6057,
 
    "name": "Noril\u2019sk",
    "name_ascii": "Noril'sk",
    "lat": "69,34",
    "lng": "88,225",
    "country": "Russia",
    "iso2": "RU",
    "iso3": "RUS",
    "admin_name": "Krasnoyarskiy Kray",
    "capital": "",
    "population": 165873,
    "continent": "Europe",
    "visitors": []
  },

  {
    "model": "travels.town",
    "pk": 4042,

      "name": "Kampala",
      "name_ascii": "Kampala",
      "lat": "0,3167",
      "lng": "32,5833",
      "country": "Uganda",
      "iso2": "UG",
      "iso3": "UGA",
      "admin_name": "Kampala",
      "capital": "primary",
      "population": 1420000,
      "continent": "Africa",
      "visitors": []
  },

  {
    "model": "travels.town",
    "pk": 3962,
    
      "name": "Quito",
      "name_ascii": "Quito",
      "lat": "-0,215",
      "lng": "-78,5001",
      "country": "Ecuador",
      "iso2": "EC",
      "iso3": "ECU",
      "admin_name": "Pichincha",
      "capital": "primary",
      "population": 1701000,
      "continent": "South America",
      "visitors": []
  }


]


single_user = {
        "id": 1,
        "username": "Michael",
        "first_name": "Michael",
        "last_name": "Adair",
        "score": 0,
        "image": "https://bit.ly/37UONby",
        "towns":  [   {
                      "model": "travels.town",
                      "pk": 4769,
                        "name": "Belfast",
                        "name_ascii": "Belfast",
                        "lat": "54,6",
                        "lng": "-5,96",
                        "country": "United Kingdom",
                        "iso2": "GB",
                        "iso3": "GBR",
                        "admin_name": "Belfast",
                        "capital": "",
                        "population": 450406,
                        "continent": "Europe",
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
                        "continent": "North America",
                        "visitors": []
                      },

                    {
                      "model": "travels.town",
                      "pk": 3755,
                        "name": "Washington",
                        "name_ascii": "Washington",
                        "lat": "38,9047",
                        "lng": "-77,0163",
                        "country": "United States",
                        "iso2": "US",
                        "iso3": "USA",
                        "admin_name": "District of Columbia",
                        "capital": "primary",
                        "population": 5289420,
                        "continent": "North America",
                        "visitors": []
                      },

                    {
                      "model": "travels.town",
                      "pk": 4160,
                        "name": "Nashville",
                        "name_ascii": "Nashville",
                        "lat": "36,1715",
                        "lng": "-86,7843",
                        "country": "United States",
                        "iso2": "US",
                        "iso3": "USA",
                        "admin_name": "Tennessee",
                        "capital": "admin",
                        "population": 1076645,
                        "continent": "North America",
                        "visitors": []
                      },

                    {
                      "model": "travels.town",
                      "pk": 4182,
                        "name": "New Orleans",
                        "name_ascii": "New Orleans",
                        "lat": "30,0687",
                        "lng": "-89,9288",
                        "country": "United States",
                        "iso2": "US",
                        "iso3": "USA",
                        "admin_name": "Louisiana",
                        "capital": "",
                        "population": 1029123,
                        "continent": "North America",
                        "visitors": []
                      },

                    {
                      "model": "travels.town",
                      "pk": 3794,
                        "name": "San Francisco",
                        "name_ascii": "San Francisco",
                        "lat": "37,7562",
                        "lng": "-122,443",
                        "country": "United States",
                        "iso2": "US",
                        "iso3": "USA",
                        "admin_name": "California",
                        "capital": "",
                        "population": 3603761,
                        "continent": "North America",
                        "visitors": []
                      },
                    {
                        "model": "travels.town",
                        "pk": 4405,
                        "name": "Albuquerque",
                        "name_ascii": "Albuquerque",
                        "lat": "35,1053",
                        "lng": "-106,6464",
                        "country": "United States",
                        "iso2": "US",
                        "iso3": "USA",
                        "admin_name": "New Mexico",
                        "capital": "",
                        "population": 758523,
                        "continent": "North America",
                        "visitors": []
                      }
                    ],
        "trips": [],
        "badges": [],
        "groups_owned": [],
        "groups_joined": [],
        "groups_podium1": [],
        "groups_podium2": [],
        "groups_podium3": []
      }


def get_score(towns):

    all_user_countries = list(map(lambda town: town['country'], towns))
    unique_user_countries = set(all_user_countries)
    unique_continents = set(map(lambda town: town['continent'], towns))
    capitals = [town for town in towns if town['capital'] == 'primary']

    return 5 * len(towns) + 10 * len(capitals) + 20 * len(unique_user_countries) + 50 * len(unique_continents)


def get_badges(towns):

    badge_ids = []

    all_user_countries = list(map(lambda town: town['country'], towns))
    unique_user_countries = set(all_user_countries)
    unique_continents = set(map(lambda town: town['continent'], towns))
    latitudes = list(map(lambda town: town['lat'], towns))
    user_latitudes = [float(x.replace(',', '.')) for x in latitudes]
    capitals = [town for town in towns if town['capital'] == 'primary']

    # print(user_latitudes)

    
    # INDIVIDUAL COUNTRY BADGES
    country_index = [i for i, item in enumerate(all_countries) if item in set(unique_user_countries)]
    country_badge = [x+1 for x in country_index]
    
    badge_ids.extend(country_badge)


    # MULTIPLE COUNTRIES BADGES
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

    badges_xcountries = [int(badge) for badge in x_countries_lookup if len(
        unique_user_countries) >= x_countries_lookup[badge]]
    badge_ids.extend(badges_xcountries)



    # MULTIPLE CITIES BADGES
    x_cities_lookup = {
        '195': 5,
        '196': 10,
        '197': 50,
        '198': 100,
        '199': 150,
        '200': 200,
        '201': 500
    }

    badges_xcities = [int(badge) for badge in x_cities_lookup if len(
        towns) >= x_cities_lookup[badge]]
    badge_ids.extend(badges_xcities)




    # INDIVIDUAL CONTINENT BADGES
    if 'Europe' in unique_continents:
        badge_ids.append(202)
    if 'North America' in unique_continents:
        badge_ids.append(203)
    if 'South America' in unique_continents:
        badge_ids.append(204)
    if 'Asia' in unique_continents:
        badge_ids.append(205)
    if 'Africa' in unique_continents:
        badge_ids.append(206)
    if 'Oceania' in unique_continents:
        badge_ids.append(207)


    # Viking (208)
    condition = ('Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland')

    for country in unique_user_countries:
        if country in condition and 'United Kingdom' in unique_user_countries:
            badge_ids.append(208)
            break
        else:
            pass

    # Columbus (209)

    if 'Portugal' in unique_user_countries and 'Spain' in unique_user_countries and 'South America' in unique_continents:
        badge_ids.append(209)


    # Kerouac (210)
    for country in all_user_countries:
        count_country = (all_user_countries).count('United States')
        if count_country >= 6:
            badge_ids.append(210)
        else:
            pass

    # Stan (211)
    for country in unique_user_countries:
        if country.endswith("stan"):
            badge_ids.append(211)
            break
        else:
            pass

    # Arctic Circle (212)
    for latitude in user_latitudes:
        if latitude >= 66.5:
            badge_ids.append(212)
            break
        else:
            pass


    # Equator (213)
    for latitude in user_latitudes:
        if latitude >= -1 and latitude <= 1:
            badge_ids.append(213)
            break
        else:
            pass


    # print('Michael Badges', badge_ids)
    return badge_ids

    # to_update_user.data['badges'].append(badge_ids)
    # revised_user = UserSerializer(User, data=to_update_user.data)
    # if (revised_user.is_valid()):
    #     to_update_user = revised_user
    #     to_update_user.save()

    # def put(self, request, pk):
    #     request.data['owner'] = request.user.id
    #     user = User.objects.get(pk=pk)
    #     user_towns = Town.objects.filter(id__in=request.data.towns)

    #     user_badges = get_badges(user_towns)

    # ... update the user somehow with new towns and badges and
    # post to database: User.save()

    # from database you get current users and their towns and badges: Users.objects.all()
    # platform_winners = get_platform_winners(users)
    # update badges with the winners
    # platform_badges.save()


# get_badges(single_user['towns'])


# Badges based on everybody's cities

def get_most_countries_badge(users):

    # print(users, 'lets see the users!!!!')

    # most countries (214)

    def count_user_countries(person):
        all_user_town_countries = list(map(lambda town: town['country'], person['towns']))

        unique_user_countries = set(all_user_town_countries)
        return unique_user_countries

    badge = Badge.objects.get(pk=214)

    serialized_badge = BadgeSerializer(badge)

    leader = False

    serialized_badge.data['users'].clear()

    for user in users.data:
        current_user = count_user_countries(user)

        if leader is not False:
            current_leader = count_user_countries(leader)

            if len(current_user) > len(current_leader):
                leader = user

        else:
            leader = user
    
    serialized_badge.data['users'].append(leader['id'])
    updated_badge = BadgeSerializer(badge, data=serialized_badge.data)
    if (updated_badge.is_valid()):
        badge = updated_badge
        badge.save()

    # most cities (215)
    # untested function

def get_most_cities_badge(users):

    def count_user_cities(person):
        all_user_towns = list(map(lambda town: town['id'], person['towns']))

        return all_user_towns

    badge = Badge.objects.get(pk=215)

    serialized_badge = BadgeSerializer(badge)

    leader = False

    serialized_badge.data['users'].clear()

    for user in users.data:
        current_user = count_user_cities(user)

        if leader is not False:
            current_leader = count_user_cities(leader)

            if len(current_user) > len(current_leader):
                leader = user

        else:
            leader = user
    
    serialized_badge.data['users'].append(leader['id'])
    updated_badge = BadgeSerializer(badge, data=serialized_badge.data)
    if (updated_badge.is_valid()):
        badge = updated_badge
        badge.save()
   

    # most capitals (216)

def get_most_capitals_badge(users):

    def count_user_caps(person):
        all_user_town_types = list(map(lambda town: town['capital'], person['towns']))
        all_user_capitals = list(filter(lambda town_type: town_type == 'primary', all_user_town_types))

        return all_user_capitals

    badge = Badge.objects.get(pk=216)

    serialized_badge = BadgeSerializer(badge)

    leader = False

    serialized_badge.data['users'].clear()

    for user in users.data:
        current_user = count_user_caps(user)

        if leader is not False:
            current_leader = count_user_caps(leader)

            if len(current_user) > len(current_leader):
                leader = user

        else:
            leader = user
    
    serialized_badge.data['users'].append(leader['id'])
    updated_badge = BadgeSerializer(badge, data=serialized_badge.data)
    if (updated_badge.is_valid()):
        badge = updated_badge
        badge.save()

    # mega badge (217)

def get_most_badges_badge(users):

    def count_user_badges(person):
        all_user_badges = list(map(lambda badges: badges['id'], person['badges']))

        return all_user_badges

    badge = Badge.objects.get(pk=217)

    serialized_badge = BadgeSerializer(badge)

    leader = False

    serialized_badge.data['users'].clear()

    for user in users.data:
        current_user = count_user_badges(user)

        if leader is not False:
            current_leader = count_user_badges(leader)

            if len(current_user) > len(current_leader):
                leader = user

        else:
            leader = user
    
    serialized_badge.data['users'].append(leader['id'])
    updated_badge = BadgeSerializer(badge, data=serialized_badge.data)
    if (updated_badge.is_valid()):
        badge = updated_badge
        badge.save()

    # --------------------

def get_platform_badges(users):
    get_most_countries_badge(users)
    get_most_cities_badge(users)
    get_most_capitals_badge(users)
    get_most_badges_badge(users)

def get_user_badges(user):
    person = user.data
    # no idea why this doesnt run!
    # print(type(all_user_towns), 'DOES THIS RUN??') 
    return get_badges(person['towns'])

def get_user_score(user):
    person = user.data
    # no idea why this doesnt run!
    # print(type(all_user_towns), 'DOES THIS RUN??') 
    return get_score(person['towns'])




#     all_users = [ {
#   "id": 1,
#   "username": "Michael",
#   "first_name": "Michael",
#   "last_name": "Adair",
#   "score": 0,
#   "image": "https://bit.ly/37UONby",
#   "towns": [
#     {
#   "model": "travels.town",
#   "pk": 4769,
#     "name": "Belfast",
#     "name_ascii": "Belfast",
#     "lat": "54,6",
#     "lng": "-5,96",
#     "country": "United Kingdom",
#     "iso2": "GB",
#     "iso3": "GBR",
#     "admin_name": "Belfast",
#     "capital": "",
#     "population": 450406,
#     "continent": "Europe",
#     "visitors": []
#   },

#     {
#   "model": "travels.town",
#   "pk": 3706,
#     "name": "New York",
#     "name_ascii": "New York",
#     "lat": "40,6943",
#     "lng": "-73,9249",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "New York",
#     "capital": "",
#     "population": 19354922,
#     "continent": "North America",
#     "visitors": []
#   },

#   {
#   "model": "travels.town",
#   "pk": 3755,
#     "name": "Washington",
#     "name_ascii": "Washington",
#     "lat": "38,9047",
#     "lng": "-77,0163",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "District of Columbia",
#     "capital": "primary",
#     "population": 5289420,
#     "continent": "North America",
#     "visitors": []
#   },

#   {
#   "model": "travels.town",
#   "pk": 4160,
#     "name": "Nashville",
#     "name_ascii": "Nashville",
#     "lat": "36,1715",
#     "lng": "-86,7843",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "Tennessee",
#     "capital": "admin",
#     "population": 1076645,
#     "continent": "North America",
#     "visitors": []
#   },

#   {
#   "model": "travels.town",
#   "pk": 4182,
#     "name": "New Orleans",
#     "name_ascii": "New Orleans",
#     "lat": "30,0687",
#     "lng": "-89,9288",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "Louisiana",
#     "capital": "",
#     "population": 1029123,
#     "continent": "North America",
#     "visitors": []
#   },

#   {
#   "model": "travels.town",
#   "pk": 3794,
#     "name": "San Francisco",
#     "name_ascii": "San Francisco",
#     "lat": "37,7562",
#     "lng": "-122,443",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "California",
#     "capital": "",
#     "population": 3603761,
#     "continent": "North America",
#     "visitors": []
#   },
#   {
#   "model": "travels.town",
#   "pk": 4405,
#     "name": "Albuquerque",
#     "name_ascii": "Albuquerque",
#     "lat": "35,1053",
#     "lng": "-106,6464",
#     "country": "United States",
#     "iso2": "US",
#     "iso3": "USA",
#     "admin_name": "New Mexico",
#     "capital": "",
#     "population": 758523,
#     "continent": "North America",
#     "visitors": []
#   }
#   ],
#   "trips": [],
#   "badges": [],
#   "groups_owned": [],
#   "groups_joined": [],
#   "groups_podium1": [],
#   "groups_podium2": [],
#   "groups_podium3": []
# },

# {
#   "id": 2,
#   "username": "Reggie",
#   "first_name": "Reggie",
#   "last_name": "Tachie-Menson",
#   "score": 0,
#   "image": "https://bit.ly/37UONby",
#   "towns": [
#         {
#         "model": "travels.town",
#         "pk": 4086,

#         "name": "Stockholm",
#         "name_ascii": "Stockholm",
#         "lat": "59,3508",
#         "lng": "18,0973",
#         "country": "Sweden",
#         "iso2": "SE",
#         "iso3": "SWE",
#         "admin_name": "Stockholm",
#         "capital": "primary",
#         "population": 1264000,
#         "continent": "Europe",
#         "visitors": []
#     },
#         {
#         "model": "travels.town",
#         "pk": 3705,

#         "name": "\ufeffTokyo",
#         "name_ascii": "Tokyo",
#         "lat": "35,685",
#         "lng": "139,7514",
#         "country": "Japan",
#         "iso2": "JP",
#         "iso3": "JPN",
#         "admin_name": "T\u014dky\u014d",
#         "capital": "primary",
#         "population": 35676000,
#         "continent": "Asia",
#         "visitors": []

#     }
#   ],
#   "trips": [],
#   "badges": [],
#   "groups_owned": [],
#   "groups_joined": [],
#   "groups_podium1": [],
#   "groups_podium2": [],
#   "groups_podium3": []
# },

# {
#   "id": 3,
#   "username": "Georg",
#   "first_name": "Georg",
#   "last_name": "Preuss",
#   "score": 0,
#   "image": "https://bit.ly/37UONby",
#   "towns": [
#       {
#     "model": "travels.town",
#     "pk": 3761,
       
#       "name": "Barcelona",
#       "name_ascii": "Barcelona",
#       "lat": "41,3833",
#       "lng": "2,1834",
#       "country": "Spain",
#       "iso2": "ES",
#       "iso3": "ESP",
#       "admin_name": "Catalonia",
#       "capital": "admin",
#       "population": 4920000,
#       "continent": "Europe",
#       "visitors": []
#   }
#   ],
#   "trips": [],
#   "badges": [],
#   "groups_owned": [],
#   "groups_joined": [],
#   "groups_podium1": [],
#   "groups_podium2": [],
#   "groups_podium3": []
# },

# {
#   "id": 4,
#   "username": "Kathrin",
#   "first_name": "Kathrin",
#   "last_name": "Eichinger",
#   "score": 0,
#   "image": "https://bit.ly/37UONby",
#   "towns": [
#       {
#     "model": "travels.town",
#     "pk": 3962,
    
#       "name": "Quito",
#       "name_ascii": "Quito",
#       "lat": "-0,215",
#       "lng": "-78,5001",
#       "country": "Ecuador",
#       "iso2": "EC",
#       "iso3": "ECU",
#       "admin_name": "Pichincha",
#       "capital": "primary",
#       "population": 1701000,
#       "continent": "South America",
#       "visitors": []
#   }
#   ],
#   "trips": [],
#   "badges": [],
#   "groups_owned": [],
#   "groups_joined": [],
#   "groups_podium1": [],
#   "groups_podium2": [],
#   "groups_podium3": []
# }
# ]

# for user in all_users: 
#     # print ((len(user['towns'])))
#   if len(user['towns']) > 1:
#         print (user['username'], 'has visited', len(user['towns']), 'cities')
#   else:
#         print (user['username'], 'has visited', len(user['towns']), 'city')




# for user in all_users: 
#     all_user_countries =  len(set(list(map(lambda town: town['country'], user['towns']))))
# if all_user_countries > 1:
#       print (user['username'], 'has visited', all_user_countries, 'countries')
# else:
#       print (user['username'], 'has visited', all_user_countries, 'country')

