import { Link } from "react-router";
import { useEffect, useState } from "react";

// --- Scrollspy Hook ---
function useScrollspy(ids: string[], offset = 0, scrollContainer?: string) {
  const [activeId, setActiveId] = useState<string>(ids[0] || "");

  useEffect(() => {
    const container = scrollContainer
      ? document.querySelector(scrollContainer)
      : window;

    const handleScroll = () => {
      let found = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = scrollContainer
            ? rect.top - (container as HTMLElement).getBoundingClientRect().top
            : rect.top;
          if (top - offset <= 1) {
            found = id;
          }
        }
      }
      setActiveId(found);
    };

    (container as HTMLElement | Window).addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () =>
      (container as HTMLElement | Window).removeEventListener("scroll", handleScroll);
  }, [ids, offset, scrollContainer]);

  return activeId;
}

const NAVBAR_IDS = ["fat", "mdo", "one", "two", "three"];
const NESTED_IDS = [
  "item-1",
  "item-1-1",
  "item-1-2",
  "item-2",
  "item-3",
  "item-3-1",
  "item-3-2",
];
const LIST_IDS = [
  "list-item-1",
  "list-item-2",
  "list-item-3",
  "list-item-4",
];

const UiScrollspy = () => {
  const activeNavbar = useScrollspy(NAVBAR_IDS, 0, ".navbar-scrollspy");
  const activeNested = useScrollspy(NESTED_IDS, 0, ".nested-scrollspy");
  const activeList = useScrollspy(LIST_IDS, 0, ".list-scrollspy");

  return (
    <>
      {/* ========================
            Start Page Content
        ========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Scrollspy</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Scrollspy</li>
              </ol>
            </div>
          </div>
          {/* End Page header */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Example in navbar</h5>
            </div>
            {/* end card-header */}
            <div className="card-body">
              <p className="text-muted">
                Scroll the area below the navbar and watch the active class
                change. The dropdown items will be highlighted as well.
              </p>
              <nav
                id="navbar-example2"
                className="navbar navbar-light bg-light px-3"
              >
                <Link className="navbar-brand" to="#">
                  Navbar
                </Link>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <Link
                      className={`nav-link${activeNavbar === "fat" ? " active" : ""}`}
                      to="#fat"
                    >
                      @fat
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link${activeNavbar === "mdo" ? " active" : ""}`}
                      to="#mdo"
                    >
                      @mdo
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle arrow-none"
                      data-bs-toggle="dropdown"
                      to="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link
                        className={`dropdown-item${activeNavbar === "one" ? " active" : ""}`}
                        to="#one"
                      >
                        one
                      </Link>
                      <Link
                        className={`dropdown-item${activeNavbar === "two" ? " active" : ""}`}
                        to="#two"
                      >
                        two
                      </Link>
                      <div role="separator" className="dropdown-divider" />
                      <Link
                        className={`dropdown-item${activeNavbar === "three" ? " active" : ""}`}
                        to="#three"
                      >
                        three
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <div
                className="scrollspy-example navbar-scrollspy"
                style={{ position: "relative", height: 250, overflow: "auto" }}
              >
                <h4 className="fs-16" id="fat">
                  @fat
                </h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
                <h4 className="fs-16" id="mdo">
                  @mdo
                </h4>
                <p>
                  Veniam marfa mustache skateboard, adipisicing fugiat velit
                  pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's
                  vero. Cupidatat four loko nisi, ea helvetica nulla carles.
                  Tattooed cosby sweater food truck, mcsweeney's quis non
                  freegan vinyl. Lo-fi wes anderso +1 sartorial. Carles non
                  aesthetic exercitation quis gentrify. Brooklyn adipisicing
                  craft beer vice keytar deserunt.
                </p>
                <h4 className="fs-16" id="one">
                  one
                </h4>
                <p>
                  Occaecat commodo aliqua delectus. Fap craft beer deserunt
                  skateboard ea. Lomo bicycle rights adipisicing banh mi, velit
                  ea sunt next level locavore single-origin coffee in magna
                  veniam. High life id vinyl, echo park consequat quis aliquip
                  banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi
                  DIY minim messenger bag. Cred ex in, sustainable delectus
                  consectetur fanny pack iphone.
                </p>
                <h4 className="fs-16" id="two">
                  two
                </h4>
                <p>
                  In incididunt echo park, officia deserunt mcsweeney's proident
                  master cleanse thundercats sapiente veniam. Excepteur VHS
                  elit, proident shoreditch +1 biodiesel laborum craft beer.
                  Single-origin coffee wayfarers irure four loko, cupidatat
                  terry richardson master cleanse. Assumenda you probably
                  haven't heard of them art party fanny pack, tattooed nulla
                  cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh
                  eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland
                  before they sold out four loko. Locavore enim nostrud mlkshk
                  brooklyn nesciunt.
                </p>
                <h4 className="fs-16" id="three">
                  three
                </h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon
                  irure. Cosby sweater lomo jean shorts, williamsburg hoodie
                  minim qui you probably haven't heard of them et cardigan trust
                  fund culpa biodiesel wes anderson aesthetic. Nihil tattooed
                  accusamus, cred irony biodiesel keffiyeh artisan ullamco
                  consequat.
                </p>
                <p>
                  Keytar twee blog, culpa messenger bag marfa whatever delectus
                  food truck. Sapiente synth id assumenda. Locavore sed
                  helvetica cliche irony, thundercats you probably haven't heard
                  of them consequat hoodie gluten-free lo-fi fap aliquip. Labore
                  elit placeat before they sold out, terry richardson proident
                  brunch nesciunt quis cosby sweater pariatur keffiyeh ut
                  helvetica artisan. Cardigan craft beer seitan readymade velit.
                  VHS chambray laboris tempor veniam. Anim mollit minim commodo
                  ullamco thundercats.
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Example with nested nav</h5>
            </div>
            {/* end card-header */}
            <div className="card-body">
              <p className="text-muted">
                Scrollspy also works with nested <code>.nav</code>s. If a nested
                <code>.nav</code> is <code>.active</code>, its parents will also
                be <code>.active</code>. Scroll the area next to the navbar and
                watch the active class change.
              </p>
              <div className="row">
                <div className="col-2">
                  <nav
                    id="navbar-example3"
                    className="h-100 flex-column align-items-stretch pe-4 border-end"
                  >
                    <nav className="nav nav-pills flex-column">
                      <Link
                        className={`nav-link${activeNested === "item-1" ? " active" : ""}`}
                        to="#item-1"
                      >
                        Item 1
                      </Link>
                      <nav className="nav nav-pills flex-column">
                        <Link
                          className={`nav-link ms-3 my-1${activeNested === "item-1-1" ? " active" : ""}`}
                          to="#item-1-1"
                        >
                          Item 1-1
                        </Link>
                        <Link
                          className={`nav-link ms-3 my-1${activeNested === "item-1-2" ? " active" : ""}`}
                          to="#item-1-2"
                        >
                          Item 1-2
                        </Link>
                      </nav>
                      <Link
                        className={`nav-link${activeNested === "item-2" ? " active" : ""}`}
                        to="#item-2"
                      >
                        Item 2
                      </Link>
                      <Link
                        className={`nav-link${activeNested === "item-3" ? " active" : ""}`}
                        to="#item-3"
                      >
                        Item 3
                      </Link>
                      <nav className="nav nav-pills flex-column">
                        <Link
                          className={`nav-link ms-3 my-1${activeNested === "item-3-1" ? " active" : ""}`}
                          to="#item-3-1"
                        >
                          Item 3-1
                        </Link>
                        <Link
                          className={`nav-link ms-3 my-1${activeNested === "item-3-2" ? " active" : ""}`}
                          to="#item-3-2"
                        >
                          Item 3-2
                        </Link>
                      </nav>
                    </nav>
                  </nav>
                </div>
                {/* end col */}
                <div className="col-10">
                  <div
                    className="scrollspy-example nested-scrollspy"
                    style={{ height: 350, overflow: "auto" }}
                  >
                    <h4 className="fs-16" id="item-1">
                      Item 1
                    </h4>
                    <p>
                      Ex consequat commodo adipisicing exercitation aute
                      excepteur occaecat ullamco duis aliqua id magna ullamco
                      eu. Do aute ipsum ipsum ullamco cillum consectetur ut et
                      aute consectetur labore. Fugiat laborum incididunt tempor
                      eu consequat enim dolore proident. Qui laborum do non
                      excepteur nulla magna eiusmod consectetur in. Aliqua et
                      aliqua officia quis et incididunt voluptate non anim
                      reprehenderit adipisicing dolore ut consequat deserunt
                      mollit dolore. Aliquip nulla enim veniam non fugiat id
                      cupidatat nulla elit cupidatat commodo velit ut eiusmod
                      cupidatat elit dolore.
                    </p>
                    <h5 className="fs-16" id="item-1-1">
                      Item 1-1
                    </h5>
                    <p>
                      Amet tempor mollit aliquip pariatur excepteur commodo do
                      ea cillum commodo Lorem et occaecat elit qui et. Aliquip
                      labore ex ex esse voluptate occaecat Lorem ullamco
                      deserunt. Aliqua cillum excepteur irure consequat id quis
                      ea. Sit proident ullamco aute magna pariatur nostrud
                      labore. Reprehenderit aliqua commodo eiusmod aliquip est
                      do duis amet proident magna consectetur consequat eu
                      commodo fugiat non quis. Enim aliquip exercitation ullamco
                      adipisicing voluptate excepteur minim exercitation minim
                      minim commodo adipisicing exercitation officia nisi
                      adipisicing. Anim id duis qui consequat labore adipisicing
                      sint dolor elit cillum anim et fugiat.
                    </p>
                    <h5 className="fs-16" id="item-1-2">
                      Item 1-2
                    </h5>
                    <p>
                      Cillum nisi deserunt magna eiusmod qui eiusmod velit
                      voluptate pariatur laborum sunt enim. Irure laboris mollit
                      consequat incididunt sint et culpa culpa incididunt
                      adipisicing magna magna occaecat. Nulla ipsum cillum
                      eiusmod sint elit excepteur ea labore enim consectetur in
                      labore anim. Proident ullamco ipsum esse elit ut Lorem
                      eiusmod dolor et eiusmod. Anim occaecat nulla in non
                      consequat eiusmod velit incididunt.
                    </p>
                    <h4 className="fs-16" id="item-2">
                      Item 2
                    </h4>
                    <p>
                      Quis magna Lorem anim amet ipsum do mollit sit cillum
                      voluptate ex nulla tempor. Laborum consequat non elit enim
                      exercitation cillum aliqua consequat id aliqua. Esse ex
                      consectetur mollit voluptate est in duis laboris ad sit
                      ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                      Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                      esse irure. Laborum nisi sit est tempor laborum mollit
                      labore officia laborum excepteur commodo non commodo dolor
                      excepteur commodo. Ipsum fugiat ex est consectetur ipsum
                      commodo tempor sunt in proident.
                    </p>
                    <h4 className="fs-16" id="item-3">
                      Item 3
                    </h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                    <h5 className="fs-14" id="item-3-1">
                      Item 3-1
                    </h5>
                    <p>
                      Deserunt quis elit Lorem eiusmod amet enim enim amet minim
                      Lorem proident nostrud. Ea id dolore anim exercitation
                      aute fugiat labore voluptate cillum do laboris labore. Ex
                      velit exercitation nisi enim labore reprehenderit labore
                      nostrud ut ut. Esse officia sunt duis aliquip ullamco
                      tempor eiusmod deserunt irure nostrud irure. Ullamco
                      proident veniam laboris ea consectetur magna sunt ex
                      exercitation aliquip minim enim culpa occaecat
                      exercitation. Est tempor excepteur aliquip laborum
                      consequat do deserunt laborum esse eiusmod irure proident
                      ipsum esse qui.
                    </p>
                    <h5 className="fs-14" id="item-3-2">
                      Item 3-2
                    </h5>
                    <p>
                      Labore sit culpa commodo elit adipisicing sit aliquip elit
                      proident voluptate minim mollit nostrud aute reprehenderit
                      do. Mollit excepteur eu Lorem ipsum anim commodo sint
                      labore Lorem in exercitation velit incididunt. Occaecat
                      consectetur nisi in occaecat proident minim enim sunt
                      reprehenderit exercitation cupidatat et do officia.
                      Aliquip consequat ad labore labore mollit ut amet. Sit
                      pariatur tempor proident in veniam culpa aliqua excepteur
                      elit magna fugiat eiusmod amet officia.
                    </p>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Example with list-group</h5>
            </div>
            {/* end card-header */}
            <div className="card-body">
              <p className="text-muted">
                Scrollspy also works with nested <code>.nav</code>s. If a nested
                <code>.nav</code> is <code>.active</code>, its parents will also
                be <code>.active</code>. Scroll the area next to the navbar and
                watch the active class change.
              </p>
              <div className="row">
                <div className="col-2">
                  <div id="list-example" className="list-group">
                    <Link
                      className={`list-group-item list-group-item-action${activeList === "list-item-1" ? " active" : ""}`}
                      to="#list-item-1"
                    >
                      Item 1
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action${activeList === "list-item-2" ? " active" : ""}`}
                      to="#list-item-2"
                    >
                      Item 2
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action${activeList === "list-item-3" ? " active" : ""}`}
                      to="#list-item-3"
                    >
                      Item 3
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action${activeList === "list-item-4" ? " active" : ""}`}
                      to="#list-item-4"
                    >
                      Item 4
                    </Link>
                  </div>
                </div>
                {/* end col */}
                <div className="col-10">
                  <div
                    className="scrollspy-example list-scrollspy"
                    style={{ height: 250, overflow: "auto" }}
                  >
                    <h4 className="fs-16" id="list-item-1">
                      Item 1
                    </h4>
                    <p>
                      Ex consequat commodo adipisicing exercitation aute
                      excepteur occaecat ullamco duis aliqua id magna ullamco
                      eu. Do aute ipsum ipsum ullamco cillum consectetur ut et
                      aute consectetur labore. Fugiat laborum incididunt tempor
                      eu consequat enim dolore proident. Qui laborum do non
                      excepteur nulla magna eiusmod consectetur in. Aliqua et
                      aliqua officia quis et incididunt voluptate non anim
                      reprehenderit adipisicing dolore ut consequat deserunt
                      mollit dolore. Aliquip nulla enim veniam non fugiat id
                      cupidatat nulla elit cupidatat commodo velit ut eiusmod
                      cupidatat elit dolore.
                    </p>
                    <h4 className="fs-16" id="list-item-2">
                      Item 2
                    </h4>
                    <p>
                      Quis magna Lorem anim amet ipsum do mollit sit cillum
                      voluptate ex nulla tempor. Laborum consequat non elit enim
                      exercitation cillum aliqua consequat id aliqua. Esse ex
                      consectetur mollit voluptate est in duis laboris ad sit
                      ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                      Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                      esse irure. Laborum nisi sit est tempor laborum mollit
                      labore officia laborum excepteur commodo non commodo dolor
                      excepteur commodo. Ipsum fugiat ex est consectetur ipsum
                      commodo tempor sunt in proident.
                    </p>
                    <h4 className="fs-16" id="list-item-3">
                      Item 3
                    </h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                    <h4 className="fs-16" id="list-item-4">
                      Item 4
                    </h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            ©
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
        {/* End Footer */}
      </div>
      {/* ========================
            End Page Content
        ========================= */}
    </>
  );
};

export default UiScrollspy;
