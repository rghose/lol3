from flask import *
app = Flask(__name__)

import botty

# ----------------------------------
@app.route("/", methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        data = request.form["query"]
        return render_template("index.html",data=data)
    
    return render_template("main.html")
# -----------------------------------


# -----------------------------------
@app.route("/request", methods=['POST'])
def respond():
    data = request.form["data"]
    return botty.botty_get_response(data)
# -----------------------------------

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0")
