console.log('%c HI', 'color: firebrick')

// Filter according to letter
function changeBreed(){
  let breedDropdown = document.getElementById('breed-dropdown');
  
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp=>resp.json())
  .then(
    (res)=>{
      let dogBreeds = document.querySelector('#dog-breeds');
      dogBreeds.innerHTML='';
      let dogBreedArr = Object.keys(res.message);
      console.log(dogBreedArr)
      
      const filtered = dogBreedArr.filter(breedValue=>breedValue.charAt(0) === breedDropdown.value);
      filtered.forEach(breed=>{
        let breedList = document.createElement('li');
        breedList.textContent = breed;
        
        dogBreeds.append(breedList);
         // click to change color
         breedList.addEventListener('click',()=>{
          breedList.style.color = 'red';
        })
      })
  })
}

// function filterBreed(breedValue){
//   return 
//   // console.log()
// }

function getImg(){
  
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp=>resp.json())
  .then(
    (res)=>{
      let dogImage = document.querySelector('#dog-image-container');
      res.message.forEach((data) => {
      // let dogImage = document.querySelector('#dog-image-container');
      imgEl = document.createElement('img');
      imgEl.src = data;
      dogImage.appendChild(imgEl);
      // dogImage. = `<img src="${imgEl}">`
    })
  })
}

function getBreed(){
  
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp=>resp.json())
  .then(
    (res)=>{
      let dogBreeds = document.querySelector('#dog-breeds');
      // console.log(res.message)
      for (const data in res.message) {
        // console.log(data.filter(data.charAt(0)=== 'a'))
        let breedList = document.createElement('li');
        breedList.textContent = data;
        dogBreeds.appendChild(breedList);

        // click to change color
        breedList.addEventListener('click',()=>{
          breedList.style.color = 'red';
        })


      }
  })
}
getBreed()
getImg()