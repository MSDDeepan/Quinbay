document.addEventListener("DOMContentLoaded", function (){
let pro=[
    { img:"p1.png",name: "oppoa5s", ram: 64, memory: 20000,  rating: 4 , price:20000}, 
    { img:"p8.jpg",name: "redmi note 5 pro", ram: 8, memory: 25000, rating: 5, price:25000 }, 
    { img:"p7.jpg",name: "realme 6", ram: 16, memory: 35000, rating: 3 ,price:35000},
    { img:"p2.jpg",name: "vivo v11 pro", ram: 4, memory: 45000, rating: 2 ,price:45000}, 
    { img:"p6.jpg",name: "poco 7", ram: 8, memory: 19000, rating: 3 ,price:55000},
    { img:"p9.jpg",name: "samsung a13", ram: 4, memory: 24000, rating: 2 ,price:65000}, 
    { img:"p3.jpg",name: "oneplus 5 pro", ram: 8, memory: 21000, rating: 5,price:75000 }
]

var s=0;
function displayTable(pro) {  
var t=document.getElementById("tabl")
var tt=pro;

for(var i=0;i<pro.length;i++)
{
    
    var x=pro[i];
    var r=document.createElement("tr");
    var keys = ['img','name','ram','memory','rating','price'] ;
                for(var j=0;j<keys.length;j++)
                {
                    if(j==0)
                    {
                        var im_c = document.createElement("td");
                        im_c.style.border = 'solid 1px black';
                        im_c.style["padding-top"] = "20px";

                        var im = document.createElement("IMG");
                        im.setAttribute("src",x[keys[j]]);
                        im.setAttribute("width","50px");
                        im.setAttribute("height","90px");
                        im_c.appendChild(im);
                        r.appendChild(im_c);
                    }else{
                        var im_c = document.createElement("td");
                        im_c.style.border = 'solid 1px black';
                        im_c.style["padding-top"] = "20px";

                        im_c.innerHTML= x[keys[j]];
                        r.appendChild(im_c);


                    }
                    
            }
        var b = document.createElement('td');
        b.style.border = 'solid 1px black';
        b.style["padding-top"] = "20px";

        var btn = document.createElement("BUTTON");
        btn.id = "btnid"+i;
        x.buttonid=btn.id;        
        var d=x.buttonid;

        function butto(h){ 
        btn.addEventListener('click',function()
        {   
            
            alert("jhk");
            var sc = document.getElementById("c");
            let xx=document.createElement("span");
            xx.style.border=" 2px solid black";
            xx.style.padding="5px";
           
            let sss=document.createElement("span");
            sss.style.border=" 2px solid black";
            sss.style.padding="5px";
            let sx=document.createElement("button");
            sx.textContent="+";
            let sxx=document.createElement("button");
            sxx.textContent="-";
            s=s+1;
            xx.innerHTML=h.name;
            sss.innerHTML=s;
            sc.appendChild(xx);
            sc.appendChild(sss);
            sc.appendChild(sx);
            sc.appendChild(sxx);
            
        
        })
        }
        butto(x);
        var text = document.createTextNode("Add to cart");
        btn.appendChild(text);
        b.appendChild(btn);

        r.appendChild(b);
            
        t.appendChild(r);
       

       


} 
// window.alert(pro[1][keys[7]]);
}

displayTable(pro);
// sh_cart(pro,keys)

document.getElementById("ck").addEventListener('click',function(){
      window.alert(s);
});

}
)







// function Validation()
//  {
//     // event.preventDefault();
//     var mobile = {};
//     var a = document.getElementById("name").value;
//     var b = document.getElementById("model").value;
//     var c = document.getElementById("ram").value;
//     var d = document.getElementById("memory").value;
//     var e = document.getElementById("price").value;

//     if (a === "" | b === "" | c === "" | d === "" | e === "") {
//         window.alert("This Field should Be Filled");
//         document.getElementById("name").value.focus();
//     }

//     else {
//         window.alert("Successfully Mobile is Added");
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     mobile.name = a;
//     mobile.model = b;
//     mobile.ram = c;
//     mobile.memory = d;
//     mobile.price = e;
//     console.log(mobile);


// }
// let form = document.querySelector("form")
// let tab = document.querySelector("tabl")
// function adding(event) {
//     event.preventDefault();

    

//     let im = document.getElementById("img").value;
//     let nm = document.getElementById("name").value;
//     let ra = document.getElementById("ram").value;
    
//     let mm = document.getElementById("memory").value;
//     let r = document.getElementById("ra").value;
//     let pri = document.getElementById("price").value;
//     alert(nm+ra+mm+r+pri);
//     tab.innerHTML += `
//     <tr>
//         <td><img src="${im}"></td>
//         <td>${nm}</td>
//        <td>${ra}</td>
//        <td>${mm}</td>
//        <td>${r}</td>
//       <td>${pri}</td>
//       <td><button type="ssubmit">Add to Cart</button></td>

//     </tr>
    

// `;
// }
// form.addEventListener("submit", adding);


// function get(event)
// {
//     event.preventDefault();
//     const all_items_button = Array.from(document.querySelectorAll("#but2"));
//     alert(all_items_button);
//     // let l=document.getElementById("tabl").rows.length;

//     // alert(document.getElementById("tabl").rows.item(0).value);
// }
    



