import { Link } from "react-router"
import { all_routes } from "../../../../../../routes/all_routes"
import ImageWithBasePath from "../../../../../../../core/imageWithBasePath"
import { useState } from "react";
import TagInput from "../../../../../../../core/common/Taginput";
import DefaultEditor from "react-simple-wysiwyg";


const Modals = () => {

    const [tags, setTags] = useState<string[]>([
        "Company Name",
        "Customer Name",
        "Clinic Name",
        "User Email",
        "Invoice ID",
        "Date",
        "Support Email",
        "Phone Number",
        "Invoice Amount",
        "Shipping Address",
        "Billing Address",
        "Doctor Name",
        "Patient Name",
      ]);
      const handleTagsChange = (newTags: string[]) => {
        setTags(newTags);
      };


  return (
    <>
  {/* Start Add Categories */}
  <div id="add_template" className="modal fade">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="text-dark modal-title fw-bold">Add Template</h5>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Template Name<span className="text-danger ms-1">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-0">
              <label className="form-label">Content</label>
              <div className="editor three-line">
                <DefaultEditor/>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center gap-1">
            <button
              type="button"
              className="btn btn-white border"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Template
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* End Add Categories */}
  {/* Start Edit Categories */}
  <div id="edit_reason" className="modal fade">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="text-dark modal-title fw-bold">Edit Template</h5>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Template Name<span className="text-danger ms-1">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Welcome Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content</label>
              <div className="editor three-line">
                <p>
                  Hi {"{"}Patient Name{"}"}, your appointment with Dr.{"{"}
                  Doctor Name{"}"} on {"{"}Date{"}"} at {"{"}Time{"}"} is
                  confirmed. – {"{"}Clinic Name{"}"}
                </p>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Tags</label>
               <TagInput
                    initialTags={tags}
                    onTagsChange={handleTagsChange}
                  />
            </div>
            <div className="mb-0">
              <div className="d-flex align-items-center justify-content-between">
                <label className="form-label">Status</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center gap-1">
            <button
              type="button"
              className="btn btn-white border"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* End Edit Categories */}
  {/* Start Delete Modal  */}
  <div className="modal fade" id="delete_reason">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center position-relative">
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-01.png"
            alt=""
            className="img-fluid position-absolute top-0 start-0"
          />
          <ImageWithBasePath
            src="assets/img/bg/delete-modal-bg-02.png"
            alt=""
            className="img-fluid position-absolute bottom-0 end-0"
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
              to={all_routes.smstemplatessettings}
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