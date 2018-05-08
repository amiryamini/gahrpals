<template>
  <!--actual login template-->
  <section>
    <!--container will hold the login form stuff-->
    <div class="container mt-4">

      <form class="mx-auto col-xs-12 col-sm-10 col-md-5">
        <div class="login__icon">
          <h1 class="text-center">Garhpals</h1>
        </div>

        <div class="form-group mt-4">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group mt-4">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <!--TODO: link to My Profile page; log in the user-->
        <button type="submit" class="btn btn-primary mt-4">Log in</button>

        <!--TODO: link to Register page-->
        <h5 class="text-center mt-4">New member? <router-link to='/'>Register</router-link></h5>

      </form>
      <!--end div container-->
    </div>
  </section>
</template>



<!--scripts for stuff-->
<script>
export default {
    methods: {
        navigateTo(route) {
            router.push(route)
        },
    },
  name: 'Login'
}
</script>




<!-- Added "scoped" attribute to limit CSS to this component only --><!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section .container {
    background-color: #fff;
  }

  .login__icon {
    margin-top: 50px;
  }

</style>
