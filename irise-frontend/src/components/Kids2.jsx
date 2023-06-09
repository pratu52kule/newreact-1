import './home.css'


const Kids = ({items}) =>{
    console.log(items,"items")
    return(
        <>
         <div className='color-red'>  Kidds</div>
          <div> kidds2</div>
          {items ? <h1>we have items</h1>:<h1>we dont have items</h1>}
          {items.map((i)=>(
            <h1 id='myid'>{i}</h1>
          ))}
        </>
    )
}
export default Kids;