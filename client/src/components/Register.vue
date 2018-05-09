<template>
  <!--container will hold the login form stuff-->
  <div class="container mt-4">

    <form class="mx-auto col-xs-12 col-sm-10 col-md-5">
      <div class="register__header">
        <h5 class="text-center">Register</h5>
      </div>

      <!--TODO: this info's gotta be saved somewhere-->
      <div class="form-group mt-4">
        <label for="formGroupExampleFirstName">First Name</label>
        <input type="text" v-model="register.first_name" class="form-control" id="formGroupExampleFirstName" aria-describedby="text" placeholder="First Name" required="">
      </div>
      <div class="form-group mt-4">
        <label for="formGroupExampleLastName">Last Name</label>
        <input type="text" v-model="register.last_name" class="form-control" id="formGroupExampleLastName" aria-describedby="text" placeholder="Last Name" required="">
      </div>
      <div class="form-group mt-4">
        <label for="formGroupExampleDate">Birthday</label>
        <input type="date" class="form-control" v-model="register.birthday" id="formGroupExampleDate" aria-describedby="date" placeholder="Birthday" required="">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="register.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required="">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" v-model="register.password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="">
      </div>
      <div class="form-group mt-4">
        <label for="exampleInputPassword2">Confirm password</label>
        <input type="password" v-model="register.password_duplicate" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" required="">
      </div>
      <!--TODO: link to My Profile page; log in the user-->
      <button type="submit" v-on:click="post" class="btn btn-primary mt-4">Register!</button>


      <!--TODO: link to Register page-->
      <h5 class="text-center mt-4">Already a member? <router-link to='/login'>Log in</router-link></h5>

    </form>
    <!--end div container-->
  </div>
</template>



<!--scripts for stuff-->
<script>

    export default {
        data(){
            return{
                register:{
                    first_name:"",
                    last_name:"",
                    birthday:"",
                    email:"",
                    password:"",
                    password_duplication:""
                },
            }
        },
        methods:{
            post: function(){
              this.$http.post('http://localhost:3000/users/register', this.register).then(function(data){
                  console.log(data);
                  this.$router.push({ name: 'Settings', params: { userId: 123 }})
                  this.submitted = true;
              })
            }
        }

    }
</script>




<!-- Added "scoped" attribute to limit CSS to this component only --><!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
