function main() {
   
    $('.thumbnail').on('click', function(event) {
        const imgSrc = $(this).find('img').attr('src');  
        const imgAlt = $(this).find('img').attr('alt');
       
       $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    });
}


main();