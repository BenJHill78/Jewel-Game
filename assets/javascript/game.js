
  $( document ).ready(function() {

  var crystal1={
    name: "crystalb",
    points: "25",
    image: $("<img>"),
  };
    var crystal2={
    name: "crystalg",
    points: "50",
    image: $("<img>"),   
  };
  var crystal3={
    name: "crystalr",
    points: "75",
    image: $("<img>"),
  };
    var crystal4={
    name: "crystalp",
    points: "100",
    image: $("<img>"),
  };  

//Adding class to child of Crystal1
    crystal1.image.addClass("crystalImg1");
    crystal2.image.addClass("crystalImg2");
    crystal3.image.addClass("crystalImg3");
    crystal4.image.addClass("crystalImg4");

    // Each imageCrystal will be given a src link to the crystal image
    crystal1.image.attr("src", "assets/images/lscrystalb.jpg");
    crystal2.image.attr("src", "assets/images/lscrystalg.jpg");
    crystal3.image.attr("src", "assets/images/lscrystalr.jpg");
    crystal4.image.attr("src", "assets/images/lscrystalp.jpg");

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(crystal1.image,crystal2.image,crystal3.image,crystal4.image,);
  
 
  });

