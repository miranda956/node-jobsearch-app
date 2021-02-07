<template>
  <div id='page-not-found'>
    <h1> vue page not found </h1>
    <router-link :to="'/jobs'" class="btn btn-primary">
      back to Homepage
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'page-not-found',
  data: () => ({
  })
}
</script>

