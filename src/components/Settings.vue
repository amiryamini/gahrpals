<template>
  <div class="pageTitle text-center mx-auto mt-5">
    <h4>Settings</h4>
  </div>

  <!--section for profile image upload/reset-->
  <section>
    <div class="profileImage pt-4 col-xs mx-auto text-center">

      <div class="__icon">
        <!--TODO: image goes here-->
        <img src="../assets/logo.png" alt="">
      </div>

      <div class="btn-group-vertical">
        <!--TODO: upload photo functionality goes here-->
        <button class="btn btn-primary">Upload photo</button>

        <!--TODO: reset photo functionality goes here-->
        <button class="btn btn-outline-primary mt-1">Reset photo</button>
      </div>
      <!--end div profileImage-->
    </div>
  </section>



  <!--section for input fields-->
  <section class="container float-center">
    <!--TODO: update the user's info -->
    <div class="row mx-auto float-center my-5">
      <div class="col-xs col-md-4 col-md-offset-2 mx-5">

        <div class="form-group mt-4 ">
          <label for="formGroupExampleInput">Name</label>
          <input type="email" class="form-control" id="formGroupExampleInput" aria-describedby="emailHelp" placeholder="Enter email">
        </div>

        <div class="form-group mt-4 ">
          <label for="formGroupExampleDate">Birthday</label>
          <input type="date" class="form-control" id="formGroupExampleDate" aria-describedby="date" placeholder="Enter birthday">
        </div>

        <div class="form-group mt-4 ">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
      </div>



      <div class="col-xs col-md-4 float-left mx-5 ">

        <div class="form-group mt-4 ">
          <label for="exampleInputPassword">New password</label>
          <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password">
        </div>

        <div class="form-group mt-4 ">
          <label for="exampleInputPassword1">Current password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <div class="form-group mt-4 ">
          <label for="exampleInputPassword2">Confirm password</label>
          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
        </div>

      </div>
    </div>
    <!--end section for updating input fields-->
  </section>




  <!--section for checkboxes; items that will be visible to other users-->
  <!--TODO: checkbox functionality for profile components' visibility-->
  <section>
    <div class="container mx-auto">

      <h5 class="ml-5">Show these on my profile:</h5>

      <div class="row mx-auto">
        <div class="col-sm mt-3 ml-5">

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text mr-3">

                <!--TODO: checkbox functionality-->
                <input type="checkbox" aria-label="Checkbox for following text input">

              </div>
            </div>
            <p>Date of birth</p>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text mr-3">

                <!--TODO: checkbox functionality-->
                <input type="checkbox" aria-label="Checkbox for following text input">

              </div>
            </div>
            <p>Status</p>
          </div>

        </div>



        <div class="col-sm mt-3 ml-5">

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text mr-3">

                <!--TODO: checkbox functionality-->
                <input type="checkbox" aria-label="Checkbox for following text input">

              </div>
            </div>
            <p>Friends</p>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text mr-3">

                <!--TODO: checkbox functionality-->
                <input type="checkbox" aria-label="Checkbox for following text input">

              </div>
            </div>
            <p>Posts</p>
          </div>

          <!--end div for col-->
        </div>
        <!--end div for row-->
      </div>
      <!--end div for container for all checkbox stuff-->
    </div>
    <!--end section for checkboxes-->
  </section>



  <!--TODO: optional; save updated settings when you click the Save settings button-->
  <div class="saveButton mx-auto text-center my-5 ">
    <button type="button" class="btn btn-primary btn-lg">Save settings</button>
  </div>
  
</template>



<!--scripts for stuff-->
<script>

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
