import  { useState } from "react";
import { Link } from "react-router";
import { NewslettersData } from "../../../../core/json/NewslettersData";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../core/common/dataTable";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../../core/imageWithBasePath";

const Newsletters = () => {
  const data = NewslettersData;
  const columns = [
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Created On",
      dataIndex: "CreatedOn",
      sorter: (a: any, b: any) => a.CreatedOn.length - b.CreatedOn.length,
    }
  ];
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="mb-3 pb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Newsletter</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
                Total Newsletter : 565
              </span>
            </div>
          </div>
          {/* End Page Header */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span> Recent
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Oldest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Table List */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={searchText}
            />
          </div>
          {/* /Table List */}
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

        {/* Start Delete Modal  */}
  <div className="modal fade" id="delete_categories">
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
              to={all_routes.blogComments}
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
  );
};

export default Newsletters;
