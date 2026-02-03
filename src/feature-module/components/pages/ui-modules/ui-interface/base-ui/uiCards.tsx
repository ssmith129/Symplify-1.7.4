
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import Footer from "../../../../../../core/common/footer/footer";


const UiCards = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Cards</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Cards</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="card d-block">
                <ImageWithBasePath
                  className="card-img-top"
                  src="assets/img/media/img-1.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card d-block">
                <ImageWithBasePath
                  className="card-img-top"
                  src="assets/img/media/img-2.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card..
                  </p>
                </div>
                {/* end card body */}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                </ul>
                <div className="card-body">
                  <Link
                    to="#"
                    className="card-link text-custom"
                  >
                    Card link
                  </Link>
                  <Link
                    to="#"
                    className="card-link text-custom"
                  >
                    Another link
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card d-block">
                <ImageWithBasePath
                  className="card-img-top"
                  src="assets/img/media/img-3.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card d-block">
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <h6 className="card-subtitle text-muted">
                    Support card subtitle
                  </h6>
                </div>
                {/* end card body */}
                <ImageWithBasePath
                  className="img-fluid"
                  src="assets/img/media/img-4.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link
                    to="#"
                    className="card-link text-custom"
                  >
                    Card link
                  </Link>
                  <Link
                    to="#"
                    className="card-link text-custom"
                  >
                    Another link
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-sm-6">
              <div className="card card-body">
                <h5 className="card-title mb-2">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6">
              <div className="card card-body">
                <h5 className="card-title mb-2">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header bg-light">Featured</h5>
                <div className="card-body">
                  <h5 className="card-title mb-2">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-light">Quote</div>
                <div className="card-body">
                  <blockquote className="card-bodyquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-light">Featured</div>
                <div className="card-body">
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
                {/* end card body */}
                <div className="card-footer border-top border-light text-muted">
                  2 days ago
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3 mt-3">Card Colored</h4>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-secondary">
                <div className="card-body">
                  <h5 className="card-title text-white">
                    Special title treatment
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary btn-sm"
                  >
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-primary">
                <div className="card-body">
                  <blockquote className="card-bodyquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-success">
                <div className="card-body">
                  <blockquote className="card-bodyquote">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-info">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-warning">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-danger">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-secondary bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-primary bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-success bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-info bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-warning bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-sm-6">
              <div className="card text-bg-danger bg-gradient">
                <div className="card-body">
                  <blockquote className="card-bodyquote mb-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer>
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3 mt-3">Card Bordered</h4>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-md-4">
              <div className="card border-secondary border">
                <div className="card-body">
                  <h5 className="card-title mb-2">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-secondary btn-sm"
                  >
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-md-4">
              <div className="card border-primary border border-dashed">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Special title treatment
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary btn-sm"
                  >
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-md-4">
              <div className="card border-success border">
                <div className="card-body">
                  <h5 className="card-title text-success">
                    Special title treatment
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link
                    to="#"
                    className="btn btn-success btn-sm"
                  >
                    Button
                  </Link>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3 mt-3">Horizontal Card</h4>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <ImageWithBasePath
                      src="assets/img/media/img-06.png"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title mb-2">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    {/* end card body */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="card">
                <div className="row g-0 align-items-center">
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title mb-2">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end col */}
                  <div className="col-md-4">
                    <ImageWithBasePath
                      src="assets/img/media/img-07.png"
                      className="img-fluid rounded-end"
                      alt="..."
                    />
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3 mt-3">Stretched link</h4>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/media/img-2.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card with stretched link</h5>
                  <Link to="#" className="btn btn-primary mt-2 stretched-link">
                    Go somewhere
                  </Link>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/media/img-3.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    <Link to="#" className="text-success stretched-link">
                      Card with stretched link
                    </Link>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card up the bulk of
                    the card's content.
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/media/img-4.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card with stretched link</h5>
                  <Link to="#" className="btn btn-info mt-2 stretched-link">
                    Go somewhere
                  </Link>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/media/img-1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    <Link to="#" className="stretched-link">
                      Card with stretched link
                    </Link>
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card up the bulk of
                    the card's content.
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <h4 className="mb-3 mt-3">Card Group</h4>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12">
              <div className="card-group mb-3">
                <div className="card d-block">
                  <ImageWithBasePath
                    className="card-img-top"
                    src="assets/img/media/img-1.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                {/* end card body */}
                <div className="card d-block">
                  <ImageWithBasePath
                    className="card-img-top"
                    src="assets/img/media/img-2.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                {/* end card body */}
                <div className="card d-block">
                  <ImageWithBasePath
                    className="card-img-top"
                    src="assets/img/media/img-3.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <Footer/>
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default UiCards;
