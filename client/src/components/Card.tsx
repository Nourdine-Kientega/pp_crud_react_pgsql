import Image1 from '../assets/images/image1.png';

const Card = () => {
  return (
    <div className="card col-lg-3 col-md-4 col-sm-6 col-12" style={{ width: '18rem', height: 'fit-content' }}>
  <img src={Image1} className="card-img-top mt-2" style={{ width: '100%', height: 180 }} alt="..." />
  <div className="card-body pt-1">
    <h5 className="card-title">Card title</h5>
    <p className="card-text"> Card description Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between">
      <strong>Author:</strong>
      <span>Kientega Nourdine</span>
    </div>
    <hr className='mt-1' />
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Card;