import React from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";

import Lightbox from "yet-another-react-lightbox";

const Gallery = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);

  // Gallery images array for lightbox
  const galleryImages = [
    "/assets/img/gallery/gallery-01.jpg",
    "/assets/img/gallery/gallery-02.jpg",
    "/assets/img/gallery/gallery-03.jpg",
    "/assets/img/gallery/gallery-04.jpg",
    "/assets/img/gallery/gallery-05.jpg",
    "/assets/img/gallery/gallery-06.jpg",
    "/assets/img/gallery/gallery-07.jpg",
    "/assets/img/gallery/gallery-08.jpg",
    "/assets/img/gallery/gallery-09.jpg",
    "/assets/img/gallery/gallery-10.jpg",
    "/assets/img/gallery/gallery-11.jpg",
    "/assets/img/gallery/gallery-12.jpg",
    "/assets/img/gallery/gallery-13.jpg",
    "/assets/img/gallery/gallery-14.jpg",
    "/assets/img/gallery/gallery-15.jpg",
  ];

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="pb-3 mb-3 border-bottom">
            <h4 className="fw-bold mb-0">Gallery</h4>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-body">
              {/* start row */}
              <div className="row row-gap-3 mb-3">
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen1(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-01.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen2(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-02.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open2}
                    close={() => setOpen2(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen3(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-03.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                    <Lightbox
                      open={open3}
                      close={() => setOpen3(false)}
                      slides={galleryImages.map(src => ({ src }))}
                    />
                  </Link>
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen4(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-04.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                    <Lightbox
                      open={open4}
                      close={() => setOpen4(false)}
                      slides={galleryImages.map(src => ({ src }))}
                    />
                  </Link>
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen5(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-05.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open5}
                    close={() => setOpen5(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              {/* start row */}
              <div className="row row-gap-3 mb-3">
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen6(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-06.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open6}
                    close={() => setOpen6(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen7(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-07.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open7}
                    close={() => setOpen7(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen8(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-08.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open8}
                    close={() => setOpen8(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen9(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-09.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open9}
                    close={() => setOpen9(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen10(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-10.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open10}
                    close={() => setOpen10(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              {/* start row */}
              <div className="row row-gap-3">
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen11(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-11.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open11}
                    close={() => setOpen11(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen12(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-12.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open12}
                    close={() => setOpen12(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen13(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-13.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open13}
                    close={() => setOpen13(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen14(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-14.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open14}
                    close={() => setOpen14(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
                </div>
                {/* end col */}
                <div className="col-md-6 col-xl">
                  <Link
                    to="#"
                    onClick={() => setOpen15(true)}
                    data-fancybox="gallery"
                    className="image-popup"
                  >
                    <ImageWithBasePath
                      src="assets/img/gallery/gallery-15.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </Link>
                  <Lightbox
                    open={open15}
                    close={() => setOpen15(false)}
                    slides={galleryImages.map(src => ({ src }))}
                  />
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
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default Gallery;
