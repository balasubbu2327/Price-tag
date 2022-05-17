
import './App.css';

function App() {
  var list1=[{list:"Single User",texttype:" ",icontype:"fa fa-check",font:"font-weight-bold"},{list:"5GB Storage",texttype:" ",icontype:"fa fa-check"},{list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},{list: "Community Access",texttype:" ",icontype:"fa fa-check"},
  {list: "Unlimited Private Projects",texttype:"text-muted ",icontype:"fa fa-times"},{list: "Dedicated Phone Support",texttype:"text-muted ",icontype:"fa fa-times"},{list:"Free Subdomain",texttype:"text-muted ",icontype:"fa fa-times"},{list:"Monthly Status Reports",texttype:"text-muted",icontype:"fa fa-times"},
 ]
 var list2=[
   {list:"5 Users",texttype:" ",icontype:"fa fa-check"},
   {list:"50GB Storage",texttype:" ",icontype:"fa fa-check"},
   {list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},
   {list: "Community Access",texttype:" ",icontype:"fa fa-check"},
 {list: "Unlimited Private Projects",texttype:" ",icontype:"fa fa-check"},
 {list:"Dedicated Phone Support",texttype:" ",icontype:"fa fa-check"},
 {list:"Free Subdomain",texttype:" ",icontype:"fa fa-check"},
 {list:"Monthly Status Reports",texttype:"text-muted",icontype:"fa fa-times"},
]
var list3=[
  {list:"Unlimited Users",texttype:" ",icontype:"fa fa-check"},
  {list:"150GB Storage",texttype:" ",icontype:"fa fa-check"},
  {list: "Unlimited Public Projects",texttype:" ",icontype:"fa fa-check"},
  {list: "Community Access",texttype:" ",icontype:"fa fa-check"},
{list: "Unlimited Private Projects",texttype:" ",icontype:"fa fa-check"},
{list:"Dedicated Phone Support",texttype:" ",icontype:"fa fa-check"},
{list:"Unlimited Free Subdomain",texttype:" ",icontype:"fa fa-check"},
{list:"Monthly Status Reports",texttype:"",icontype:"fa fa-check"},
]


 

  return (
    <div className="App">
     <div className="row">
      <div className="col-lg-4 ">
        <Details
          pricetitle="FREE"
          price="$0"
          listofdata={list1}
        />
        
       
      </div>
      <div className="col-lg-4">
      <Details
          pricetitle="PLUS"
          price="$9"
          listofdata={list2}
        />
      </div>
      <div className="col-lg-4 ">
      <Details
          pricetitle="PRO"
          price="$49"
          listofdata={list3}
        />
      </div>
    </div> 
    </div>
  );
}

function Details({pricetitle,price,listofdata}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="header"> {pricetitle} </h5>
        <h6 className="cardprice">{price}<span className="month">/month</span></h6>
        <hr />
        <ul className="">
         {listofdata.map((element)=>(<li className={element.texttype}><span><i class={element.icontype} aria-hidden="true"></i></span>{element.list}</li>))}
        </ul>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary text-uppercase">BUTTON</button>
        </div>
      </div>
    </div>
  );
}

export default App;
