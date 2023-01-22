const About = Vue.component('about', {
    template: `
    <div>
      <h5> About </h5>
          <p>This is a self tracking app, built as a project<p>
    </div>`
})

const ContactUs = Vue.component('contact-us', {
    template: `
    <div>
      <h5> About </h5>
          <p>Contact details: 21f1006584<p>
    </div>`
})

// const NotFound = { template: '<p>Page not found</p>' }

const routes = [{
    path: '/about',
    component: About
}, {
    path: '/contactus',
    component: ContactUs
}];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes // short for `routes: routes`
  })


var app = Vue.createApp({})
app.use(router)

app.mount('#routing')
// var app = new Vue({
//     el: '#routing',
//     router: router,
//     data: {
//         grand_total: 0
//     },
//     methods: {
//         add_grand_total: function() {
//             console.log("in grand_total");
//             this.grand_total = this.grand_total + 1;
//         }
//     }

// })