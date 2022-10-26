import "./Cardbody.scss"

const CardModel = props => {
  return (
        <div className='card text-left'>
            <div className='PageLogo'>
                <img src={props.logo} alt='' className='Plogo' />
                <a className='LogoName'>{props.logoname}</a>
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
            </div>
            <div className='overflow'>
                <img src={props.imgsrc} alt="" className='card-img-bottom' />
            </div>
            
        </div>

  )
}


export default CardModel