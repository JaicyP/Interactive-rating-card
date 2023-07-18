

let rating = null;

function ratings(rate){
    rating=rate;
}

function ratingSubmit(){
 if(rating!==null){
    window.location.href=`index2.html?rating=${rating}`;
 }else{
    alert("Select rating before submitting");
 }
}
function getRatingFromUrl(){
    const urlparams = new URLSearchParams(window.location.search);
    const rating = urlparams.get('rating');
    return rating;
}

function displaySelectedRating(){
    const ratingElement = document.getElementById("selected-rating");
    const selectedRate = getRatingFromUrl();
    if(selectedRate!==null){
        ratingElement.textContent = `You selected ${selectedRate} out of 5`;
    }else{
        ratingElement.textContent= 'No rating selected'
    }
}

displaySelectedRating();