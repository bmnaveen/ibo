/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];





function getUniqueProductCount(){
let uniqueProductCount={};

[...listOfProducts].forEach((e)=>{
if(uniqueProductCount[e.productName]===undefined){
uniqueProductCount[e.productName]=e.quantity;
}else{
uniqueProductCount[e.productName]=uniqueProductCount[e.productName]+=e.quantity;
}

})

return uniqueProductCount
}


console.log(getUniqueProductCount())

function getUniquePrducts(){
let uniqueProduct=[];
let tempData={
    productName: "",
    quantity: 0,
    description: ""
};

[...listOfProducts].sort((a,b)=>{
if(a["productName"]>b["productName"]) return -1;
if(a["productName"]<b["productName"]) return 1;
return 0
}).forEach((e,i)=>{

if(e.productName!==tempData.productName){
tempData={
    productName: e.productName,
    quantity: e.quantity,
    description: e.description
};
uniqueProduct.push(tempData);

}else{
uniqueProduct[uniqueProduct.length-1]["quantity"]=uniqueProduct[uniqueProduct.length-1]["quantity"]+=e.quantity;
}
})

return uniqueProduct
}


console.log(getUniquePrducts()) 
