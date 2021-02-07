
<template>
	
	<div class="signup-form">
    <form >
		<h2>KAZI HUSTLE</h2>
		<p class="hint-text">Update Profile.</p>
        <div class="form-group">
			<input type="text" class="form-control" name="first_name" placeholder="First Name" v-model="currentapplicant.first_name" />	
        </div>
		<div class="form-group">
		<input type="text" class="form-control" name="last_name" placeholder="Last Name" v-model="currentapplicant.last_name"/>
		</div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" v-model="currentapplicant.email"/>
        </div>
		<div class="form-group">
            <input type="text" class="form-control" name="contact" placeholder="contact"  v-model="currentapplicant.contact">
        </div>    
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" @click="updateapplicant" >UpateProfile</button>
        </div>
    </form>
	<div class="text-center">Already have an account? <a href="#">Sign in</a></div>
</div>
</template>

<script>
import applicantDataService  from "../../Services/applicantDataService";
export default {

     name:'applicant-edit',
    data () {
    return {
      
      currentapplicant: {},
      message: ''
    }
  },
  
  methods: {
    getapplicant(id) {
      applicantDataService.get(id)
        .then(response => {
          this.currentapplicant = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateprofile() {
      var data = {
        id: this.currentapplicant.id,
        first_name: this.currentapplicant.first_name,
        last_name: this.currentapplicant.last_name,
        email: this.currentapplicant.email
      };

      applicantDataService.update(this.currentapplicant.id, data)
        .then(response => {
          
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateapplicant() {
      applicantDataService.update(this.currentapplicant.id, this.currentapplicant)
        .then(response => {
          console.log(response.data);
          this.message = ' updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>
<style scoped>
body {
    background: rgb(99, 39, 120)
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>>
