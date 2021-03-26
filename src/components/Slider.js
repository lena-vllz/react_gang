import React from 'react'
import axios from 'axios';


const slides = [
    {
      title: "Batman",      
      id: "1",
      subtitle: "Nicholson Keaton",
      description: "",
      image: "https://fr.web.img6.acsta.net/pictures/17/11/03/16/30/4890192.jpg"
    },
    {
      title: "The amazing",
      id: "2",
      subtitle: "Spiderman",
      description: "le destin d'un héros",
      image:
        "https://www.laboutiqueducine.com/images/7952.jpg"
    },
    {
      title: "SuperMan",
      id: "3",
      subtitle: "Returns",
      description: "Bryan Singer",
      image:
        "https://i.pinimg.com/originals/1f/51/a1/1f51a1a2ab3ed8e42424cc5909335f5b.jpg"
    },
    {
      title: "Deadpool",
      id: "4",
      subtitle: "Tim Miller",
      description: "",
      image:
        "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg"
    },
    {
      title: "Iron Man 3",
      id: "5",
      subtitle: "	Jon Favreau",
      description: "",
      image:
        "https://fr.web.img5.acsta.net/medias/nmedia/18/91/08/37/20508296.jpg"
    }
];

// let slides = {
//   movie1:[],
//   movie2:[],
//   movie3:[],
//   movie4:[],
//   movie5:[],
// }

// console.log(slides)
// console.log(slides[0])

// function getMovie() {
//   const apiurl = "http://www.omdbapi.com/?apikey=8774b09f"
//   let tab1 = []
//   axios(apiurl + "&t=a").then(({data})=>{
//     let results = data;
//     tab1.push(data["Title"]);
//     tab1.push(data["Poster"]);

//   });
//   slides.movie1.push(tab1)
//   console.log(slides["movie1"])

// }
// getMovie()

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
      <div className="slideContentNumber">
        <p className="slideId">{slide.id}</p>
      </div>
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Slider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="bodyMain">
        <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
    </div>
  );
}

export default Slider