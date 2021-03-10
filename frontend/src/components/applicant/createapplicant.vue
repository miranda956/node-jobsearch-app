<template>
	
<div class="signup-form">
    <form >
		<h2>KAZI HUSTLE</h2>
		<p>Please fill in this form to create an account!</p>
		<hr>
		<div class="form-group">
        	<input type="fisrt_name" class="form-control" name="first_name" placeholder="first_name" v-model="applicant.first_name">
        </div>
		<div class="form-group">
        	<input type="last_name" class="form-control" name="last_name" placeholder="last_name" v-model="applicant.last_name">
        </div>
			 	
        
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" v-model="applicant.email" >
        </div>
		<div class="form-group">
            <input type="contact" class="form-control" name="contact" placeholder="contact" v-model="applicant.contact">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="password" v-model="applicant.password">
        </div>        
        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" > I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg" @click="saveApplicant">Sign Up</button>
        </div>
    </form>
</div>    

</template>
<script>
import applicantDataService from "../../Services/applicantDataService";
export default {
    name:'applicant-new',
    data () {
    return {
      applicant: {
		errors:[],
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        contact: '',
        password:'',
		message:''
      }
    }
  },
  
   methods: {
   

    saveApplicant() {
      var data = {
        first_name:this.applicant.first_name,
		last_name:this.applicant.last_name,
		email:this.applicant.email,
		contact:this.applicant.contact,
		password:this.applicant.password
      };
      applicantDataService.create(data)
        .then(response => {
          this.applicant.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
	},
    newapplicant() {
      this.submitted = false;
      this.applicant = {};
    }
  }
}
</script>
<style>
body {
	color: #fff;
	background: #3598dc;
	font-family: 'Roboto', sans-serif;
}
.form-control {
	height: 41px;
	background: #f2f2f2;
	box-shadow: none !important;
	border: none;
}
.form-control:focus {
	background: #e2e2e2;
}
.form-control, .btn {        
	border-radius: 3px;
}
.signup-form {
	width: 400px;
	margin: 30px auto;
}
.signup-form form {
	color: #999;
	border-radius: 3px;
	margin-bottom: 15px;
	background: #fff;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	padding: 30px;
}
.signup-form h2  {
	color: #333;
	font-weight: bold;
	margin-top: 0;
}
.signup-form hr  {
	margin: 0 -30px 20px;
}    
.signup-form .form-group {
	margin-bottom: 20px;
}
.signup-form input[type="checkbox"] {
	margin-top: 3px;
}
.signup-form .row div:first-child {
	padding-right: 10px;
}
.signup-form .row div:last-child {
	padding-left: 10px;
}
.signup-form .btn {        
	font-size: 16px;
	font-weight: bold;
	background: #3598dc;
	border: none;
	min-width: 140px;
}
.signup-form .btn:hover, .signup-form .btn:focus {
	background: #2389cd !important;
	outline: none;
}
.signup-form a {
	color: #fff;
	text-decoration: underline;
}
.signup-form a:hover {
	text-decoration: none;
}
.signup-form form a {
	color: #3598dc;
	text-decoration: none;
}	
.signup-form form a:hover {
	text-decoration: underline;
}
.signup-form .hint-text  {
	padding-bottom: 15px;
	text-align: center;
}
	
</style>



