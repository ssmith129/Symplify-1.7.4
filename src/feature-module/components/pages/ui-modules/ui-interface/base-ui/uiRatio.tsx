
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";

const UiRatio = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 py-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Ratio Video</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Ratio Video</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Responsive Ratio video 21:9</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use class <code>.ratio-21x9</code>
                    {/* 21:9 aspect ratio */}
                  </p>
                  <div className="ratio ratio-21x9">
                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Responsive Ratio video 1:1</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use class <code>.ratio-1x1</code>
                  </p>
                  {/* 1:1 aspect ratio */}
                  <div className="ratio ratio-1x1">
                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
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
                  <h5 className="card-title">Responsive Ratio video 16:9</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use class <code>.ratio-16x9</code>
                  </p>
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Responsive Ratio video 4:3</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use class <code>.ratio-4x3</code>
                  </p>
                  {/* 4:3 aspect ratio */}
                  <div className="ratio ratio-4x3">
                    <iframe src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0" />
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

export default UiRatio;
