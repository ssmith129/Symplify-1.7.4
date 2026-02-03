import { Link } from "react-router";
import { Default_Language } from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { useState } from "react";
import TagInput from "../../../../../core/common/Taginput";
import DefaultEditor from "react-simple-wysiwyg";
import { all_routes } from "../../../../routes/all_routes";

const EditPage = () => {
  const [tags, setTags] = useState<string[]>(["departments", "doctors"]);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* row start */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* page header start */}
              <div className="mb-4">
                <h6 className="fs-14 fw-semibold mb-0 d-flex align-items-center">
                  <Link to={all_routes.pages} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Pages
                  </Link>
                </h6>
              </div>
              {/* page header end */}
              {/* card start */}
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Title<span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Specializations"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium text-truncate">
                            Slug
                            <span className="fs-12 fw-normal text-body ms-1">
                              (If you leave it empty, it will be generated
                              automatically)
                            </span>
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="specializations"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium text-truncate">
                            Description
                            <span className="fs-12 fw-normal text-body ms-1">
                              (Meta Tag)
                            </span>
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control text-truncate"
                            defaultValue="Expert doctors by specialization to meet your needs"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium text-truncate">
                            Keywords
                            <span className="fs-12 fw-normal text-body ms-1">
                              (Meta Tag)
                            </span>
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <TagInput
                            initialTags={tags}
                            onTagsChange={handleTagsChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium text-truncate">
                            Location<span className="text-danger ms-1">*</span>
                          </label>
                          <div className="d-flex align-items-center gap-3">
                            <div className="form-check mb-1">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label fw-normal"
                                htmlFor="customRadio1"
                              >
                                Top Menu
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                type="radio"
                                id="customRadio2"
                                name="customRadio"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label fw-normal"
                                htmlFor="customRadio2"
                              >
                                Quick Links
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Language<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Default_Language}
                            className="select"
                            defaultValue={Default_Language[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-0">
                          <label className="form-label">Description</label>
                          <div className="editor pages-editor text-dark">
                            <DefaultEditor />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* card end */}
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#;" className="btn btn-light me-2">
                  Cancel
                </Link>
                <Link to="#;" className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
          {/* row end */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#;" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default EditPage;
