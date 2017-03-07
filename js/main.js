// src: https://gist.github.com/chrislkeller/3230081
// src: http://berzniz.com/post/24743062344/handling-handlebarsjs-like-a-pro

// check to see if scripts are loading
if(window.$ && window.Handlebars){
  console.log("scripts loaded");
}

function launch(){
  var template = document.getElementById("template").innerHTML,
      transform = Handlebars.compile(template),
      url = "js/data.json";

  $.getJSON(url, function(data, status){
    var output = transform(data),
        display = document.getElementById("ageData");
        display.innerHTML += output;
        //console.log(data);
  });
};


function carsData(){
  var template = document.getElementById("cars-template").innerHTML,
  transform = Handlebars.compile(template);

  $.ajax({
    type : "GET",
    url : "js/cars.json",
    async : true,
    dataType : "json",
    success : function(data){
      var output = transform(data),
          display = document.getElementById("carData");
          display.innerHTML += output;
          //console.log(data);
    }
  });
};

function run(){
  launch();
  carsData();
}
run();
