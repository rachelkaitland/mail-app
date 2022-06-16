//fetch
//something to refresh

// document.querySelector('button').addEventListener('click', onClicker)
// document.addEventListener('DOMContentLoaded', onClicker)

// function onClicker(){

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             let li = document.createElement('li');
//             li.appendChild(document.createTextNode(data.message));
//             document.querySelector('#MAIL').appendChild(li);
//         })
//         .catch(err => {
//             console.log(`error ${err}`);
//         })

       
//     }

 // let showMessage = (dogs) =>{
        //     dogs.forEach(dog=>{
        //         localStorage.setItem('dog',JSON.stringify(dog))
        //     })
        // }

document.querySelector('button').addEventListener('click', getACuteDogPhoto)

async function getACuteDogPhoto(){
    const res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    const data = await res.json()
    console.log(data)
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(data.name));
    document.querySelector('#MAIL').appendChild(li);
    let p = document.createElement('li');
    p.appendChild(document.createTextNode(data.diet));
    document.querySelector('#MESSAGE').appendChild(p);
}
try{
    getACuteDogPhoto();
} catch(e){
    console.log('error')
}finally{
    console.log('success')
}
