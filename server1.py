from flask import Flask, render_template
from flask_bootstrap import Bootstrap 


app = Flask(__name__)
app.debug = True

Bootstrap(app)

@app.route('/')  
def index():
  return render_template("index.html")

@app.route('/abuela')
def abuela():
  return render_template("abuela2.html")

@app.route('/nieto')
def nieto():
  return render_template("nieto2.html")

@app.route('/adulta')
def adulta():
  return render_template("adulta.html")


if __name__ == '__main__':
  app.run() 