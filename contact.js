document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const looking = document.querySelector('input[name="looking"]:checked').value;
  const quantity = document.getElementById('quantity').value;
  const date = document.getElementById('date').value;
  const zipcode = document.getElementById('zipcode').value;
  const name = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const address = document.getElementById('address').value;
  const telephone = document.getElementById('telephone').value;
  const fax = document.getElementById('fax').value;
  const email = document.getElementById('email').value;

  console.log("📝 Form Submitted!");
  console.log("Looking for:", looking);
  console.log("Quantity:", quantity);
  console.log("Date Needed:", date);
  console.log("Zipcode:", zipcode);
  console.log("Name:", name);
  console.log("Company Name:", company);
  console.log("Address:", address);
  console.log("Telephone:", telephone);
  console.log("Fax:", fax);
  console.log("Email:", email);

  alert("Thank you! Your details have been received.");
  this.reset();
});
