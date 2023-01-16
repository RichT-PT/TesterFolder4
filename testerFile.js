
let p = new promise ((resolve, reject) => {
    let a = 17
    if(a >= 16){
      resolve("Verified")
    }
    else{
      reject("Under Aged!")
    }
  })
  p.then((Message) => {
    console.log("Age is acceptible to drive" + message)
  })
  .catch((message) => {
    console.log("Must be 16 to drive" + message)
  })