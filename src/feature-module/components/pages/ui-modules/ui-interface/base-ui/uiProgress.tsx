
import { Link } from "react-router";

const UiProgress = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Progress</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Progress</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Progress</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use the <code>.progress</code> as a wrapper to indicate the
                    max value of the progress bar.
                  </p>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "0%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "25%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "50%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "75%" }} />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Backgrounds</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use background utility classes to change the appearance of
                    individual progress bars.
                  </p>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-secondary"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Striped Progress</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Add <code>.progress-bar-striped</code> to any
                    <code>.progress-bar</code> to apply a stripe via CSS
                    gradient over the progress bar’s background color.
                  </p>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-secondary"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-success"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-info"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped bg-warning"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Progress Height</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    We only set a <code>height</code> value on the
                    <code>.progress</code>, so if you change that value the
                    inner <code>.progress-bar</code> will automatically resize
                    accordingly. Use <code>.progress-sm</code>,
                    <code>.progress-md</code>,<code>.progress-lg</code>,
                    <code>.progress-xl</code> classes.
                  </p>
                  <div className="progress mb-3" style={{ height: 1 }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress mb-3" style={{ height: 3 }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%", height: 20 }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress mb-3 progress-sm">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress mb-3 progress-md">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-lg mb-3">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress progress-xl">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Progress with Labels</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add labels to your progress bars by placing text within the
                    <code>.progress-bar</code>.
                  </p>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "10%" }}>
                      10%
                    </div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-secondary"
                      style={{ width: "20%" }}
                    >
                      20%
                    </div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "40%" }}
                    >
                      40%
                    </div>
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-info"
                      style={{ width: "60%" }}
                    >
                      60%
                    </div>
                  </div>
                  <div
                    className="progress mb-0"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple Bars with Sizes</h5>
                </div>
                <div className="card-body">
                  <p>
                    You can include multiple progress components inside a
                    container with <code>.progress-stacked</code> to create a
                    single stacked progress bar.
                  </p>
                  <div className="progress-stacked progress-xs mb-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "5%" }}
                      aria-valuenow={5}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress-stacked progress-sm mb-3">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress-stacked mb-3">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress-stacked progress-lg mb-3">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className="progress-stacked progress-xl mb-0">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Animated Stripped Progress</h5>
                </div>
                <div className="card-body">
                  <p>
                    The striped gradient can also be animated. Add
                    <code>.progress-bar-animated</code> to
                    <code>.progress-bar</code> to animate the stripes right to
                    left via CSS3 animations.
                  </p>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: "10%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                      style={{ width: "80%" }}
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Gradient Progress</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code>.bg-primary-gradient</code> to any
                    <code>.progress-bar</code> to apply a CSS gradient over the
                    progress bar’s background color.
                  </p>
                  <div
                    className="progress mb-3 progress-animate"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-primary-gradient"
                      style={{ width: "10%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3 progress-animate"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-secondary-gradient"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3 progress-animate"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-success-gradient"
                      style={{ width: "40%" }}
                    />
                  </div>
                  <div
                    className="progress mb-3 progress-animate"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-info-gradient"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div
                    className="progress progress-animate"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-warning-gradient"
                      style={{ width: "80%" }}
                    />
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
			Start Page Content
		========================= */}
    </>
  );
};

export default UiProgress;
