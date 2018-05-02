<template>
  <nav class="navbar navbar-toggleable-sm py-2 navbar-inverse bg-primary col-xs-12">
    <div class="container ">

      <!--Navbar logo-->
      <div class="nav__logo col-sm-offset-1 hidden-xs-down home">
        <!--TODO: link to My Profile page-->
        <a class="navbar-brand" href="#">Garhpals</a>
      </div>

      <!--Collapse icon-->
      <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--Navbar links-->
      <div class="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!--TODO: link tp My Profile page-->
            <a class="nav-link" href="#">My Profile</a>
          </li>

          <li class="nav-item">
            <!--TODO: link to Friends page-->
            <a class="nav-link" href="#">Friends</a>
          </li>

          <li class="nav-item">
            <!--TODO: link to Settings page-->
            <a class="nav-link" href="#">Settings</a>
          </li>

          <li class="nav-item">
            <!--TODO: link to Log Out page; log out the user-->
            <a class="nav-link" href="#">Log out</a>
          </li>
        </ul>
      </div>
      <!--end div container-->
    </div>
  </nav>

</template>




<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
