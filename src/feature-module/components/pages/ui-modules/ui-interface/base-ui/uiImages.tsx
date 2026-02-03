
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";


const UiImages = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Images</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Images</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Images Shapes</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-12">
                      <p className="text-muted">
                        Add classes to an <code>&lt;img&gt;</code> element to
                        easily style images in any project.
                      </p>
                      <div className="row">
                        <div className="col-sm-3">
                          <ImageWithBasePath
                            src="assets/img/media/img-4.jpg"
                            alt="image"
                            className="img-fluid rounded"
                            width={200}
                          />
                          <p className="mb-0">
                            <code>.rounded</code>
                          </p>
                        </div>
                        <div className="col-sm-3">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="image"
                            className="img-fluid rounded-circle"
                            width={133}
                          />
                          <p className="mb-0">
                            <code>.rounded-circle</code>
                          </p>
                        </div>
                        <div className="col-sm-3">
                          <ImageWithBasePath
                            src="assets/img/media/img-1.jpg"
                            alt="image"
                            className="img-fluid img-thumbnail"
                            width={200}
                          />
                          <p className="mb-0">
                            <code>.img-thumbnail</code>
                          </p>
                        </div>
                        <div className="col-sm-3">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="image"
                            className="img-thumbnail rounded-pill"
                            width={133}
                          />
                          <p className="mb-0">
                            <code>.rounded-pill</code>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            {/* Image Left Align */}
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image Left Align</h5>
                </div>
                <div className="card-body">
                  <ImageWithBasePath
                    className="rounded float-start"
                    src="assets/img/media/img-1.jpg"
                    alt="..."
                    width={200}
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            {/* Image Center Align */}
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image Center Align</h5>
                </div>
                <div className="card-body">
                  <ImageWithBasePath
                    className="rounded mx-auto d-block"
                    src="assets/img/media/img-1.jpg"
                    alt="..."
                    width={200}
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image Right Align</h5>
                </div>
                <div className="card-body">
                  <ImageWithBasePath
                    className="rounded float-end"
                    src="assets/img/media/img-1.jpg"
                    alt="..."
                    width={200}
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            {/* Figures */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Figures</h5>
                </div>
                <div className="card-body d-flex justify-content-between gap-2 pb-1">
                  <figure className="figure">
                    <ImageWithBasePath
                      className="bd-placeholder-img figure-img img-fluid rounded card-img"
                      src="assets/img/media/img-1.jpg"
                      alt="..."
                    />
                    <figcaption className="figure-caption">
                      A caption for the above image.
                    </figcaption>
                  </figure>
                  <figure className="figure float-end">
                    <ImageWithBasePath
                      className="bd-placeholder-img figure-img img-fluid rounded card-img"
                      src="assets/img/media/img-1.jpg"
                      alt="..."
                    />
                    <figcaption className="figure-caption text-end">
                      A caption for the above image.
                    </figcaption>
                  </figure>
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

export default UiImages;
