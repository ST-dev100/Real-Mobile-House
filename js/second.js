export const get = async function()
{

  
  const url = `../js/m.json`;
    const res =await fetch(url);
    const respon = await res.json();
    
    let inn = document.getElementById('inn')
    let buu = document.getElementById('buu')
    let f = document.getElementById("f");
    let first = document.getElementsByClassName('first')
    let r=document.getElementById('simon')
    
    // let htwo = r.children[1];
    
    r.children[1].addEventListener('click',()=>{
      alert('clicked')
    })

    // let fil = respon.filter(e=>e.name==='Nokia');

    // for (let i = 0; i < first.length; i++) {
    //     first[i].textContent = respon[i].name;
    
    const products = [];
    for(let i = 0; i < respon.length; i++)
    {
        let div = document.createElement('div');
        div.classList.add('col-sm-4');
        div.innerHTML = `<div class="card">
        <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          
          <p class="card-text">${respon[i].name}</p>
          
          <button class="btn btn-primary ggg" type="submit">To Buy click</button>
       
        </div>
      </div>`
        products.push(div);
        f.append(div);
        let g = document.querySelectorAll('.ggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}`
            })
    }


      buu.addEventListener('click',()=>{
        let fil = respon.filter(e=>e.name===inn.value);
        const products = [];
        f.innerHTML = "";
        if(fil!=""){
        for(let i = 0; i < fil.length; i++)
        {
            let div = document.createElement('div');
            div.classList.add('col-sm-4');
            div.innerHTML = `<div class="card">
            <img id="i" class="card-img-top" src=${fil[i].url} alt="Card image" >
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">${fil[i].name}</p>
              
              
                    <button class="btn btn-primary ggggggggg" type="submit">To Buy click</button>
              
              
            </div>
          </div>`
          
            products.push(div);
            f.append(div);
            let g = document.querySelectorAll('.ggggggggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}`
            })
        }
      }
      else{
        let div = document.createElement('div');
        div.innerHTML=`<h1>Sorry there is no such kind of product</h1>`
        f.append(div);
      }
     
      })

    
        
    

    // }
    // let se = await search();

    // respon.forEach(element => {
    //     console.log(element);    
    // });

    // const products = [];
    // for(let i = 0; i < respon.length; i++)
    // {
    //     let div = document.createElement('div');
    //     div.classList.add('col-sm-4');
    //     div.innerHTML = `<div class="card">
    //     <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">${respon[i].name}</p>
    //       <a href="#" class="btn btn-primary">To Sell</a>
    //     </div>
    //   </div>`
    //     products.push(div);
    //     f.append(div);
    // }

    // console.log(products);
    // console.log(fil);
    // console.log(se);
    

    // let output = '<h1>Users</h1>';
    
    // output += `${respon.title}`;
    // output += `<img  src="${respon.thumbnailUrl}"/>`;

    // respon.forEach(element => {
    //     output += `
    //     <ul>
    //     <li>
    //     ${element.title}
    //     </li>
    //     <li>
    //     ${element.thumbnailUrl}
    //     </li>
    //     </ul>
    //     `;
    // });
    // document.getElementById("first").innerHTML = output; 
    // return respon;
}


// async function search()
// {
//   let result;
//   let inn = document.getElementById('inn')
//   inn.addEventListener('keyup',async function(){
//    result = await grab(inn.value);
//   })
// }
// async function grab(val)
// {
//   const url = `../js/m.json`;
//   const res =await fetch(url);
//   const respon = await res.json();
//   let fil = respon.filter(e=>e.name===val);
//   return fil;
// }