<template>
  
<div id="app">
    <navbar/>

        <router-view/>
        <Footer/>
  </div>
</template>
<script>
import Footer from './pages/footer.vue'
import Navbar from './pages/navbar.vue'
//import Sidebar from './pages/sidebar.vue'



export default {
  name:'App',
  components:{
    
      
   
    Navbar,
    Footer   
  }

}
</script>




 