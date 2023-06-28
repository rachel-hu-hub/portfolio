from flask import Flask
app = Flask(__name__)

# Home API Route
@app.route("/home")
def home():
    return {"members": ["one", "two", "three"]}

if __name__ == "__main__":
    app.run(debug=True)
