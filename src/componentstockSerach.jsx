import axios from "axios"
import { useState , useEffect} from "react"



const Stoocksearch = ()=>{



  
const [Search , setSearch] = useState("")


useEffect(()=>{

  const fetchDataa = async () =>{
try {
  
  const response =  await axios.get(`https://finnhub.io/api/v1/search?q=${Search}&token=cc26pu2ad3icrd10orqg`)
 

console.log(response.data)
} catch (error) {
  console.log(error)
}



  }

fetchDataa()


},[Search])




  return <div className="w-50 p-5 rounded mx-auto">

<div className="form-floating dropdown">

<input style={{backgroundColor:'rgba(148 , 158 , 171 , 0.04'}} id="search" type="text" className="form-control" placeholder="Search" autoComplete="off" value={Search} onChange={(e) => setSearch(e.target.value)}></input>

<label htmlFor="search">Search</label>

<ul className="dropdown-menu show">
  <li>Stock1</li>
  <li>Stock2</li>
  <li>Stock3</li>
</ul>

</div>


  </div>
  
  }
  
  
  export default Stoocksearch