<template>
  <!--container will hold the login form stuff-->
  <div class="container mt-4">

    <form class="mx-auto col-xs-12 col-sm-10 col-md-5">
      <div class="register__header">
        <h1 class="text-center">Register</h1>
      </div>


      <!--TODO: this info's gotta be saved somewhere-->
      <div class="form-group mt-4">
        <label for="formGroupExampleInput">Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" aria-describedby="text" placeholder="Enter name">
      </div>
      <div class="form-group mt-4">
        <label for="formGroupExampleDate">Birthday</label>
        <input type="date" class="form-control" id="formGroupExampleDate" aria-describedby="date" placeholder="Enter birthday">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputPassword2">Confirm password</label>
        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
      </div>


      <!--TODO: link to My Profile page; log in the user-->
      <button type="submit" class="btn btn-primary mt-4">Register</button>


      <!--TODO: link to Register page-->
      <h5 class="text-center mt-4">Already a member? <router-link to='/login'>Log in</router-link></h5>

    </form>
    <!--end div container-->
  </div>
</template>



<!--scripts for stuff-->
<script>
export default {
    methods: {
        navigateTo(route) {
            router.push(route)
        },
    },
  name: 'Register'
}
</script>




<!-- Added "scoped" attribute to limit CSS to this component only --><!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
