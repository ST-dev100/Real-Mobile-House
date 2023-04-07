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
    r.children[1].children[1].children[1].style.cursor = 'pointer';
    r.children[1].children[1].children[0].style.cursor = 'pointer';
    r.children[1].children[1].children[1].addEventListener('click',async function(){
      r.children[1].children[1].children[1].classList.add("clicked");
      r.children[1].children[1].children[0].classList.remove("clicked");
      const ur = `../js/acc.json`;
    const re =await fetch(ur);
    const respo = await re.json();
    const productss = [];
    f.innerHTML = '';

    if(respo.length <= 3)
{

    for(let i = 0; i < respo.length; i++)
    {

        let divv = document.createElement('div');
        divv.classList.add('col-sm-4');
        divv.innerHTML = `<div class="card">
        <img id="i" class="card-img-top" src=${respo[i].url} alt="Card image" >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          
          <p class="card-text">${respo[i].name}</p>
          
          <button class="btn btn-primary ggg" type="submit">To Buy click</button>
       
        </div>
      </div>`
        productss.push(divv);

        f.append(divv);
        let g = document.querySelectorAll('.ggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respo[i].name}&model=${respo[i].model}`
            })
    }}
    else{
      let bu =  document.createElement('button')
      let bu2 =  document.createElement('button')
       bu2.textContent = "Hide"
      // let divv = document.createElement('div');
      bu.textContent = "Show more"
      // divv.append(bu)

     
      
      
      for(let i = 0; i < 4; i++)
      {
  
          let divv = document.createElement('div');
          divv.classList.add('col-sm-4');
          divv.innerHTML = `<div class="card">
          <img id="i" class="card-img-top" src=${respo[i].url} alt="Card image" >
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            
            <p class="card-text">${respo[i].name}</p>
            
            <button class="btn btn-primary ggg" type="submit">To Buy click</button>
         
          </div>
        </div>`
          productss.push(divv);
  
          f.append(divv);
          let g = document.querySelectorAll('.ggg')
              g[i].addEventListener('click',()=>{
                window.location.href = `pages/sale.html?name=${respo[i].name}&model=${respo[i].model}`
              })
      }
      f.append(bu)
      f.append(bu2)
      bu2.classList.add('nodisplay')
      bu.addEventListener('click',function(){
        let divv = document.createElement('div');
          // divv.innerHTML = "";      
          // f.innerHTML = "";  
          bu.classList.add('nodisplay');
          bu2.classList.remove('nodisplay')
        for (let i = 4; i < respo.length; i++) {
          

          let divv = document.createElement('div');
          divv.classList.add('col-sm-4');
          divv.classList.add('isis');
          divv.innerHTML = `<div class="card">
          <img id="i" class="card-img-top" src=${respo[i].url} alt="Card image" >
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            
            <p class="card-text">${respo[i].name}</p>
            
            <button class="btn btn-primary ggg" type="submit">To Buy click</button>
         
          </div>
        </div>`
          productss.push(divv);
  
          f.append(divv);
          let g = document.querySelectorAll('.ggg')
              g[i].addEventListener('click',()=>{
                window.location.href = `pages/sale.html?name=${respo[i].name}&model=${respo[i].model}`
              })
                 }

      })

      bu2.addEventListener('click',function(){
        bu2.classList.add('nodisplay');
        bu.classList.remove('nodisplay')
        let is = document.getElementsByClassName('isis')
        for (let i = 0; i < is.length; i++)
        {

          is[i].classList.add('nodisplay')
        }
      })


     }
      // f.style.display = 'none';
    })


    r.children[1].children[1].children[0].addEventListener('click',async function(){
      r.children[1].children[1].children[0].classList.add("clicked");
      r.children[1].children[1].children[1].classList.remove("clicked");
      const products = [];
      f.innerHTML = '';
      if(respon.length <= 3)
      {
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
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
    }}

    else{
      let bu =  document.createElement('button')
      let bu2 =  document.createElement('button')
       bu2.textContent = "Hide"
      // let divv = document.createElement('div');
      bu.textContent = "Show more"
      // divv.append(bu)

      for(let i = 0; i < 4; i++)
      {
  
          let divv = document.createElement('div');
          divv.classList.add('col-sm-4');
          divv.innerHTML = `<div class="card">
          <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            
            <p class="card-text">${respon[i].name}</p>
            
            <button class="btn btn-primary ggg" type="submit">To Buy click</button>
         
          </div>
        </div>`
          // productss.push(divv);
  
          f.append(divv);
          let g = document.querySelectorAll('.ggg')
              g[i].addEventListener('click',()=>{
                window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
              })
      }

     f.append(bu)
     f.append(bu2)
      bu2.classList.add('nodisplay')
      bu.addEventListener('click',function(){
        // alert("hi")
        bu.classList.add('nodisplay');
          bu2.classList.remove('nodisplay')
        for (let i = 4; i < respon.length; i++) {
          

          let divv = document.createElement('div');
          divv.classList.add('col-sm-4');
          divv.classList.add('isis');
          divv.innerHTML = `<div class="card">
          <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            
            <p class="card-text">${respon[i].name}</p>
            
            <button class="btn btn-primary ggg" type="submit">To Buy click</button>
         
          </div>
        </div>`
          // productss.push(divv);
  
          f.append(divv);
          let g = document.querySelectorAll('.ggg')
              g[i].addEventListener('click',()=>{
                window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
              })
                 }

      })
      bu2.addEventListener('click',function(){
        bu2.classList.add('nodisplay');
        bu.classList.remove('nodisplay')
        let is = document.getElementsByClassName('isis')
        for (let i = 0; i < is.length; i++)
        {

          is[i].classList.add('nodisplay')
        }
      })

     }
  


    })


    // let fil = respon.filter(e=>e.name==='Nokia');

    // for (let i = 0; i < first.length; i++) {
    //     first[i].textContent = respon[i].name;
    r.children[1].children[1].children[0].classList.add("clicked");
    const products = [];
    if(respon.length <= 3)
    {
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
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
    }
  }
  else{
    let bu =  document.createElement('button')
    let bu2 =  document.createElement('button')
     bu2.textContent = "Hide"
    // let divv = document.createElement('div');
    bu.textContent = "Show more"
    // divv.append(bu)

    for(let i = 0; i < 4; i++)
    {

        let divv = document.createElement('div');
        divv.classList.add('col-sm-4');
        divv.innerHTML = `<div class="card">
        <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          
          <p class="card-text">${respon[i].name}</p>
          
          <button class="btn btn-primary ggg" type="submit">To Buy click</button>
       
        </div>
      </div>`
        // productss.push(divv);

        f.append(divv);
        let g = document.querySelectorAll('.ggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
    }

   f.append(bu)
   f.append(bu2)
    bu2.classList.add('nodisplay')
    bu.addEventListener('click',function(){
      // alert("hi")
      bu.classList.add('nodisplay');
        bu2.classList.remove('nodisplay')
      for (let i = 4; i < respon.length; i++) {
        

        let divv = document.createElement('div');
        divv.classList.add('col-sm-4');
        divv.classList.add('isis');
        divv.innerHTML = `<div class="card">
        <img id="i" class="card-img-top" src=${respon[i].url} alt="Card image" >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          
          <p class="card-text">${respon[i].name}</p>
          
          <button class="btn btn-primary ggg" type="submit">To Buy click</button>
       
        </div>
      </div>`
        // productss.push(divv);

        f.append(divv);
        let g = document.querySelectorAll('.ggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
               }

    })
    bu2.addEventListener('click',function(){
      bu2.classList.add('nodisplay');
      bu.classList.remove('nodisplay')
      let is = document.getElementsByClassName('isis')
      for (let i = 0; i < is.length; i++)
      {

        is[i].classList.add('nodisplay')
      }
    })

   }


      buu.addEventListener('click',async()=>{

        const ur = `../js/acc.json`;
        const re =await fetch(ur);
        const respo = await re.json();
        // let fil = ''
        let fill = respon.filter(e=>e.name===inn.value);
        let fil = respo.filter(e=>e.name===inn.value);
        

        const products = [];
        f.innerHTML = "";
          if(fil!=""){
          // r.children[1].children[1].children[1].style.color="red";
          r.children[1].children[1].children[1].classList.add("clicked");
          r.children[1].children[1].children[0].classList.remove("clicked");
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
            // f.innerHTML = div;
            f.append(div);
            let g = document.querySelectorAll('.ggggggggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
        }
      }
       else if(fill!=""){

        r.children[1].children[1].children[0].classList.add("clicked");
        r.children[1].children[1].children[1].classList.remove("clicked");
          // r.children[1].children[1].children[0].style.color="red";
        for(let i = 0; i < fill.length; i++)
        {
            let div = document.createElement('div');
            div.classList.add('col-sm-4');
            div.innerHTML = `<div class="card">
            <img id="i" class="card-img-top" src=${fill[i].url} alt="Card image" >
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">${fill[i].name}</p>
              
              
                    <button class="btn btn-primary ggggggggg" type="submit">To Buy click</button>
              
              
            </div>
          </div>`
          
            products.push(div);
            // f.innerHTML = div;
            f.append(div);
            let g = document.querySelectorAll('.ggggggggg')
            g[i].addEventListener('click',()=>{
              window.location.href = `pages/sale.html?name=${respon[i].name}&model=${respon[i].model}`
            })
        }
      

      }
      else{
        let div = document.createElement('div');
        div.innerHTML=`<h1>Sorry there is no such kind of product</h1>`
        f.append(div);
        // f.innerHTML = div;
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