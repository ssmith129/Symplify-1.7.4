import { Link } from "react-router"
import ImageWithBasePath from "../../../../../../../core/imageWithBasePath"
import { all_routes } from "../../../../../../routes/all_routes"


const Modals = () => {
  return (
    <>
  {/* Start Delete Modal  */}
  <div className="modal fade" id="cancel_request">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center position-relative z-1">
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-01.png"
            alt=""
            className="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-02.png"
            alt=""
            className="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div className="mb-3">
            <span className="avatar avatar-lg bg-danger text-white">
              <i className="ti ti-x fs-24" />
            </span>
          </div>
          <h5 className="fw-bold mb-1">Cancel Confirmation</h5>
          <p className="mb-3">Are you sure want to cancel?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link
              to={all_routes.deleteaccountrequest}
              className="btn btn-danger position-relative z-1"
            >
              Yes, Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Delete Modal  */}
  {/* Start Delete Modal  */}
  <div className="modal fade" id="delete_request">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center position-relative z-1">
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-01.png"
            alt=""
            className="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-02.png"
            alt=""
            className="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div className="mb-3">
            <span className="avatar avatar-lg bg-danger text-white">
              <i className="ti ti-trash fs-24" />
            </span>
          </div>
          <h5 className="fw-bold mb-1">Delete Confirmation</h5>
          <p className="mb-3">Are you sure want to delete?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link
              to={all_routes.deleteaccountrequest}
              className="btn btn-danger position-relative z-1"
            >
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Delete Modal  */}
</>

  )
}

export default Modals