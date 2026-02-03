import ImageWithBasePath from "../../../../../../../core/imageWithBasePath"


const Modals = () => {
  return (
    <>
  {/* Start Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_1">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 1</h4>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex align-items-center justify-content-center">
            <ImageWithBasePath
              className="w-100 invoice-template-img"
              src="assets/img/invoice/general-invoice-61.svg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Invoivce View */}
  {/* Start Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_2">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 2</h4>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex align-items-center justify-content-center">
            <ImageWithBasePath
              className="w-100 invoice-template-img"
              src="assets/img/invoice/general-invoice-62.svg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Invoivce View */}
  {/* Start Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_3">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 3</h4>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex align-items-center justify-content-center">
            <ImageWithBasePath
              className="w-100 invoice-template-img"
              src="assets/img/invoice/general-invoice-63.svg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Invoivce View */}
  {/* Start Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_4">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 4</h4>
          <button
            type="button"
            className="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex align-items-center justify-content-center">
            <ImageWithBasePath
              className="w-100 invoice-template-img"
              src="assets/img/invoice/general-invoice-64.svg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Invoivce View */}
</>
  )
}

export default Modals