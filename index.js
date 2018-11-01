// function handleThumbnailClicks() {
//   $('.thumbnail').on('click', function(event) {
//      const imgSrc = $(this).find('img').attr('src');  
//      const imgAlt = $(this).find('img').attr('alt');
    
//     $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    
//     // Accomplishes the same as line 6 with only one use off .attr()
//     // by passing it an object with multiple properties.
//     // See: http://api.jquery.com/attr/#attr-attributes
//     // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//   });
// }

// $(handleThumbnailClicks);

//$('')

function addItems(entry){ 
  const htmlelements = `
            <li> 
            <span class="shopping-item shopping-item__checked">${entry}</span> 
            <div class="shopping-item-controls"> 
            <button class="shopping-item-toggle"> 
            <span class="button-label">check</span> 
            </button> 
            <button class="shopping-item-delete"> 
            <span class="button-label">delete</span> 
            </button> 
            </div> 
            </li> `; $('.shopping-list').append(htmlelements) 
}


// $(function() {
//   $('#js-shopping-list-form button').submit( event => {

//   }
// )});





function main() {

  $('#js-shopping-list-form button').click(event => {
    console.log($('#js-shopping-list-form input').val());
    addItems($('#js-shopping-list-form input').val());
    
  });
  $('#js-shopping-list-form input Text').val('hi');
  console.log('hello');
  console.log( $('#js-shopping-list-form input').val());
  console.log( $('#js-shopping-list-form').find('input')); 

  $('.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {  
    const target = $(event.currentTarget).closest('li').find('span.shopping-item'); 
    target.toggleClass('shopping-item__checked'); }); 

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {  
      const mark = $(event.currentTarget).closest('li'); 
      mark.remove('li'); });        


  }

main();