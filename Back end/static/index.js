


Vue.component('tracker-type', {
    template: `
    <div>
        <div class="row">
            <div class="col-md-4 border">
                <p>{{ user.uname }}, you can 
                <button v-on:click="Userdel" class="btn btn-danger">delete <i class="bi bi-person-x"></i></button>
                 your account here</p>
                 <h3>{{ user.uname }}'s dashboard</h3>
                <ul v-if="usertrackers.length == 0">
                    <li> Add tracker from the existing list </li>
                    <li> Or create a new tracker </li>
                    <li> And start tracking your life </li>
                </ul>
                <ul v-else>
                    <li v-for="tracker in usertrackers" :key="tracker.tname"> {{tracker['tname']}} - {{tracker['description']}} 
                    <button v-on:click="Logs(tracker.tname)" >View</button>
                    </li>
                </ul>
            </div>


            <div class="col-md-8 border">
                <div class="row">
                    <div class="col-md-5 border">
                        <h3>Create new tracker</h3>
                        <div class="row">
                            <div class="col-auto">
                                <label for="NewTrackerName" class="col-form-label">Tracker name</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="NewTrackerName" class="form-control form-control-sm">
                            </div>
                            <div class="col-auto">
                                <label for="NewTrackerDescription" class="col-form-label">Description</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="NewTrackerDescription" class="form-control form-control-sm">
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary btn-sm" type="button" v-on:click="CreateTracker">Create Tracker</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-7 border">
                        <h3>Add a tracker to your dashboard</h3>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Select a tracker</option>
                            <option v-for="Atracker in alltrackers" id="AddTrackerType" value="Atracker[tname]" v-on:click="Selecttrackertype(Atracker.tname)">
                                {{Atracker['tname']}}
                            </option>
                        </select>
                        <div class="form-check form-check-inline">
                            Type:
                            <input type="radio" name="trackertype" value="Numeric">Numeric
                            <input type="radio" name="trackertype" value="Boolean">Boolean
                            <input type="radio" name="trackertype" value="Rating">Rating
                            <input type="radio" name="trackertype" value="Rating">Multiple Choice
                        </div>
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label for="Tunit" class="col-form-label">Unit</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="Tunit" class="form-control form-control-sm">
                            </div>
                        </div>
                        <div class="form-check form-check-inline">
                            Frequency:
                            <input type="radio" name="frequency" value="Hourly">Hourly
                            <input type="radio" name="frequency" value="Daily">Daily
                            <input type="radio" name="frequency" value="Weekly">Weekly
                            <input type="radio" name="frequency" value="Monthly">Monthly
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary btn-sm" type="button" v-on:click="AddTrackerType">Add Tracker to dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <h3>Add new logs of: {{currenttracker}}</h3>
            <div v-if="currenttracker != null">
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Value</th>
                            <th>Comment</th>
                            <th>Save</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="datetime-local" id="logtime" name="time"><button class="btn-sm" v-on:click="currenttime">
                                Get current date & time</button></td>
                            <td><input type="number" id="logvalue" name="value" class="form-control"/></td>
                            <td><input type="text" id="logcomment" name="comment" class="form-control"/></td>
                            <td><button class="btn btn-outline-success btn-sm" type="button" v-on:click="LogAdd">
                                <i class="bi bi-cloud-upload">Save</i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <h4> Select a tracker </h4>
            </div>
        </div>


        <div class="row">
            <div class="col-md-6 border">
                <h3>{{currenttracker}} Logs</h3>
                <table v-if="currenttracker != null">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Value</th>
                            <th>Comment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="logs == null">
                            <td>No logs yet. Please add logs</td>
                        </tr>
                        <tr v-else v-for="log in logs" :key="log.lid">
                            <td>{{log["timestamp"]}}</td>
                            <td>{{log["value"]}}</td>
                            <td>{{log["comment"]}}</td>
                            <td><button class="btn btn-outline-success btn-sm" type="button" v-on:click="Editform(log.lid)">
                                    <i class="bi bi-pen">Edit</i></button>
                                <button class="btn btn-outline-danger btn-sm" type="button" v-on:click="Logdelete(log.lid)">
                                    <i class="bi bi-trash3">Delete</i></button>
                            </td>   
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                        <td><button class="btn btn-outline-primary btn-sm" type="button" v-on:click="Logsmail()">
                            <i class="bi bi-envelope-check">Mail logs</i></button>
                        </td>
                        </tr>
                    </tfoot>
                </table>
                <table v-else>
                    <p> Select a tracker from your dashboard</p>
                </table>
            </div>


            <div class="col-md-6 border">
                <div class="row" v-if="editLid != null">
                    <h4>Edit selected log of : {{currenttracker}}</h4>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Value</th>
                                    <th>Comment</th>
                                    <th>Save</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="datetime-local" id="logEdittime" name="time"></td>
                                    <td><input type="number" id="logEditvalue" name="value" class="form-control"/></td>
                                    <td><input type="text" id="logEditcomment" name="comment" class="form-control"/></td>
                                    <td><button class="btn btn-outline-success btn-sm" type="button" v-on:click="LogEdit">
                                        <i class="bi bi-cloud-upload">Save changes</i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3>Chart</h3>
            </div>
        </div>
    </div>
        `,




    data: function() {
        return {
            email: "", // store current user email by created hook
            user: {}, // store current user object (have user details and list of trackers currently active forthem) by created hook
            addtname: null,  // for storing tracker name user wants to add (not working properly)
            currenttracker: null, // store tracker name of currently selected trackertype user
            alltrackers: [], // Array store details of all trackers in database by created hook
            usertrackers: [], // Array store details of current users trackers by beforeMount hook
            logs: "", // Array stores logs of trackertype selected by user by Logs(tname) method
            editLid: null  // store logid to be edited
        }
    },


    async created() {
        this.email = document.getElementById('email').getAttribute('data-value'); // ascessing login user email from sidebar.html
        url = "http://localhost:8080/user/"+this.email
        token = window.localStorage.getItem("auth_token")
        await fetch(url, {headers: {'Content-Type': 'application/json', 'Authentication-Token': token} } ) //Fetching current user details from database
        .then(response => response.json())
        .then(data => this.user = data);
        fetch("http://localhost:8080/trackers") //fetching all trackers in database
        .then(response => response.json())
        .then(data => this.alltrackers = data);
    },


    async beforeMount() {
        this.email = document.getElementById('email').getAttribute('data-value');
        url = "http://localhost:8080/user/"+this.email
        token = window.localStorage.getItem("auth_token")
        await fetch(url, {headers: {'Content-Type': 'application/json', 'Authentication-Token': token} } )
        .then(response => response.json())
        .then(data => this.usertrackers = data.trackers); // storing current users active trackers to trackers array
    },


    mounted(){
        // console.log("All Trackers:", this.alltrackers)
        // console.log("User Trackers:", this.usertrackers)
    },




    methods: {
        Logs(tname) { // function to get logs of the selected trackertype
            this.currenttracker = tname //received from v-on:click Function parameter
            url = "http://localhost:8080/user/"+this.email+"/"+this.currenttracker+"/logs"
            token = window.localStorage.getItem("auth_token")
            fetch(url, {headers: {'Content-Type': 'application/json', 'Authentication-Token': token} } )
            .then((response) => {
                if (response.status >= 200 && response.status <= 299){
                    return response.json();
                }else {
                    this.logs = ""; // if the trackertype has no logs yet set logs to null
                }
            } )
            .then(data => this.logs = data);
        },


        Logsmail() { // function to get logs of the selected trackertype as a mail
            url = "http://localhost:8080/task/"+this.email+"/"+this.currenttracker+"/logs"
            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
            alert('Mail sent');
        },



        vuelogs() {
            // Dummy function
        },



        currenttime() { // function to populate time input for adding log
            var Ltime = document.getElementById("logtime");
            var now = new Date();
            Ltime.valueAsNumber = now.getTime() - now.getTimezoneOffset() * 60000;
        },



        Userdel() { // function to delete the current user
            if(confirm("Do you really want to delete your account")){
                url = "http://localhost:8080/user/"+this.email
                fetch(url, {method: 'DELETE'})
                .then(response => response.json())
                .then(data => console.log(data));
            }
        },



        LogAdd() { // function to add new log of selected tracker type
            oneid = 11 // Even though tdhis value is send, API does not uses this value. So it is safe to give fixed value
            LtimeEl = document.getElementById('logtime') //return html element
            LvalueEl = document.getElementById('logvalue')
            LcommentEl = document.getElementById('logcomment')
            Ltime = LtimeEl.value // get value from element
            Lvalue = LvalueEl.value
            Lcomment = LcommentEl.value
            if (!Ltime) {
                alert('Time is required.');
                return; // exit function
              }
              if (!Lvalue) {
                alert('Value is required.');
                return;
              }
            console.log(Ltime, Lvalue, Lcomment)
            data = { "oneid": oneid, "timestamp":Ltime, "value": Lvalue, "comment": Lcomment };
            console.log(data)
            url = "http://localhost:8080/user/"+this.email+"/"+this.currenttracker
            fetch(url, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });             
        },



        Editform(lid) { //function to make edit form available
            if(confirm("Do you want to edit this log")){
                this.editLid = lid;
                // Need to fill edit form with existing data
                // url = "http://localhost:8080/user/"+this.email+"/"+this.currenttracker+"/"+this.editLid;
                // fetch(url)
                // .then(response => response.json())
                // .then(data => console.log(data));
            }
        },


        LogEdit() { // function to edit selected log
            oneid = 11 // Even though tdhis value is send, API does not uses this value. So it is safe to give fixed value
            LtimeEl = document.getElementById('logEdittime') //return html element
            LvalueEl = document.getElementById('logEditvalue')
            LcommentEl = document.getElementById('logEditcomment')
            Ltime = LtimeEl.value // get value from element
            Lvalue = LvalueEl.value
            Lcomment = LcommentEl.value
            if (!Ltime) {
                alert('Time is required.');
                return; // exit function
              }
              if (!Lvalue) {
                alert('Value is required.');
                return;
              }
            console.log(Ltime, Lvalue, Lcomment)
            data = { "oneid": oneid, "timestamp":Ltime, "value": Lvalue, "comment": Lcomment };
            console.log(data)
            url = "http://localhost:8080/user/"+this.email+"/"+this.currenttracker+"/"+this.editLid
            fetch(url, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            this.editLid = null;       
        },



        Logdelete(lid) { // function to delete a log
            if(confirm("Do you want to delete this log")){
                log = lid
                url = "http://localhost:8080/user/"+this.email+"/"+this.currenttracker+"/"+log
                fetch(url, {method: 'DELETE'})
                .then(response => response.json())
                .then(data => console.log(data));
            }
        },



        Selecttrackertype(addtname) {
            if(confirm("Make sure this tracker not exist in your dashboard already.")){
                this.addtname = addtname;
                console.log("Add tracker:", this.addtname)
            }
        },



        AddTrackerType() { // function to create and add new trackertype of user preference
            if(confirm("Did you select Tracker type and Tracking Frequency?")){
                email = this.email
                Tname = this.addtname
                description = 'Dummy description' // API does not really use this parameter
                TunitEl = document.getElementById('Tunit')
                unit = TunitEl.value
                if (!Tname) {
                    alert('Tracker name required.');
                    return;
                    }
                if (!unit) {
                    alert('Unit is required.');
                    return;
                    }
                console.log(Tname, unit)
                var ele = document.getElementsByName('trackertype');
                for(i = 0; i < ele.length; i++) {
                    if(ele[i].checked)
                    trackertype = ele[i].value;
                }   
                var ele = document.getElementsByName('frequency');
                for(i = 0; i < ele.length; i++) {
                    if(ele[i].checked)
                    frequency = ele[i].value;
                }
                data = { "email": email, "tname":Tname, "description": description, "type": trackertype, "unit": unit, "frequency": frequency };
                console.log(data)
                url = "http://localhost:8080/user/"+this.email
                fetch(url, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });    
            }
        },



        CreateTracker() { // function to create a new tracker
            if(confirm("Make sure Traccker Name is unique.")){
                TnameEl = document.getElementById('NewTrackerName') //return html element
                TdescriptionEl = document.getElementById('NewTrackerDescription')
                Tname = TnameEl.value
                description = TdescriptionEl.value
                if (!Tname) {
                    alert('Tracker name required.');
                    return;
                  }
                  if (!description) {
                    alert('Description required.');
                    return;
                  }
                console.log(Tname, description)
                data = { "tname": Tname, "description":description };
                console.log(data)
                fetch('http://localhost:8080/tracker', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });             
            }
        }
    }
})  







var app = new Vue({
    el:"#testingVue"
    // //delimeters: ['${','}'],
    // data() {
    //     return {
    //         msg: "Testing Vue.js",
    //         fetchdate: ""
    //     }
    // },
    // mounted() {
    //     fetch("http://localhost:8080/user/sanu@example.com")
    //     .then(response => response.json())
    //     .then(data => this.fetchdate = data);
    // }
});
