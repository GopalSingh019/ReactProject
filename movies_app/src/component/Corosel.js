import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import { useState } from "react"

function Corosel(props) {
  const [active, setActive] = useState(0);

  var movies = props.movies;
  var size = movies.length;
  console.log(size);
  var slides = movies.map((movies, key) => {
    var src = 'http://image.tmdb.org/t/p/original/' + movies.poster_path;
    return (<CarouselItem key={src}>
      <img
        className="d-block w-100"
        src={src}
        alt={key}
        height="540"

      /></CarouselItem>);
  });
  return (
    <div style={{
      display: 'block', paddingLeft: 60, paddingRight: 60
    }}>
      <Carousel activeIndex={active} >
        {slides}

        <CarouselControl direction='prev' directionText='prev' onClickHandler={() => { if (active > 0) setActive(active - 1); else { setActive(size - 1); } }} />
        <CarouselControl direction='next' directionText='next' onClickHandler={() => { if (active < size - 1) setActive(active + 1); else { setActive(0); } }} />
      </Carousel>
    </div>

    //       <div className='caroselBlock'>
    //       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //   <ol className="carousel-indicators">
    //     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     {movies.map((movies,key)=>{
    //       var src='http://image.tmdb.org/t/p/original/'+movies.poster_path;
    //       var active=(key===0 ? "carousel-item active":"carousel-item");
    //     return <div className={active}>
    //       <img className="d-block w-100 add-block" src={src}  alt="First slide"/>
    //     </div>
    //     })}
    //   </div>
    //   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div></div>
  );
}

export default Corosel;