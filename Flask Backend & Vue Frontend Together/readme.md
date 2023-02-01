# Local Development Run
- Run 'local_setup.sh' in a linux shell
    This will create a virtual environment folder '.env' if not present already
    Then it will activate the virtual environment and install all packages listed in "requirements.txt"
- Run 'local_run.sh'
    This will activate the virtual environment
    Then will run the 'main.py'
    Now you can view the app in a web browser with the link [http://localhost:8080]
- Activate a redis server in another shell
    use command "redis-server"
- Activate celery schedule in another shell by:
    Run 'local_beat.sh'
- Activate celery worker in another shell by:
    Run 'local_workers.sh'
- Install and activate MailHog to view the emails
    MailHog will be available in this link [http://localhost:8025]



# Folder Structure

- `application` is where our application code is
- `db_directory` has the sqlite DB. It can be anywhere on the machine. Adjust the path in ``application/config.py`. Repo ships with one required for testing.
- `Open API yaml` has the yaml file of Open API specification is stored
- `static` is where JS and CSS files are stored
- `templates` - Default flask templates folder


```
├── application
│   ├── controller
│   │   ├── __init__.py
│   │   ├── api.py
│   │   └── controllers.py
│   ├── data
│   │   ├── __init__.py
│   │   ├── data_access.py
│   │   ├── database.py
│   │   └── models.py
│   ├── jobs
│   │   ├── __init__.py
│   │   ├── send_email.py
│   │   ├── tasks.py
│   │   └── workers.py
│   ├── utils
│   │   ├── __init__.py
│   │   └── validation.py
│   ├── __init__.py
│   └── config.py
├── db_directory
│   └── testdb.sqlite3
├── Open API yaml
│   └── openapi.yaml
├── static
│   ├── index.js
│   ├── sidebar.js
│   ├── style.css
│   └── tokenlogin.js
├── templates
│   ├── security   
│   │   ├── login_user.html
│   │   └── register_user.html
│   ├── 404.html    
│   ├── downl.pdf
│   ├── email.html    
│   ├── home.html
│   ├── logs.html
│   ├── master.html
│   ├── master.html
│   ├── remainderemail.html
│   ├── sidebar.html
│   └── you.html
├── debug.log
├── local_beat.sh
├── local_run.sh
├── local_setup.sh
├── local_workers.sh
├── main.py
├── Project_report.pdf
├── readme.md
└── requirements.txt

```