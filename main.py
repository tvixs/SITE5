from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # Главная страница

@app.route('/about')
def about():
    return render_template('about.html')  # Страница About Us

if __name__ == '__main__':
    app.run(debug=True)
