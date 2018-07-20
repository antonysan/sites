import React, { Component } from 'react';
import mirImage from './images/mir-preview.jpg';
import byrpexImage from './images/byrpex.jpg';



const BrowserRouter = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route
const Link = require('react-router-dom').Link
const Switch = require('react-router-dom').Switch

function changeClass () {
  let bodyClass = document.querySelector("#root");
  bodyClass.classList.toggle("overflow")
};
class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                        lineClass: "nav__burger-line",
                        navClass: "nav__list",
                        buttonClass: "nav__burger visible-xs",
                        iconPhone1: "nav__link nav__link--icon",
                        itemPhone: "nav__item-phone"
                      };
    this.pressButton = this.pressButton.bind(this);

  }
  pressButton () {
      let classNameLine = (this.state.lineClass==="nav__burger-line")?"nav__burger-line nav__burger-line--open":"nav__burger-line";
      let classNameNav = (this.state.navClass==="nav__list")?"nav__list nav__list--mobile":"nav__list";
      let classNameButton = (this.state.buttonClass==="nav__burger visible-xs")?"nav__burger visible-xs nav__burger--open":"nav__burger visible-xs";
      let classNamePhone = (this.state.itemPhone==="nav__item-phone")?"nav__item-phone nav__item-phone--open":"nav__item-phone";
      var bodyClass = document.querySelector("#root");
      let log = ( bodyClass.classList.toggle("overflow"));
      this.setState({lineClass: classNameLine, navClass: classNameNav, buttonClass: classNameButton, itemPhone: classNamePhone });

  }
  render () {
    return (
      <nav className="nav">
        <button onClick={this.pressButton} className={this.state.buttonClass} type="button">
          <span className={this.state.lineClass}></span>
        </button>
        <ul className={this.state.navClass}>
          <li className="nav__item"><Link className="nav__link" activeClassName="nav__link nav__link--active" to="/" >Блог</Link></li>
          <li className="nav__item"><Link className="nav__link" activeClassName="nav__link--active" to="/cvv" >Резюме</Link></li>
          <li className="nav__item"><Link className="nav__link" activeClassName="nav__link--active" to="/portfolio" >Портфолио</Link></li>
          <li className="nav__item"><Link className="nav__link" activeClassName="av__link--active" to="/contacts" >Контакты</Link></li>
        </ul>
        <div class={this.state.itemPhone}>
          <a class="nav__link nav__link--icon" href="tel:+79689860888">
            <svg class="nav__icon-phone icon-phone" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="icon-phone__path icon-phone__path--tube" d="M23.7221 16.8487C23.107 16.2092 22.3652 15.8673 21.5789 15.8673C20.799 15.8673 20.0507 16.2028 19.4103 16.8423L17.4066 18.8368C17.2417 18.7482 17.0768 18.6659 16.9183 18.5836C16.69 18.4696 16.4744 18.362 16.2906 18.248C14.4136 17.0576 12.7079 15.5064 11.072 13.4992C10.2794 12.4988 9.74673 11.6567 9.35993 10.8019C9.87989 10.327 10.3618 9.83314 10.831 9.35826C11.0086 9.18098 11.1861 8.99736 11.3637 8.82007C12.6953 7.49041 12.6953 5.76819 11.3637 4.43853L9.63259 2.70997C9.43602 2.51369 9.23311 2.31107 9.04288 2.10846C8.66243 1.71589 8.26295 1.31066 7.85079 0.930761C7.23572 0.322917 6.50017 8.69528e-09 5.72658 8.69528e-09C4.95299 8.69528e-09 4.20476 0.322917 3.57067 0.930761C3.56433 0.937093 3.56433 0.937093 3.55799 0.943424L1.40207 3.1152C0.590434 3.92566 0.127547 4.91341 0.026092 6.05944C-0.12609 7.9083 0.419229 9.63053 0.83773 10.7576C1.86496 13.5245 3.39946 16.0889 5.68854 18.8368C8.46586 22.1483 11.8075 24.7633 15.6248 26.6058C17.0832 27.296 19.0298 28.1128 21.2048 28.2521C21.3379 28.2584 21.4774 28.2647 21.6043 28.2647C23.069 28.2647 24.2991 27.7392 25.263 26.6945C25.2693 26.6818 25.282 26.6755 25.2883 26.6628C25.6181 26.2639 25.9985 25.903 26.398 25.5168C26.6706 25.2572 26.9496 24.9849 27.2223 24.7C27.8501 24.0478 28.1798 23.288 28.1798 22.5092C28.1798 21.7241 27.8437 20.9706 27.2033 20.3374L23.7221 16.8487ZM25.9922 23.516C25.9858 23.516 25.9858 23.5223 25.9922 23.516C25.7449 23.7819 25.4912 24.0225 25.2186 24.2884C24.8064 24.681 24.3879 25.0926 23.9948 25.5548C23.3543 26.2386 22.5998 26.5615 21.6106 26.5615C21.5155 26.5615 21.414 26.5615 21.3189 26.5552C19.4357 26.4349 17.6856 25.7004 16.373 25.0736C12.784 23.3387 9.63259 20.8756 7.01379 17.7541C4.85153 15.1518 3.4058 12.7457 2.44832 10.1624C1.85862 8.5858 1.64303 7.35744 1.73814 6.19874C1.80155 5.45793 2.08689 4.84376 2.61319 4.31822L4.77544 2.15911C5.08615 1.86785 5.41588 1.70956 5.73926 1.70956C6.13874 1.70956 6.46213 1.95017 6.66504 2.15278C6.67138 2.15911 6.67772 2.16544 6.68406 2.17178C7.07086 2.53268 7.43863 2.90625 7.82543 3.30515C8.022 3.50777 8.2249 3.71038 8.42781 3.91933L10.1589 5.64788C10.831 6.31904 10.831 6.93955 10.1589 7.61071C9.975 7.79433 9.79745 7.97795 9.61357 8.15524C9.08093 8.69977 8.57366 9.2063 8.022 9.70018C8.00931 9.71284 7.99663 9.71917 7.99029 9.73183C7.44497 10.2764 7.54643 10.8082 7.66056 11.1691C7.6669 11.1881 7.67324 11.2071 7.67959 11.2261C8.12979 12.3152 8.76388 13.3409 9.7277 14.5629L9.73404 14.5693C11.4841 16.722 13.3293 18.3999 15.3648 19.6853C15.6248 19.8499 15.8911 19.9829 16.1447 20.1095C16.373 20.2235 16.5886 20.3311 16.7725 20.4451C16.7978 20.4577 16.8232 20.4767 16.8486 20.4894C17.0642 20.597 17.2671 20.6477 17.4763 20.6477C18.0026 20.6477 18.3323 20.3184 18.4401 20.2108L20.6087 18.0454C20.8243 17.8301 21.1667 17.5705 21.5662 17.5705C21.9593 17.5705 22.2827 17.8174 22.4793 18.0327C22.4856 18.039 22.4856 18.039 22.492 18.0454L25.9858 21.5341C26.6389 22.18 26.6389 22.8448 25.9922 23.516Z" transform="translate(0 1.73535)" fill="#F2F2F2"/>
              <path class="icon-phone__path icon-phone__path--line1" d="M0.704618 1.69568C2.36594 1.97427 3.87508 2.7594 5.07985 3.96243C6.28463 5.16545 7.06456 6.6724 7.3499 8.33131C7.41965 8.7492 7.78109 9.04046 8.19325 9.04046C8.24398 9.04046 8.28836 9.03413 8.33909 9.0278C8.80832 8.95181 9.11902 8.5086 9.04293 8.04005C8.70052 6.0329 7.74938 4.20303 6.29731 2.75307C4.84524 1.30311 3.01271 0.353356 1.00264 0.011444C0.533414 -0.0645365 0.0958896 0.245717 0.0134576 0.707932C-0.0689744 1.17015 0.23539 1.6197 0.704618 1.69568Z" transform="translate(15.5098 5.44043)" fill="#333333"/>
              <path class="icon-phone__path icon-phone__path--line2" d="M14.2341 13.2336C13.6698 9.92849 12.1099 6.92092 9.71307 4.52754C7.3162 2.13415 4.30426 0.576554 0.994296 0.0130316C0.531409 -0.0692806 0.0938854 0.247305 0.0114534 0.709519C-0.0646376 1.17807 0.246068 1.61495 0.715296 1.69727C3.67017 2.19747 6.36506 3.59678 8.50829 5.73056C10.6515 7.87068 12.0465 10.5617 12.5475 13.5122C12.6172 13.9301 12.9786 14.2214 13.3908 14.2214C13.4415 14.2214 13.4859 14.2151 13.5366 14.2087C13.9995 14.1391 14.3166 13.6959 14.2341 13.2336Z" transform="translate(15.7529)" fill="#333333"/>
            </svg>
          </a>
        </div>
      </nav>

    );
  }
}


function Header(props) {
  return (
    <header className={props.headerClass}>
      <div className={props.innerClass}>
        <MenuList />
      </div>
      </header>
  );
}



function Copy(props) {
  return (
    <section className="copy">
      <p className="copy__title">Говорят, что закон защищает мои права.</p>
      <p className="copy__title">2018г.</p>
    </section>
  );
}


function Footer(props) {
  return (
    <footer className={props.footerClass}>
      <div className={props.innerClass}>
      <Copy />
      </div>
    </footer>
  );
}

function Blog (props) {
  return (
    <section class="blog">
      <div class="blog__inner">
        <p class="blog__title">Здесь пока нет статей.</p>
        <p class="blog__title">Но они обязательно появятся, возможно завтра... =)</p>
        <p class="blog__title">А пока проходите в Меню.</p>
      </div>
    </section>

  );
}

function Cvv (props) {
  return (
    <section className="cvv">
      <div className="cvv__inner">
        <p className="cvv__header">Обо мне</p>
        <div className="cvv__box">
          <div className="cvv__image-block">
            <img src="http://via.placeholder.com/350x400" alt="" className="cvv__image" />
          </div>
          <div className="cvv__description">
            <p className="cvv__name">Меня зовут Терехов Антон</p>
            <p className="cvv__proff">Начинающий Фронтэнд разработчик</p>
            <p className="cvv__yearsold">
              <span className="cvv__bold">Родился: </span> 2 Июля 1988 г. в Москве где и проживаю по наст. время.
            </p>
            <p className="cvv__about">
              С февраля 2017 года начал изучать верстку. За это время я изучил HTML 5 и CSS3 на уровне <span className="cvv__bold">кроссбраузерной, адаптивной и мобильной</span> верстки. В декабре 2017 закончил курсы HTML Academy - Базовый HTML и CSS3
              и на 100% защитил выпускной проект -
              <Link to="/gllacy" class="cvv__link">"Магазин мороженного Gllacy"</Link>. Полный список работ можно посмотреть на странице <Link className="cvv__link" to="/portfolio#root">Портфолио</Link>
            </p>
            <p className="cvv__about">
              На текущий момент, я постепенно изучаю JS, jQuery, jQueryMobile и владею ими на уровне достаточном, что бы сделать лёгкую анимацию или всплывающие окна.
            </p>
            <p className="cvv__about">
              Использую препроцессор Less. Был небольшой опыт работы со сборщиком проектов Gulp - настройка с нуля (по шпаргалкам) до компиляции less, минификации файлов.
            </p>
            <p className="cvv__about">Система контроля версий GitHub. Работа с консолью bash, cmd.</p>
            <p className="cvv__about">Ориентирован в первую очередь на качество проделанной работы. </p>
            <p className="cvv__about">Люблю изучать новые технологии. Хотелось бы в будущем изучить стек технологий frontend и backend. </p>
            <p className="cvv__about">Стараюсь самостоятельно находить нужную информацию.</p>
            <p className="cvv__about">На текущий момент ищу работу связанную с вёрсткой. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard(props) {

  const content = props.posts.map((post) =>
               <div class="portfolio__card  portfolio__card--flex" key={post.number} id={post.number}>
                  <div class="portfolio__image-box">
                    <img class="portfolio__image" src={post.imageUrl} alt={post.imageTitle} />
                  </div>
                  <div class="portfolio__description">
                    <p class="portfolio__title portfolio__title--head">{post.head}</p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">Технологии:</span>
                      <span>{post.tech}</span>
                    </p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">Контроль версий:</span>
                      <span> {post.ver}</span>
                    </p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">Библиотеки:</span>
                      <span> {post.lib}</span>
                    </p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">Срок вёрстки  –  </span>
                      <span> {post.old}</span>
                    </p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">
                        <a class="portfolio__title-link" href={post.link}>Ссылка на проект </a>
                      </span>
                    </p>
                    <p class="portfolio__title">
                      <span class="portfolio__title-name">Верстка сайта</span>
                      <span>{post.description}</span>
                    </p>
                  </div>
                </div>


  );
  return (
    <div>
      {content}

    </div>
  );
}



const posts = [
                            {
                            number: "mir",
                            imageUrl: mirImage,
                            imageTitle: "На фото изображен скриншот сайта ТЦ Мир",
                            head: "Сайт для ТЦ МИР",
                            lib: "Jquery",
                            tech: "Flexbox, Less",
                            ver: "GitHub",
                            old: "2 Недели",
                            link: "lkajshdlksdjhf",
                            description: "проводилась для разрешний от&nbsp;320px (Iphone 4) до&nbsp;FullHD. В&nbsp;проекте использовалась максимально SVG графика. Иконки в .png были собственно ручно перерисованны в&nbsp;SVG при помощи inscape, figma."
                          },
                              {
                            number: "byrpex",
                            imageUrl: byrpexImage,
                            imageTitle: "На фото изображен скриншот сайта BYRPEX",
                            head: "Интернет магазин BYRPEX",
                            lib: "Jquery",
                            tech: "Flexbox, Less",
                            ver: "GitHub",
                            old: "1 Недели",
                            link: "",
                            description: "проводилась для разрешний от&nbsp;320px (Iphone 4) до&nbsp;FullHD. В&nbsp;проекте использовалась максимально SVG графика. Иконки в .png были собственно ручно перерисованны в&nbsp;SVG при помощи inscape, figma."
                          }
];


function Portfolio (props) {

  return (
    <section className="portfolio">
      <p className="portfolio__header">Что я уже сделал ?</p>
      <div className="portfolio__content">

        <PortfolioCard posts={posts} />

        <aside className="portfolio__block invisible-xs">
          <p className="portfolio__list-header">Полный список работ:</p>
          <ul className="portfolio__list">
            <li className="portfolio__item"><a className="portfolio__link" href="#mir">Сайт для ТЦ МИР</a></li>
            <li className="portfolio__item"><a className="portfolio__link" href="#byrpex">Интернет магазин БИР ПЕКС</a></li>
          </ul>
        </aside>

      </div>
    </section>

  );
}


function MainLayout (props) {
  return(

    <main className="page__main">
      <div className="page__inner">
      <Switch>
        <Route exact path='/' component={Blog}/>
        <Route path='/cvv' component={Cvv}/>
        <Route path='/portfolio' component={Portfolio}/>
      </Switch>

      </div>
    </main>



  );

}





function App() {
  return (

    <div class="page page--light">
      <Header headerClass="page__header page__header--dark" innerClass="page__inner" />
      <MainLayout />
      <Footer footerClass="page__footer" innerClass="page__inner"/>
    </div>
  );
};



export default App;
