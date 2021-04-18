
# import required modules
import requests, json
from flask import render_template, redirect, request, url_for, flash
from weather_app import app


# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
# ======== ENTER YOUR API KEY HERE. ========
api_key = ""  # == GET ONE HERE => https://home.openweathermap.org/users/sign_up
# ==========================================

# Base_url to store variable to store url.
base_url = "http://api.openweathermap.org/data/2.5/weather?"
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


@app.route('/', methods=['GET', 'POST'])
@app.route('/home', methods=['GET', 'POST'])
def home():
    if request.method == "POST":
        country_or_city = request.form['country']
        complete_url = base_url + "appid=" + api_key + "&q=" + country_or_city
        try:
            response = requests.get(complete_url)
            results = response.json()
        except:
            flash("Error, check your internet connection or check if api key is there", "error")
            return render_template("index.html")
        if int(results['cod']) == 200:
            
            # Coordinates
            longitude = results['coord']['lon']
            latitude = results['coord']['lat']
            
            # Weather
            main = results['weather'][0]['main']
            description = results['weather'][0]['description']
            icon = results['weather'][0]['icon']
            icon = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            # Main
            temperature_Fahr = round(((int(results['main']['temp']) -  273.15) * 9/5) + 32)
            temperature_Cels = round((int(results['main']['temp']) - 273.15))
            
            # Sys
            country = results['sys']['country']
            
            # name
            city_name = results['name']
            return render_template('index.html',
                                results=results, longitude=longitude, 
                                latitude=latitude, main=main, 
                                description=description, icon=icon, 
                                temperature_Fahr=temperature_Fahr, temperature_Cels=temperature_Cels, 
                                country=country, city_name=city_name)
        else:
            error = country_or_city
            flash(f"No results for {error}", "error")
            return render_template("index.html")
        
    return render_template('index.html')






'''

# Enter your API key here.
api_key = "fed2786d47dc91a91c0358cc51dbcc30"

# Base_url to store variable to store url.
base_url = "http://api.openweathermap.org/data/2.5/weather?"

city_name = input("Enter city name : ") # Give city name.
complete_url = base_url + "appid=" + api_key + "&q=" + city_name

# Get methods of requests module return response object.
response = requests.get(complete_url)
x = response.json()
'''