from application.jobs.workers import celery
from celery.schedules import crontab #This is for scheduling a task



from application.data.database import db
from application.data.models import TrackerType, User, Tracker, Log, Onetoone
from application.jobs import send_email


@celery.on_after_configure.connect
def setup_periodic_task(sender, **kwargs):
    # celery crontab uses UTC (IST = UTC+5.30)
    # config changes like (CELERY_TIMEZONE = "Asia/Calcutta") & (CELERY_ENABLE_UTC = False) didn't work
    # so put IST-5.30 in crontab
    sender.add_periodic_task(crontab(minute=30), email_reminnder.s("Hourly"), name='Hourly remainder')
    sender.add_periodic_task(crontab(hour=11, minute=30), email_reminnder.s("Daily"), name='Daily remainder')
    sender.add_periodic_task(crontab(day_of_week=1, hour=11, minute=30), email_reminnder.s("Weekly"), name='Weekly remainder')
    sender.add_periodic_task(crontab(day_of_month=1, hour=11, minute=30), email_reminnder.s("Monthly"), name='Monthly remainder')
    #sender.add_periodic_task(300.0, email_reminnder.s("Daily"), name='Daily remainder') #Tor testing




@celery.task()
def email_reminnder(freq):
    freq = freq
    trackertypes = db.session.query(TrackerType).filter(TrackerType.frequency == freq).all()
    maillist = []
    for trackertype in trackertypes:
        uname = db.session.query(User.uname).filter(User.id == trackertype.uid).first()
        email = db.session.query(User.email).filter(User.id == trackertype.uid).first()
        tname = db.session.query(Tracker.tname).filter(Tracker.tid == trackertype.tid).first()
        maildetails = {"uname":uname[0], "email":email[0], "tname":tname[0]}
        maillist.append(maildetails)
    print("Daily remainder list {}".format(maillist)) #For testing
    send_email.reminderemail(freq=freq, list=maillist)


