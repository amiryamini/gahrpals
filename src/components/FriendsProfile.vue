<template>
  <!--actual Friend's Profile page-->
  <!--Contains the profile image, name, birthday, and status of the user logged in.-->
  <section>
    <div class="topInfo mx-auto pt-4 text-center">

      <div class="myProfile__icon ">
        <!--TODO: image goes here-->
        <img src="../assets/logo.png" alt="">
      </div>

      <div class="myProfile__name">
        <!--TODO: name goes here-->
        <h3 class="">NAME HERE</h3>
      </div>

      <div class="myProfile__birthday">
        <!--TODO: birth date goes here-->
        <h5 class="text-muted">January 1, 2017</h5>
      </div>

      <div class="myProfile__status">
        <div class="__statusText col-md-4 mx-auto mt-3">
          <!--TODO: status of the logged-in user goes here-->
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda atque culpa dolor ducimus, earum et illum minima molestiae nisi odit perspiciatis quae quia repellat saepe totam unde velit voluptate.</p>
        </div>

        <div class="__updateButton">
          <!--TODO: update status functionality goes here-->
          <button class="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
    <!--end div topInfo-->
  </section>



  <!--section for friends and posts-->
  <section>
    <div class="container">
      <div class="row">

        <!--friends card-->
        <div class="col-md friends mx-3 my-3">
          <div class="card px-3 py-3" >
            <div class="card-body">
              <!--TODO: link to Friends page goes here-->
              <a href="#"><h4 class="card-title">Friends
                <!--TODO: OPTIONAL. number of friends a person has goes here, in "span" tag.
                    If we're not gonna include number of friends, then no need to do anything here.-->
                <span>

              </span></h4></a>

              <!--Note: each friend module in the friend card consists of:
                  - icon
                  - name
                -->

              <!-- 3 friends per row? -->
              <div class="row">

                <!--a single friend... my only friend...-->
                <div class="col friend">
                  <div class="__icon">
                    <!--TODO: friend's image icon-->
                    <img src="../assets/logo.png" alt="" width="100%">
                  </div>

                  <div class="__name mx-auto">
                    <!--TODO: friend's name, and link to said friend-->
                    <a href="#">
                      <h5 class="text-center">John Smith</h5>
                    </a>
                  </div>
                </div>


                <!--a single friend... my only friend...-->
                <div class="col friend">
                  <div class="__icon">
                    <!--TODO: friend's image icon-->
                    <img src="../assets/logo.png" alt="" width="100%">
                  </div>

                  <div class="__name mx-auto">
                    <!--TODO: friend's name, and link to said friend-->
                    <a href="#">
                      <h5 class="text-center">John Smith</h5>
                    </a>
                  </div>
                </div>


                <!--a single friend... my only friend...-->
                <div class="col friend">
                  <div class="__icon">
                    <!--TODO: friend's image icon-->
                    <img src="../assets/logo.png" alt="" width="100%">
                  </div>

                  <div class="__name mx-auto">
                    <!--TODO: friend's name, and link to said friend-->
                    <a href="#">
                      <h5 class="text-center">John Smith</h5>
                    </a>
                  </div>
                </div>


                <!--a single friend... my only friend...-->
                <div class="col friend">
                  <div class="__icon">
                    <!--TODO: friend's image icon-->
                    <img src="../assets/logo.png" alt="" width="100%">
                  </div>

                  <div class="__name mx-auto">
                    <!--TODO: friend's name, and link to said friend-->
                    <a href="#">
                      <h5 class="text-center">John Smith</h5>
                    </a>
                  </div>
                </div>


                <!--a single friend... my only friend...-->
                <div class="col friend">
                  <div class="__icon">
                    <!--TODO: friend's image icon-->
                    <img src="../assets/logo.png" alt="" width="100%">
                  </div>

                  <div class="__name mx-auto">
                    <!--TODO: friend's name, and link to said friend-->
                    <a href="#">
                      <h5 class="text-center">John Smith</h5>
                    </a>
                  </div>
                </div>



              </div>
            </div>
          </div>

        </div>



        <!--posts card (for adding a new post, and viewing past posts-->
        <div class="col-md posts mx-3 my-3 ">

          <!--add a new post-->
          <div class="addPost">
            <div class="card px-3 pt-3 pb-2" >
              <div class="card-body">

                <div class="form-group">
                  <div class="float-left">
                    <label for="exampleFormControlTextarea1"><strong>Post something new</strong></label>
                  </div>
                  <div class="float-right mb-2">
                    <button class="btn btn-primary" type="submit">Post</button>
                  </div>

                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Say something..."></textarea>
                </div>
              </div>
              <!--end div card-->
            </div>
            <!--end div addPost-->
          </div>



          <!--look at your past posts-->
          <div class="pastPosts mt-5">

            <h3>Posts</h3>



            <!-- a single past post will have the following section:  -->
            <div class="card px-3 pt-3 pb-2 mt-4" >
              <div class="card-body">

                <!--TODO: OP's icon image here-->
                <div class="__icon float-left mr-3 " style="width: 50px; height: 50px; background-color: black;">
                  <img src="../assets/logo.png" alt="" width="50" height="50">
                </div>

                <div class="row">
                  <div class="__name col mb-2">
                    <!--TODO: name of post/logged-in user here-->
                    <h5 class="float-left">John Smith</h5>
                  </div>

                  <div class="__deleteButton mb-2 col">
                    <!--TODO: delete post functionality here-->
                    <button class="btn btn-outline-info float-right" type="button">delete</button>
                  </div>
                </div>

                <!--TODO: past post's text here-->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dignissimos distinctio dolorem exercitationem nihil omnis reiciendis rerum voluptatum! Aliquam aspernatur commodi cum eaque eius expedita magnam magni unde.</p>
              </div>
              <!--end div card; a single past post-->
            </div>



            <!-- a single past post will have the following section:  -->
            <div class="card px-3 pt-3 pb-2 mt-4" >
              <div class="card-body">

                <!--TODO: OP's icon image here-->
                <div class="__icon float-left mr-3 " style="width: 50px; height: 50px; background-color: black;">
                  <img src="../assets/logo.png" alt="" width="50" height="50">
                </div>

                <div class="row">
                  <div class="__name col mb-2">
                    <!--TODO: name of post/logged-in user here-->
                    <h5 class="float-left">John Smith</h5>
                  </div>

                  <div class="__deleteButton mb-2 col">
                    <!--TODO: delete post functionality here-->
                    <button class="btn btn-outline-info float-right" type="button">delete</button>
                  </div>
                </div>

                <!--TODO: past post's text here-->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dignissimos distinctio dolorem exercitationem nihil omnis reiciendis rerum voluptatum! Aliquam aspernatur commodi cum eaque eius expedita magnam magni unde.</p>
              </div>
              <!--end div card; a single past post-->
            </div>


            <!-- a single past post will have the following section:  -->
            <div class="card px-3 pt-3 pb-2 mt-4" >
              <div class="card-body">

                <!--TODO: OP's icon image here-->
                <div class="__icon float-left mr-3 " style="width: 50px; height: 50px; background-color: black;">
                  <img src="../assets/logo.png" alt="" width="50" height="50">
                </div>

                <div class="row">
                  <div class="__name col mb-2">
                    <!--TODO: name of post/logged-in user here-->
                    <h5 class="float-left">John Smith</h5>
                  </div>

                  <div class="__deleteButton mb-2 col">
                    <!--TODO: delete post functionality here-->
                    <button class="btn btn-outline-info float-right" type="button">delete</button>
                  </div>
                </div>

                <!--TODO: past post's text here-->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa dignissimos distinctio dolorem exercitationem nihil omnis reiciendis rerum voluptatum! Aliquam aspernatur commodi cum eaque eius expedita magnam magni unde.</p>
              </div>
              <!--end div card; a single past post-->
            </div>



            <!--end div pastPosts-->
          </div>





          <!--end div for posts (both adding poss and past posts)-->
        </div>
        <!--end div row for container-->
      </div>
      <!--end div container-->
    </div>
  </section>
</template>



<!--scripts for stuff-->
<script>

</script>




<!-- Added "scoped" attribute to limit CSS to this component only --><!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topInfo  {
    background-color: #c2dbff;
    padding-bottom: 20px;
  }
  .card {
    border: none;
    background-color: #c2dbff;
    border-radius: 10px;
  }

  .pastPosts .card {
    background-color: #fff;
  }

</style>
