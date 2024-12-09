document.addEventListener('DOMContentLoaded', function() {
    var profilePicture = document.getElementById('profilePicture');
    var mainImage = '/assets/images/zyzkov.jpg';
    var alternateImage = '/assets/images/julien-profile-image-linkedin-pfp-july-2022.jpeg';
    var isMainImage = true;
    
    setInterval(function() {
      if (isMainImage) {
        profilePicture.src = alternateImage;
      } else {
        profilePicture.src = mainImage;
      }
      isMainImage = !isMainImage;
    }, 1000);
});