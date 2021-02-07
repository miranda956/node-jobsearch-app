
        
<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>jobtype</th>
              <th>created date</th>
              <th>expires_on</th>
              <th>job job_location</th>
              <th>job_description</th>
              <th>skills</th>
              <th>experience_level</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="jobs in jobs" :key='jobs.id'>
              <td>{{jobs.job_type}}</td>
              <td>${{jobs.created_date}}</td>
              <td>{{jobs.job_description}}</td>
            <td>{{jobs.experience_level}}</td>
            <td>{{jobs.job_location}}</td>
            <td>{{jobs.created_date}}</td>
            <td>{{jobs.skills}}</td>
            <td>{{jobs.expires_on}}</td>

              <td><router-link :to="'/admin/edit/'+admin._id"><i class="fa fa-pencil-square-o"></i></router-link></td>
              
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>

/*
        "id": 2,
        "job_type": "enginering",
        "created_date": "2020-03-03T00:00:00.000Z",
        "expires_on": "2020-09-04T00:00:00.000Z",
        "is_active": true,
        "job_description": "senior software enginerr",
        "job_location": "kakamega",
        "skills": "SQL,NET core,Js,design patterns",
        "experience_level": "5+ years ",
        "RecruiterId": null

*/
  export default {
    computed: {
      jobs() {
        return this.$store.getters.jobById
      }
    },
    created () {
        this.$store.dispatch('jobById')
    }
  }
</script>



