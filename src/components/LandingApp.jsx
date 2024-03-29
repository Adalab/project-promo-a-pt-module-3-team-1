import "../scss/App.scss";
import { Link } from "react-router-dom";

function LandingApp() {
  return (
    <div>
      <div className="container">
        <main className="main_landing">
          <section className="hero">
            <h2 className="title">HomeHelpers</h2>
            <p className="hero__text">
            Encuentra con nosotros la tranquilidad que necesitas para tu hogar
            </p>
            <Link className="button--link" to="/create">
              Nuevo proyecto
            </Link>
          </section>

          <section className="preview">
            <div className="projectImage"></div>
            <div className="card_landing" >
              <article className="card">
                <h2 className="card__projectTitle">
                  <span className="card__projectTitle--text">
                    Personal project card
                  </span>
                </h2>
                <div className="card__author">
                  <div className="card__authorPhoto"></div>
                  <p className="card__job">Fontanera</p>
                  <h3 className="card__name">Alice Ball</h3>
                </div>
                <div className="card__project">
                  <h3 className="card__slogan">Facilidad ante todo</h3>
                  <p className="card__slogan">Arreglos rápidos</p>
                  <h3 className="card__descriptionTitle">Descripción del producto</h3>
                  <p className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
                    vitae ratione
                  </p>
                  <div className="card__technicalInfo">
                    <p className="card__technologies">9 años de experiencia en el sector</p>
                    <a
                      className="icon icon__www"
                      href="#"
                      title="Haz click para ver el proyecto online"
                    >
                      Web link
                    </a>
                    <a
                      className="icon icon__github"
                      href="#"
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub link
                    </a>
                  </div>
                </div>
              </article>
              <article className="card">
                <h2 className="card__projectTitle">
                  <span className="card__projectTitle--text">
                    Personal project card
                  </span>
                </h2>
                <div className="card__author">
                  <div className="card__authorPhoto"></div>
                  <p className="card__job">Fontanera</p>
                  <h3 className="card__name">Alice Ball</h3>
                </div>
                <div className="card__project">
                  <h3 className="card__slogan">Facilidad ante todo</h3>
                  <p className="card__slogan">Arreglos rápidos</p>
                  <h3 className="card__descriptionTitle">Descripción del producto</h3>
                  <p className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
                    vitae ratione
                  </p>
                  <div className="card__technicalInfo">
                    <p className="card__technologies">9 años de experiencia en el sector</p>
                    <a
                      className="icon icon__www"
                      href="#"
                      title="Haz click para ver el proyecto online"
                    >
                      Web link
                    </a>
                    <a
                      className="icon icon__github"
                      href="#"
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub link
                    </a>
                  </div>
                </div>
              </article>
              <article className="card">
                <h2 className="card__projectTitle">
                  <span className="card__projectTitle--text">
                    Personal project card
                  </span>
                </h2>
                <div className="card__author">
                  <div className="card__authorPhoto"></div>
                  <p className="card__job">Fontanera</p>
                  <h3 className="card__name">Alice Ball</h3>
                </div>
                <div className="card__project">
                  <h3 className="card__slogan">Facilidad ante todo</h3>
                  <p className="card__slogan">Arreglos rápidos</p>
                  <h3 className="card__descriptionTitle">Descripción del producto</h3>
                  <p className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
                    vitae ratione
                  </p>
                  <div className="card__technicalInfo">
                    <p className="card__technologies">9 años de experiencia en el sector</p>
                    <a
                      className="icon icon__www"
                      href="#"
                      title="Haz click para ver el proyecto online"
                    >
                      Web link
                    </a>
                    <a
                      className="icon icon__github"
                      href="#"
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub link
                    </a>
                  </div>
                </div>
              </article>
              <article className="card">
                <h2 className="card__projectTitle">
                  <span className="card__projectTitle--text">
                    Personal project card
                  </span>
                </h2>
                <div className="card__author">
                  <div className="card__authorPhoto"></div>
                  <p className="card__job">Fontanera</p>
                  <h3 className="card__name">Alice Ball</h3>
                </div>
                <div className="card__project">
                  <h3 className="card__slogan">Facilidad ante todo</h3>
                  <p className="card__slogan">Arreglos rápidos</p>
                  <h3 className="card__descriptionTitle">Descripción del producto</h3>
                  <p className="card__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, quos? Itaque, molestias eveniet laudantium adipisci
                    vitae ratione
                  </p>
                  <div className="card__technicalInfo">
                    <p className="card__technologies">9 años de experiencia en el sector</p>
                    <a
                      className="icon icon__www"
                      href="#"
                      title="Haz click para ver el proyecto online"
                    >
                      Web link
                    </a>
                    <a
                      className="icon icon__github"
                      href="#"
                      title="Haz click para ver el código del proyecto"
                    >
                      GitHub link
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default LandingApp;
