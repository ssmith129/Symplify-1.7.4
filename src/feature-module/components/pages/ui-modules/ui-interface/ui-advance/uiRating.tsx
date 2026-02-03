import { useState } from "react";
import { RotateCcw } from "react-feather";
import { Link } from "react-router";
import StarRatings from "react-star-ratings";

const UiRating = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [rating7, setRating7] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const [isLoading] = useState(false);

  const handleStarHover = () => {
    setHoverCount((prevCount) => Math.min(prevCount + 1, 5));
  };
  const handleRatingChange1 = (newRating: any) => {
    setRating1(newRating);
  };
  const handleReset = () => {
    setRating3(0);
  };

  const handleRatingChange2 = (newRating: any) => {
    setRating2(newRating);
  };
  const handleRatingChange3 = (newRating: any) => {
    setRating3(newRating);
  };
  const handleRatingChange4 = (newRating: any) => {
    setRating4(newRating);
  };
  const handleRatingChange5 = (newRating: any) => {
    setRating5(newRating);
  };
  const handleRatingChange6 = (newRating: any) => {
    setRating6(newRating);
  };
  const handleRatingChange7 = (newRating: any) => {
    setRating7(newRating);
  };
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div className="flex-grow-1">
            <h4 className="fw-bold mb-0">Rating</h4>
          </div>
          <div className="text-end">
            <ol className="breadcrumb m-0 py-0">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Advanced UI</Link>
              </li>
              <li className="breadcrumb-item active">Rating</li>
            </ol>
          </div>
        </div>
        {/* End Page Header */}

        <div className="row">
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Basic Rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Show Some <span className="text-danger">❤</span> with rating
                    :
                  </p>
                  <StarRatings
                    rating={rating2}
                    starRatedColor="gold"
                    changeRating={handleRatingChange2}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">5 star rater with steps</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Dont forget to rate the product :
                  </p>
                  <StarRatings
                    rating={rating3}
                    starRatedColor="gold"
                    changeRating={handleRatingChange3}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Custom messages</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Your rating is much appreciated👏 :
                  </p>
                  <StarRatings
                    rating={rating1}
                    starRatedColor="gold"
                    changeRating={handleRatingChange1}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  Unlimited number of stars readOnly
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  <StarRatings
                    rating={rating4}
                    starRatedColor="gold"
                    changeRating={handleRatingChange4}
                    numberOfStars={10}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  5 Star rater with custom isBusyText and simulated backend
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <StarRatings
                      rating={rating5}
                      starRatedColor="gold"
                      changeRating={handleRatingChange5}
                      numberOfStars={5}
                      name="rating"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">On hover event</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Please give your valuable rating :
                  </p>
                  <div
                    className="d-flex flex-wrap align-items-center"
                    onMouseOver={handleStarHover}
                    style={{ fontSize: "24px", cursor: "pointer" }}
                  >
                    <StarRatings
                      rating={rating6}
                      starRatedColor="gold"
                      changeRating={handleRatingChange6}
                      numberOfStars={5}
                      name="rating"
                    />

                    <span className="live-rating badge bg-success-transparent ms-3">
                      {hoverCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Clear/reset rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Thank You so much for your support :
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                    <StarRatings
                      rating={rating7}
                      starRatedColor="gold"
                      changeRating={handleRatingChange7}
                      numberOfStars={5}
                      name="rating"
                    />

                    <button
                      className="btn btn-icon btn-sm btn-danger-light ms-3"
                      id="rater-reset-button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Reset"
                      onClick={handleReset}
                    >
                      <RotateCcw className="feather-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiRating;
