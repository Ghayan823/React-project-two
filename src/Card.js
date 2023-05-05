function Card ({title, image, year}){
    return(
    <div className="Col col-md-3 my-3">
        <div className="card" style={{ width: "18rem" }}>
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> {title} </h5>
    <p className="card-text">
    {year}
    </p>
    
  </div>
</div>
</div>
    )
    
}

export default Card