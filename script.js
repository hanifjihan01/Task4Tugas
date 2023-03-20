let namePerson = document.getElementById("nm");
let jobPerson = document.getElementById("jb");
let hobbyPerson = document.getElementById("hb");
let nationalPerson = document.getElementById("nt");
let element = document.getElementById("myform");
let submitButton = document.getElementById("btn-add");
let card = document.getElementById("card");
let data = [];

const myform = document.getElementById('myform');
const cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('click', (event) => {
  if (event.target.id === 'btn-remove') {
    const cardElement = event.target.closest('.card');

    cardElement.remove();
  }
});


myform.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nm').value;
  const job = document.getElementById('jb').value;
  const hobby = document.getElementById('hb').value;
  const nationality = document.getElementById('nt').value;

  const card = `
    <div class="card">
      <div class="card-head">
        <img src="images.png" alt="">
      </div>
      <div class="body">
        <p>Nama : ${name}</p>
        <p>Pekerjaan : ${job}</p>
        <p>Hobi : ${hobby}</p>
        <p>Negara : ${nationality}</p>
        <button id="btn-remove">Delete</button>
      </div>
    </div>
  `;

  cardContainer.innerHTML += card;
  myform.reset();
});



const btnRemove = document.getElementById('btn-remove');


btnRemove.addEventListener('click', function () {
  
    const cardToRemove = btnRemove.parentNode.parentNode;


    cardToRemove.remove();
});

const search = document.getElementById('search');

search.addEventListener('keyup', function (e) {
    const cards = cardContainer.querySelectorAll('.card');
    const searchText = e.target.value.toLowerCase();

    cards.forEach(function (card) {
        const cardText = card.innerText.toLowerCase();

        if (cardText.indexOf(searchText) !== -1) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


  

 
   

