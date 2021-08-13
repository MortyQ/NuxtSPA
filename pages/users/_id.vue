<template>
  <div>
    <h1> This page is a User:{{ $route.params.id }}</h1>
  </div>
</template>

<script>
    export default {
      validate({params}){

        return /^\d+$/.test(params.id)
      }
    }
</script>
