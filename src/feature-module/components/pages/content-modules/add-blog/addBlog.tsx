import { Link } from "react-router";
import { Category } from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { useState } from "react";
import TagInput from "../../../../../core/common/Taginput";
import { all_routes } from "../../../../routes/all_routes";
import DefaultEditor from "react-simple-wysiwyg";

const AddBlog = () => {
  const [tags, setTags] = useState<string[]>();
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
          {/* start row */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="mb-3">
                <h6 className="fw-semibold">
                  <Link to={all_routes.blogs}>
                    <i className="ti ti-chevron-left me-1" />
                    Blogs
                  </Link>
                </h6>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <CommonSelect
                      options={Category}
                      className="select"
                      defaultValue={Category[0]}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Content</label>
                    <div className="editor">
                      <DefaultEditor />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tag</label>
                    <TagInput
                      initialTags={tags}
                      onTagsChange={handleTagsChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Feature Image</label>
                    <input className="form-control" type="file" />
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <Link to="#" className="btn btn-light me-2">
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Add Blog
                    </Link>
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
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
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

export default AddBlog;
