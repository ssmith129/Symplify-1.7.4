
import { Link } from 'react-router'
import ImageWithBasePath from '../../../../../../../core/imageWithBasePath'

const FormFileupload = () => {
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
          <h4 className="fs-18 fw-semibold mb-0">File Uploads</h4>
        </div>
        <div className="text-end">
          <ol className="breadcrumb m-0 py-0">
            <li className="breadcrumb-item">
              <Link to="#">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Forms</Link>
            </li>
            <li className="breadcrumb-item active">File Uploads</li>
          </ol>
        </div>
      </div>
      {/* End Page Header */}
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Dropzone File Upload</h5>
        </div>
        <div className="card-body">
          <p className="text-muted">
            DropzoneJS is an open source library that provides drag’n’drop file
            uploads with image previews.
          </p>
          <form
            action="/"
            method="post"
            className="dropzone"
            id="myAwesomeDropzone"
            data-plugin="dropzone"
            data-previews-container="#file-previews"
            data-upload-preview-template="#uploadPreviewTemplate"
          >
            <div className="fallback">
              <input name="file" type="file" multiple />
            </div>
            <div className="dz-message needsclick">
              <i className="ti ti-cloud-upload h1 text-muted" />
              <h3>Drop files here or click to upload.</h3>
              <span className="text-muted fs-13">
                (This is just a demo dropzone. Selected files are
                <strong>not</strong> actually uploaded.)
              </span>
            </div>
          </form>
          {/* Preview */}
          <div className="dropzone-previews mt-3" id="file-previews" />
        </div>
        {/* end card-body */}
      </div>
      {/* end card */}
      {/* file preview template */}
      <div className="d-none" id="uploadPreviewTemplate">
        <div className="mt-1 mb-0 shadow-none border">
          <div className="p-2">
            {/* start row */}
            <div className="row align-items-center">
              <div className="col-auto">
                <ImageWithBasePath
                  data-dz-thumbnail=""
                  src="#"
                  className="avatar-sm rounded bg-light"
                  alt="User Img"
                />
              </div>
              {/* end col */}
              <div className="col ps-0">
                <Link
                  to="#"
                  className="text-muted fw-bold"
                  data-dz-name=""
                />
                <p className="mb-0" data-dz-size="" />
              </div>
              {/* end col */}
              <div className="col-auto">
                <Link
                  to="#"
                  className="btn btn-link btn-lg text-muted"
                  data-dz-remove=""
                >
                  <i className="ti ti-x" />
                </Link>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
        </div>
      </div>
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
			End Page Content
		========================= */}
</>

  )
}

export default FormFileupload
