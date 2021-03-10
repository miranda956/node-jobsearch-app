<template>
<div class="container contact-form">
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form>
                <h3>  POST A JOB </h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="jobtype" value="" v-model="job.jobtype"/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="joblocation*" value="" v-model="job.joblocation"/>
                        </div>
                        
                        <div class="form-group">
                            <input type="text" name="txtskills" class="form-control" placeholder="Coding,Design,Deployment *" value="" v-model="job.skills"/>

                        </div>
                            <div class="form-group">
                            <label class="control-label col-sm-offset-2 col-sm-2" for="company">experience_level</label>
                            <div class="col-sm-6 col-md-4">
                             <select id="company" class="form-control">
                             <option>0-1 years</option>
                             <option>1-4 years</option>
                             <option>5-9 years</option>
                             <option>10+ years</option>
        </select> 
      </div>
    </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Submit" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="jobdescription *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                    </div>
                </div>  
            </form>
</div>
  
</template>
<script>
import jobDataService from "../../Services/jobDataService";
export default {
    name: 'job-new',
    data () {
    return {
      job: {
        id: '',
        jobtype: '',
        jobdescription:'',
        joblocation: '',
        skills: '',
        experience_level: '',
        posted_on:'',
        expires_on:''
      }
    }
  },
  
  methods: {
    saveJob() {
      var data = {
        jobtype: this.job.jobtype,
        jobdescription: this.job.jobdescription,
        joblocation: this.job.joblocation,
        skills: this.job.skills,
        experience_level:this.job.experience_level,
        posted_on:this.job.posted_on,
        expires_on:this.job.expires_on
      };

      jobDataService.create(data)
        .then(response => {
          this.job.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newJob() {
      this.submitted = false;
      this.job = {};
    }
  }
}
</script>
<style scoped>
body{
    background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
}
.contact-form{
    background: #fff;
    margin-top: 10%;
    margin-bottom: 5%;
    width: 70%;
}
.contact-form .form-control{
    border-radius:1rem;
}
.contact-image{
    text-align: center;
}
.contact-image img{
    border-radius: 6rem;
    width: 11%;
    margin-top: -3%;
    transform: rotate(29deg);
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3{
    margin-bottom: 8%;
    margin-top: -10%;
    text-align: center;
    color: #0062cc;
}
.contact-form .btnContact {
    width: 50%;
    border: none;
    border-radius: 1rem;
    padding: 1.5%;
    background: #dc3545;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
.btnContactSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
}
</style>>
