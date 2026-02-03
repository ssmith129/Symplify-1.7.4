import { Link } from "react-router"
import { all_routes } from "../../../../../../routes/all_routes"
import ImageWithBasePath from "../../../../../../../core/imageWithBasePath"


const Modals = () => {
  return (
   <>
  {/* Start Delete Modal  */}
  <div className="modal fade" id="generate">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center position-relative">
          <ImageWithBasePath
            src="assets/img/bg/generate-bg-01.png"
            alt=""
            className="img-fluid position-absolute top-0 start-0"
          />
          <ImageWithBasePath
            src="assets/img/bg/generate-bg-02.png"
            alt=""
            className="img-fluid position-absolute bottom-0 end-0"
          />
          <div className="mb-3">
            <span className="avatar avatar-lg bg-info text-white">
              <i className="ti ti-folder fs-24" />
            </span>
          </div>
          <h5 className="fw-bold mb-1">Generate Backup</h5>
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
              to={all_routes.systembackupsettings}
              className="btn btn-primary position-relative z-1"
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