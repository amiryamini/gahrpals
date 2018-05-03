<template>
  <!--container will hold the login form stuff-->
  <div class="container mt-4">

    <form class="mx-auto col-xs-12 col-sm-10 col-md-5">
      <div class="register__header">
        <h5 class="text-center">Register</h5>
      </div>



      <div class="register__photo mt-4">
        <div class="card mx-auto text-center" style="width: 18rem;">

          <!--TODO: upload image function-->
          <div class="form-group mx-auto">
            <label for="exampleFormControlFile1">Upload a photo</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1">
          </div>

        </div>
      </div>


      <!--TODO: this info's gotta be saved somewhere-->
      <div class="form-group mt-4">
        <label for="formGroupExampleInput">Name</label>
        <input type="email" class="form-control" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Enter email">
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
      <h5 class="text-center mt-4">Already a member? <a href="#">Log in</a></h5>

    </form>
    <!--end div container-->
  </div>
</template>



<!--scripts for stuff-->
<script>

</script>




<!-- Added "scoped" attribute to limit CSS to this component only --><!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
