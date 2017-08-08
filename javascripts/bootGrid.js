{
  acme.bootGrid = (catData, typeData, productData, e) => {
    $('#bootstrap').html('');
    let eachProduct = productData.products;
    let eachType = typeData.types;
    let eachCat = catData.categories;
    let counter = 0;

    let catOption = $('#categorySelection').children("option:selected").attr("value");
    let catOptionId = $('#categorySelection').children("option:selected").attr("id");

    let typeOption = $('#typeSelection').children("option:selected").attr("value");
    let typeOptionId = $('#typeSelection').children("option:selected").attr("id");
    $('#bootstrap').append(
      `<div class='row border header'>
      <div class='col border'>Category</div>
      <div class='col border'>Type</div>
      <div class='col border'>Name</div>
      <div class='col border'>Description</div>
      </div>`)
    $(eachType).each((tindex, titem) => {
       if ($('#typeSelection').length) {
        $(eachProduct).each((pindex, pitem) => {
          let thisObj = pitem;
          let objKey = Object.keys(thisObj);
          let productName;
          for (var i = 0; i < objKey.length; i++) {
            productName = objKey[i]
          }
          let theLastKey = thisObj[productName];
          if (theLastKey["type"] === titem["id"] && Number(acme.findLastChar(typeOptionId)) === theLastKey["type"]) {
            $('#bootstrap').append(
              `<div class='row border'>
              <div class='col border'>${catOption}</div>
              <div class='col border'>${titem.name}</div>
              <div class='col border'>${theLastKey.name}</div>
              <div class='col border'>${theLastKey.description}</div>
              </div>`)
          }
        })
      } else {
        if (Number(acme.findLastChar(catOptionId)) === titem["category"]) {
          $(eachProduct).each((pindex, pitem) => {
            let thisObj = pitem;
            let objKey = Object.keys(thisObj);
            let productName;
            for (var i = 0; i < objKey.length; i++) {
              productName = objKey[i]
            }
            let theLastKey = thisObj[productName];
            if (titem["id"] === theLastKey["type"]) {
              $('#bootstrap').append(
                `<div class='row border'>
                <div class='col border'>${catOption}</div>
                <div class='col border'>${titem.name}</div>
                <div class='col border'>${theLastKey.name}</div>
                <div class='col border'>${theLastKey.description}</div>
                </div>`)
            }
          })
        }
      }
      counter+=1;
    })
  }

  acme.printProduct = (productData) => {
    $('#bootstrap').html('');
    $('#bootstrap').append(
      `<div class='row border header'>
      <div class='col border'>Category</div>
      <div class='col border'>Type</div>
      <div class='col border'>Name</div>
      <div class='col border'>Description</div>
      </div>`)
    let productOption = $('#productSelection').children("option:selected").html();
    let productOptionVal = $('#productSelection').children("option:selected").attr("value");
    let typeOption = $('#typeSelection').children("option:selected").html();
    let catOption = $('#categorySelection').children("option:selected").html();

    let eachProduct = productData.products;
    $(eachProduct).each((pindex, pitem) => {
      let thisObj = pitem;
      let objKey = Object.keys(thisObj);
      let productName;
      for (var i = 0; i < objKey.length; i++) {
        productName = objKey[i]
      }
      let theLastKey = thisObj[productName];
      if (Number(productOptionVal) === theLastKey["id"]) {
        $('#bootstrap').append(
          `<div class='row border'>
          <div class='col border'>${catOption}</div>
          <div class='col border'>${typeOption}</div>
          <div class='col border'>${theLastKey.name}</div>
          <div class='col border'>${theLastKey.description}</div>
          </div>`)
      }
    })
  }
}
