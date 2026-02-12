import { useState } from "react";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { Link } from "react-router";
import PredefinedDatePicker from "../../../../core/common/datePicker";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";

const AttendanceList = () => {
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
          {/* Start Page Header */}
          <div className="mb-3 pb-3 border-bottom">
            <h4 className="fw-bold mb-0">Attendance</h4>
          </div>
          {/* End Page Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center">
                <div className="table-search d-flex align-items-center mb-0 me-2">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
                <div className="d-flex right-content align-items-center flex-wrap">
                  <div className=" position-relative">
                    <span className="input-icon-addon fs-14 text-dark">
                      <i className="ti ti-calendar" />
                    </span>
                    <PredefinedDatePicker />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
              <span className="badge badge-sm badge-soft-success border border-success fw-medium me-2">
                Present
              </span>
              <span className="badge badge-sm badge-soft-danger border border-danger fw-medium me-2">
                Absent
              </span>
              <span className="badge badge-sm badge-soft-info border border-info fw-medium">
                Holiday
              </span>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-nowrap datatable">
              <thead className="thead-light">
                <tr>
                  <th>Staff</th>
                  <th>%</th>
                  <th>01</th>
                  <th>02</th>
                  <th>03</th>
                  <th>04</th>
                  <th>05</th>
                  <th>06</th>
                  <th>07</th>
                  <th>08</th>
                  <th>09</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>19</th>
                  <th>20</th>
                  <th>21</th>
                  <th>22</th>
                  <th>23</th>
                  <th>24</th>
                  <th>25</th>
                  <th>26</th>
                  <th>27</th>
                  <th>28</th>
                  <th>29</th>
                  <th>30</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-08.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">James Adair</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-success border border-success fw-medium">
                      100%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-03.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Adam Milne</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-warning border border-warning fw-medium">
                      70%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-04.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Richard Clark</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-warning border border-warning fw-medium">
                      75%
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-05.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Robert Reid</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-danger border border-danger fw-medium">
                      40%
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-06.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Dottie Jeny</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-success border border-success fw-medium">
                      85%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-07.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Cheryl Bilodeau</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-success border border-success fw-medium">
                      92%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-02.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Valerie Padgett</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-info border border-info fw-medium">
                      55%
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-25.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Diane Nash</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-warning border border-warning fw-medium">
                      70%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-29.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Sally Cavazos</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-info border border-info fw-medium">
                      60%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-12.jpg"
                          alt="Doctor"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="mb-0 fs-14 fw-semibold">
                          <Link to="#">Forest Heath</Link>
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-soft-success border border-success fw-medium">
                      80%
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-info">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-danger">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                  <td>
                    <span className="text-success">
                      <i className="ti ti-square-filled fs-14" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default AttendanceList;
