import React from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import Footer from "../../../../../../core/common/footer/footer";

const UiLightboxes = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div className="flex-grow-1">
            <h4 className="fw-bold mb-0">Lightbox</h4>
          </div>
          <div className="text-end">
            <ol className="breadcrumb m-0 py-0">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Base UI</Link>
              </li>
              <li className="breadcrumb-item active">Lightbox</li>
            </ol>
          </div>
        </div>
        {/* End Page Header */}

        <div className="row">
          {/* Lightbox */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single Image Lightbox</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "assets/img/media/img-01.jpg" },
                      { src: "assets/img/media/img-02.jpg" },
                    ]}
                  />
                  <div className="col-md-4 mb-2 mb-md-0">
                    <Link
                      onClick={() => setOpen1(true)}
                      to="#"
                      className="image-popup"
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-01.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <Link
                      to="#"
                      className="image-popup"
                      onClick={() => setOpen1(true)}
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-02.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image with Description</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <Lightbox
                      open={open2}
                      close={() => setOpen2(false)}
                      slides={[
                        { src: "assets/img/media/img-03.jpg" },
                        { src: "assets/img/media/img-04.jpg" },
                        { src: "assets/img/media/img-05.jpg" },
                      ]}
                    />
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 01"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/media/img-03.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 02"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/media/img-04.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 03"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/media/img-05.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Lightbox */}
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UiLightboxes;
