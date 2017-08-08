// This function does one thing, and returns a promise
var firstAJAX = function() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "jsons/categories.json"
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var secondAJAX = function(result_of_firstXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "jsons/types.json",
      data: result_of_firstXHR
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

// This function does one thing, and returns a promise
var thirdAJAX = function(result_of_secondXHR) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "jsons/products.json",
      data: result_of_secondXHR
    }).done(function(data) {
      resolve(data);
    }).fail(function(xhr, status, error) {
      reject(error);
    });
  })
};

var catData;
var typeData;
var productData;

firstAJAX()
  .then(function(data1) {
    catData = data1;
    acme.handleCategory(data1);
    return secondAJAX(data1);
  })
  .then(function(data2) {
    typeData = data2;
    return thirdAJAX(data2);
  }).then(function(data3){
    productData = data3;
    // acme.bootGrid(catData, typeData, productData)
  });
