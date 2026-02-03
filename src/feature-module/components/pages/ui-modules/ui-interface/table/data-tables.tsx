import { useState } from "react";
import { Link } from "react-router";
import SearchInput from "../../../../../../core/common/dataTable/dataTableSearch";
import Datatable from "../../../../../../core/common/dataTable";
import { DataTablesData } from "../../../../../../core/json/dataTablesData";

const DataTables = () => {
  const data = DataTablesData;
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Position",
      dataIndex: "Position",
      sorter: (a: any, b: any) => a.Position.length - b.Position.length,
    },
    {
      title: "Office",
      dataIndex: "Office",
      sorter: (a: any, b: any) => a.Office.length - b.Office.length,
    },
    {
      title: "Age",
      dataIndex: "Age",
      sorter: (a: any, b: any) => a.Age.length - b.Age.length,
    },
    {
      title: "Start date",
      dataIndex: "Start_date",
      sorter: (a: any, b: any) => a.Start_date.length - b.Start_date.length,
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      sorter: (a: any, b: any) => a.Salary.length - b.Salary.length,
    },
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
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Data Tables</h3>
              </div>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Default Datatable</h4>
                  <p className="card-text">
                    This is the most basic example of the datatables with zero
                    configuration. Use the
                    <code>.datatable</code> class to initialize datatables.
                  </p>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div className="table-search d-flex align-items-center">
                    <div className="search-input">
                      <SearchInput value={searchText} onChange={handleSearch} />
                    </div>
                  </div>
                  <div className="table-responsive">
                    <Datatable
                      columns={columns}
                      dataSource={data}
                      Selection={false}
                      searchText={searchText}
                    />
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
  );
};

export default DataTables;
