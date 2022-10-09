from flask import Flask, render_template, redirect


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
# conn = "mongodb://localhost:27017/mars_app"
# mongo = PyMongo(app, uri = conn)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    # mars_data = mongo.db.collection.find_one()

    # Return template and data
    return render_template("index.html")


# Route that will trigger the scrape function
@app.route("/map")
def map():

    return render_template("map.html")


if __name__ == "__main__":
    app.run(debug=True)
