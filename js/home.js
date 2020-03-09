

// eslint-disable-next-line no-undef
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200,
});

new WOW().init();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
