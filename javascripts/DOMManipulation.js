{
  var acme = {};

  //Create Categories*************************
  //******************************************

  acme.handleCategory = (data1) => {
    $('#outPut').append("<select id=categorySelection><option disabled selected>Choose Category</option></select>");
    let eachCat = data1.categories;
    $(eachCat).each((index, item) => {
      $('#categorySelection').append(`<option id=${item.id} value=${item.name}>${item.name}</option>`)
    })
    $('#categorySelection').change(function(){
      acme.removeSelection($('#productSelection'));
      acme.removeSelection($('#typeSelection'));
      acme.bootGrid(catData, typeData, productData)
      acme.handleTypes(typeData);
    })
  }

 // Create Types *******************************
 // ********************************************

  acme.handleTypes = (typeData) => {
    let eachType = typeData.types;
    let thisOptionId = $('#categorySelection').children("option:selected").attr("id");
    $('#outPut').append("<select id=typeSelection><option disabled selected>Choose Type</option></select>");

    $(eachType).each((index, item) => {
      if (Number(acme.findLastChar(thisOptionId)) === item["category"]) {
        $('#typeSelection').append(`<option id=${item.name}${item.id} value=${item.name}>${item.name}</option>`)
      }
    })
    $('#typeSelection').change(function(){
      acme.removeSelection($('#productSelection'));
      acme.bootGrid(catData, typeData, productData);
      acme.handleProducts(productData);
    })
  }

  //Create Products ************************************
  //****************************************************


  acme.handleProducts = (productData) => {
    let newObjKeys;
    let eachProduct = productData.products;
    let thisOptionId = $('#typeSelection').children("option:selected").attr("id");
    $('#outPut').append("<select id=productSelection><option disabled selected>Choose Type</option></select>");

    $(eachProduct).each((index, item) => {
      let thisObj = item;
      let objKey = Object.keys(thisObj);
      let productName;
      for (var i = 0; i < objKey.length; i++) {
        productName = objKey[i]
      }
      let theLastKey = thisObj[productName];
      if (Number(acme.findLastChar(thisOptionId)) === theLastKey["type"]) {
        $('#productSelection').append(`<option value=${theLastKey.id}>${theLastKey.name}</option>`)
      }
    })
    $('#productSelection').change(function(){
      acme.printProduct(productData);
    })
  }

  acme.removeSelection = (selection) => {
    if (selection.length) {
      selection.remove();
    }
  }

  acme.findLastChar = (elementID) => {
    let lastCharIndex = elementID.split("").length - 1;
    let lastChar = elementID[lastCharIndex];
    return lastChar
  }

}
