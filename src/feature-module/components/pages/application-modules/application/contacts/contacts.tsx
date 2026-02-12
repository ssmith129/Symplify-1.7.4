import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { contactType } from "../../../../../../core/common/selectOption";
import SearchInput from "../../../../../../core/common/dataTable/dataTableSearch";
import { useState } from "react";
import { all_routes } from "../../../../../routes/all_routes";

const Contacts = () => {
    const [searchText, setSearchText] = useState<string>("");
  
    const handleSearch = (value: string) => {
      setSearchText(value);
    };
  return (
    <>
      <>
        {/* ========================
			Start Page Content
		========================= */}
        <div className="page-wrapper">
          {/* Start Container */}
          <div className="content content-two">
            <div className="mb-3">
              <h4 className="fw-bold mb-0">Contacts</h4>
            </div>
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
              <div className="d-flex mb-3 align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-1">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-1">
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="dropdown-item rounded-1"
                      >
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  to="#"
                  className="btn btn-primary ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#add-contact"
                >
                  <i className="ti ti-circle-plus me-1" />
                  Add Contact
                </Link>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-nowrap datatable">
                <thead className="thead-light">
                  <tr>
                    <th className="no-sort">
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="select-all"
                        />
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="no-sort" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-33.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Carl Evans</Link>
                      </div>
                    </td>
                    <td>carlevans@example.com</td>
                    <td>+12163547758</td>
                    <td>Admin</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-02.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Minerva Rameriz</Link>
                      </div>
                    </td>
                    <td>rameriz@example.com</td>
                    <td>+11367529510 </td>
                    <td>Manager</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-34.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Robert Lamon</Link>
                      </div>
                    </td>
                    <td>robert@example.com</td>
                    <td>+15362789414</td>
                    <td>Salesman</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-35.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Patricia Lewis</Link>
                      </div>
                    </td>
                    <td>patricia@example.com</td>
                    <td>+18513094627</td>
                    <td>Supervisor</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm  me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-36.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Mark Joslyn</Link>
                      </div>
                    </td>
                    <td>markjoslyn@example.com</td>
                    <td>+14678219025</td>
                    <td>Store Keeper</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-37.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Marsha Betts</Link>
                      </div>
                    </td>
                    <td>marshabetts@example.com</td>
                    <td>+10913278319</td>
                    <td>Purchase</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-28.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Daniel Jude</Link>
                      </div>
                    </td>
                    <td>daieljude@example.com</td>
                    <td>+19125852947</td>
                    <td>Delivery Biker</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-38.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Emma Bates</Link>
                      </div>
                    </td>
                    <td>emmabates@example.com</td>
                    <td>+13671835209</td>
                    <td>Maintenance</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-39.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Richard Fralick</Link>
                      </div>
                    </td>
                    <td>richard@example.com</td>
                    <td>+19756194733</td>
                    <td>Quality Analyst</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check form-check-md">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link to="#" className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src="assets/img/users/user-03.jpg"
                            alt="product"
                            className="rounded-circle"
                          />
                        </Link>
                        <Link to="#">Michelle Robison</Link>
                      </div>
                    </td>
                    <td>robinson@example.com</td>
                    <td>+19167850925</td>
                    <td>Accountant</td>
                    <td>
                      <span className="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10">
                        <i className="ti ti-point-filled me-1 fs-11" />
                        Active
                      </span>
                    </td>
                    <td className="action-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="fa-solid fa-ellipsis" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-contact"
                          >
                            <i className="isax isax-eye me-2" />
                            Edit
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="isax isax-trash me-2" />
                            Delete
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* container */}

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

      {/* Start Add Customer */}
      <div className="modal fade" id="add-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h5>Add Contact</h5>
              </div>
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
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                    <i className="ti ti-photo text-primary" />
                  </div>
                  <div className="d-inline-flex flex-column align-items-start">
                    <div className="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                      <i className="ti ti-photo me-1" />
                      Upload Image
                      <input
                        type="file"
                        className="form-control image-sign"
                        multiple
                      />
                    </div>
                    <span className="text-gray-9 fs-12">
                      JPG or PNG format, not exceeding 5MB.
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="tel" className="form-control" />
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        Contact Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        options={contactType}
                        className="select"
                        defaultValue={contactType[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Customer */}
      {/* Start Edit Customer */}
      <div className="modal fade" id="edit-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="page-title">
                <h5>Edit Contact</h5>
              </div>
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
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                    <i className="ti ti-photo text-primary" />
                  </div>
                  <div className="d-inline-flex flex-column align-items-start">
                    <div className="drag-upload-btn btn btn-sm btn-primary position-relative mb-2">
                      <i className="ti ti-photo me-1" />
                      Upload Image
                      <input
                        type="file"
                        className="form-control image-sign"
                        multiple
                      />
                    </div>
                    <span className="text-gray-9 fs-12">
                      JPG or PNG format, not exceeding 5MB.
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Carl"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Evans"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="carlevans@example.com"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={+12163547758}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        Contact Type <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        options={contactType}
                        className="select"
                        defaultValue={contactType[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Edit Customer */}

      {/* Start Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="mb-3">
                <span className="avatar bg-danger">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h6 className="mb-1">Delete Confirmation</h6>
              <p className="mb-3">Are you sure want to delete?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.contacts} className="btn btn-danger">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal  */}
    </>
  );
};

export default Contacts;
