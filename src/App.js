import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react";



function App() {
  const data = [
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz142xu2lOjBs5MMTghUSvEuD9DhoDrTlYrA&usqp=CAU",
      productName:"iPhone 14 Pro Max",
      price:"Rs 1,40,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORqsMx8qD74trBePpv5c2Gu54RxRiSCxuAQ&usqp=CAU",
      productName:"Google Pixeal 7 Pro",
      price:"Rs 40,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUF3MkkF4SnVBX2U0kaEGRSrMJRQYU4DlOQg&usqp=CAU",
      productName:"Oneplus 11 Pro",
      price:"Rs 50,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVgLZ9mFMEFNPFUZzhMuXyr4Y9f0c4QCA1Q&usqp=CAU",
      productName:"IQOO Neo 7",
      price:"Rs 30,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5RyeaWBsLuediz6pkA093wsdh1Ast53bVg&usqp=CAU",
      productName:"Redmi Note 10 Pro/Max",
      price:"Rs 18,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVIToKVT1D8gRIFtGi5qtPIJiQDvWBJ1YuA&usqp=CAU",
      productName:"Oppo Reno 8 Pro",
      price:"Rs 40,000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5DOiLj87vwtZ_wvVfTZipHQMqHsTrZbagA&usqp=CAU",
      productName:"Oppo Find N2",
      price:"Rs 80.000",
    },
    {
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxnS_Njl44S2bMpT-TCen3QLqK4a0_9ycF-mC-1UvHCXXq8bQXOAaFbvOwM3M8m8Kwqj8&usqp=CAU",
      productName:"Realme 10 Pro Plus",
      price:"Rs 22,000",
    }
  ]
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <div className='head'>
      <h2>Mobile Product</h2>
      <span className='btn-3'>CART  <span>{count}</span></span>
    </div>
       <div className='card-container'>
         {data.map((prod, idx)=> <Cards
            idx = {idx}
             prod = {prod}
             setCount = {setCount}
             count = {count} 
          />)}
         </div>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false)
  function addToCardt(){
    setShow(!show)
    setCount (count + 1)
  }
  function removeToCardt(){
    setShow(!show)
    setCount (count - 1)
  }
  return(
  <Card className='card' key = {idx} style={{ width: '20rem' , height:'22rem'}}>
    <Card.Img variant="top" src= {prod.productImg} />
    <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>{prod.price}</Card.Text>
     {!show ?  <Button onClick={addToCardt} className='btn-1' variant="primary">Add to Card</Button> : ""}
      {show ? <Button onClick={removeToCardt} className='btn-2' variant="danger">Remove Now</Button> : ""}
    </Card.Body>
  </Card>
  )
}
