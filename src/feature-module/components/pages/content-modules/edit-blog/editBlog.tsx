import { Link } from "react-router";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { Category } from "../../../../../core/common/selectOption";
import DefaultEditor from "react-simple-wysiwyg";
import TagInput from "../../../../../core/common/Taginput";
import { useState } from "react";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";

const EditBlog = () => {
  const [tags, setTags] = useState<string[]>(["Preventive Care"]);
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
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Health First: Your Guide to Better Living"
                    />
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
                  <div className="mb-3">
                    <div className="selected-img">
                      <ImageWithBasePath
                        src="assets/img/blogs/blog-img-01.jpg"
                        alt="img"
                        className="avatar avatar-xxl img-fluid"
                      />
                      <Link to="#" className="close-img">
                        <i className="ti ti-circle-x-filled" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <Link to="#" className="btn btn-light me-2">
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Save Changes
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
              Symplify
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

export default EditBlog;
