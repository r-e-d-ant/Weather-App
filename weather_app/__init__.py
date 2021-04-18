
from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = "7f6ca8408d3176337e1ee53c61f3cd883900946c7c7b3a139cb240c625186098"


from weather_app import routes