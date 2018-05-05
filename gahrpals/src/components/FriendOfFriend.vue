<template>
  <!--Friends section of the page, if you are looking at someone's list of friends and not your own friendslist-->
  <section class="">
    <div class="card mx-4 my-4 px-4 py-4">
      <div class="card-body ">
        <h5 class="card-title">Friends</h5>

        <!--have some friends! friends listed below consist of their
            icon
            name
            -->




        <!--A single friend... my only friend... -->
        <div class="friend col-md-2 col-sm-3 col-xs-4 mx-2">
          <div class="__icon text-center">
            <!--TODO: friend's icon image here-->
            <img src="../assets/logo.png" alt="" width="50">
          </div>

          <div class="__name text-center">
            <!--TODO: friend's name here, and link to their profile-->
            <a href="#">
              <h5>qwerty asdfafr</h5>
            </a>
          </div>

          <!--end div friend-->
        </div>




        <!--A single friend... my only friend... -->
        <div class="friend col-md-2 col-sm-3 col-xs-4 mx-2">
          <div class="__icon text-center">
            <!--TODO: friend's icon image here-->
            <img src="../assets/logo.png" alt="" width="50">
          </div>

          <div class="__name text-center">
            <!--TODO: friend's name here, and link to their profile-->
            <a href="#">
              <h5>qwerty asdfafr</h5>
            </a>
          </div>

          <!--end div friend-->
        </div>











      </div>
    </div>
  </section>
</template>


<script>

</script>


<style scoped>
  .card {
    border-radius: 10px;
    box-shadow: 2px 2px 3px #888888;
  }
  .friend {
    background-color: #fff;
    display: inline-block;
  }
</style>
