from main import cache
from http.client import OK
from unittest import result
from flask import Flask, request, redirect
from flask import render_template, url_for
from flask import current_app as app
from application.jobs import tasks
from application.jobs import send_email
from flask_security import auth_required, login_required, current_user
from application.data.database import db
from datetime import datetime #For task
from time import perf_counter_ns


#import all the models. Can use different controllers for different models or try flask blue print
from application.data.models import User, Tracker, TrackerType, Onetoone, Log #Not needed anymore as data is fetched by api
#from data.models import Tracker
#from data.models import TrackerType
#from data.models import Onetoone
#from data.models import Log



@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("home.html")

@app.route("/tokenlogin", methods=["GET", "POST"])
def tokenlogin():
    return render_template("tokenlogin.html")

@app.route("/you", methods=["GET", "POST"])
@login_required
@cache.cached(timeout=25)
def you():
    if request.method == "GET":
        user = current_user.email        
        #tracker = Tracker.query.filter(Tracker.users.any(email=user)) #Not needed as it is done by fetching API
        #app.logger.debug("User Tracker {}".format(tracker))
        #Flask-sqlalchemy query with except not possible
        #other = Tracker.query.all().except_(Tracker.query.filter(Tracker.users.any(email=user)))
        #other = Tracker.query.all()
        #app.logger.debug("All Tracker {}".format(other))
        print("To test whether the page is served from cache or not")
        return render_template("you.html", username=user)
    #elif request.method == "POST"



# These are controllers for purely server rendered app
'''@app.route("/CreateNewTracker", methods=["GET", "POST"])
@login_required
def CreateNewTracker():
    if request.method == "GET":
        return render_template("CreateNewTracker.html")
    elif request.method =="POST":
        tname = request.form['tname']
        description = request.form['description']
        newtracker = Tracker(tname=tname, description=description)
        try:
            db.session.add(newtracker)
            db.session.commit()
            return redirect('/you')
        except:
            return "There was an error, add again. MAKE SURE THE TRACKER NAME YOU PROVIDED DOES NOT EXIST ALREADY"'''

'''@app.route("/addtracker", methods=["GET", "POST"])
@login_required
def AddTracker():
    if request.method == "POST":
        user = current_user.email
        tname = request.form['tname']
        app.logger.debug("Current Tracker {}".format(tname))
        return render_template("addtracker.html", user=user, tname=tname)'''

'''@app.route("/onetoone", methods=["GET", "POST"])
@login_required
def Oneto1():
    if request.method == "POST":
        useremail = request.form['email']
        user = User.query.filter_by(email=useremail).first()
        uid = user.id
        trackername = request.form['tname']
        tracker = Tracker.query.filter_by(tname=trackername).first()
        tid = tracker.tid
        type = request.form['type']
        unit = request.form['unit']
        frequency = request.form['frequency']
        addtracker = TrackerType(tid=tid, uid=uid, type=type, unit=unit, frequency=frequency)
        one2one = Onetoone(tid=tid, uid=uid)
        try:
            db.session.add(addtracker)
            db.session.commit()
            db.session.add(one2one)
            db.session.commit()            
            return redirect('/you')
        except:
            return "There was an error, add again. MAKE SURE THAT THE TRACKER ALREADY NOT EXIST IN YOUR DASHBOARD"'''

'''@app.route("/trackerpage", methods=["GET", "POST"])
@login_required
def Trackerpage():
    if request.method == "POST":
        uid = current_user.id
        trackername = request.form['tracker']
        tracker = Tracker.query.filter_by(tname=trackername).first()
        tid = tracker.tid
        one = Onetoone.query.filter_by(tid=tid, uid=uid).first()
        oneid = one.oneid
        logs = Log.query.filter_by(oneid=oneid).order_by(Log.timestamp).all()


        return render_template("tracker.html", trackername=trackername, logs=logs)'''
        

'''@app.route("/trackerlog", methods=["GET", "POST"])
@login_required
def Trackerlog():
    if request.method == "POST":
        uid = current_user.id
        trackername = request.form['tname']
        tracker = Tracker.query.filter_by(tname=trackername).first()
        tid = tracker.tid
        one = Onetoone.query.filter_by(tid=tid, uid=uid).first()
        oneid = one.oneid
        timestamp = request.form['time']
        value = request.form['value']
        comment = request.form['comment']
        newlog = Log(oneid=oneid, timestamp=timestamp, value=value, comment=comment)
        try:
            db.session.add(newlog)
            db.session.commit()
            logs = Log.query.filter_by(oneid=oneid).order_by(Log.timestamp).all()        
            return render_template("tracker.html", trackername=trackername, logs=logs)
        except:
            return "There was an error, add again. MAKE SURE THAT ALL REQUIRED FIELDS ARE FILLED"'''



@app.route("/hello", methods=["GET", "POST"])  #For testing celery task
def hello():
    tasks.email_reminnder.delay()
    #job = tasks.daily_reminnder.delay()
    #result = job.wait()
    #return str(result), 200
    return OK, 200


@app.route("/email", methods=["GET", "POST"])  #For testing celery task
def email():
    test_email = send_email.email()
    #return OK, 200