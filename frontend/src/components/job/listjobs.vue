<template>
<div>
<div class="list-group" v-for="jobs in jobs" :key="jobs.id">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
        
      <h5 class="mb-1">Ruby Developer required</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Ruby,javascript, SQL and AWS</p>
    <small>kcb bank needs a 3 years experience Developer with prior to microservices </small>
        
        
        <button class="btn btn-success btn-xs float-right" 
                        type="submit"> 
                     APPLY
                </button> 


  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Techinical Architect</h5>
      <small class="text-muted">7 days ago</small>
    </div>
    <p class="mb-1">Java,Golang,design patterns.</p>
    <small class="text-muted">Equity bank needs a senior software Architect.</small>
        
        
        <button class="btn btn-success btn-xs float-right" 
                        type="submit"> 
                     APPLY
                </button> 

  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Frontend Developer</h5>
      <small class="text-muted">1 days ago</small>
    </div>
    <p class="mb-1">Angular,React,Vue skills.</p>
    <small class="text-muted">Roja needs frontend developer skilled any javascript framework .</small>
        
        
        <button class="btn btn-success btn-xs float-right" 
                        type="submit"> 
                     APPLY
                </button> 


  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Frontend Developer</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1"> Abno softwares needs a frontend developer</p>
    <small class="text-muted">Angular,React,Vue skills</small>
       
       <button class="btn btn-success btn-xs float-right" 
                        type="submit"> 
                     APPLY
                </button> 


  </a>
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Backend Engineer </h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Nodejs,.Netcore , SQL, design patterns </p>
    <small class="text-muted">Roja needs a backend developer</small>
    
    
    <button class="btn btn-success btn-xs float-right" 
                        type="submit"> 
                     APPLY 
                </button> 

  </a>
</div>
</div>


</template>
<script>

export default {
    computed: {
      jobs () {
        return this.$store.getters.alljobs
      }
    },
    created () {
      
        this.$store.dispatch('alljobs')
      
    } 
}
</script>
<style scoped>

.btn-success {
    text-align: right;
    display: inline-block;
}
.btn-sml { height: 4vh; } 


</style>>