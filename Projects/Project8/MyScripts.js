PrintButton1 = new Image

    PrintButton2 = new Image

  if (document.images)  {

    logo1 = new Image(),

    logo2 = new Image();

    logo1.src = "Images/Logo1.jpg";

    logo2.src = "Images/Logo2.jpg";

  }



    

    var imgArray = [

      'Image1Lg.jpg',

      'Image2Lg.jpg',

      'Image3Lg.jpg',

      'Image4Lg.jpg'

    ];

    var titleArray = [

      'Scuba Diving',

      'Skiing',

      'Camping',

      'Motorcycle Ride'

    ];

    var imgPath = "Images/Fullsize/";



    function swapImage(imgID) {

      var theImage = document.getElementById('theImage'),

          textDiv  = document.getElementById('bottomText');

      theImage.src       = imgPath + imgArray[imgID];

      textDiv.innerHTML  = titleArray[imgID];

    }



    function preloadImages() {

      

      for (var i = 0; i < imgArray.length; i++) {

        var tmp = new Image();

        tmp.src = imgPath + imgArray[i];

      }

     

    }