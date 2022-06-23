console.log('%c HI', 'color: firebrick')


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
      console.log(res.message)
      for (const data in res.message) {
        console.log(data)
        let breedList = document.createElement('li');
        breedList.textContent = data;
        dogBreeds.appendChild(breedList);
        breedList.addEventListener('click',()=>{
          breedList.style.color = 'red';
        })
      }
  })
}
getBreed()
getImg()