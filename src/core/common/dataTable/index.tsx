// index.tsx
import React, { useEffect, useState } from "react";
import { Select, Table } from "antd";
import type { DatatableProps } from "../../data/interface";

const { Option } = Select;

const Datatable: React.FC<DatatableProps> = ({
  columns,
  dataSource,
  Selection,
  searchText,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [Selections, setSelections] = useState<any>(true);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setSelections(Selection);
  }, [Selection]);

  useEffect(() => {
    const filteredData = dataSource.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredDataSource(filteredData);
  }, [searchText, dataSource]);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      className="table table-nowrap datatable"
      rowSelection={Selections ? rowSelection : undefined}
      columns={columns}
      rowHoverable={false}
      dataSource={filteredDataSource}
      pagination={{
        showSizeChanger: false,
        pageSize,
        onShowSizeChange: (size) => setPageSize(size),
        total: filteredDataSource.length,
        showTotal: (total) => (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Rows per page:
            <Select
              value={pageSize}
              onChange={(value) => setPageSize(value)}
              style={{ width: 80 }}
              popupMatchSelectWidth={false}
            >
              <Option value={10}>10</Option>
              <Option value={20}>20</Option>
              <Option value={30}>30</Option>
            </Select>
            of {total} Entries
          </div>
        ),
        nextIcon: <i className="ti ti-chevron-right" />,
        prevIcon: <i className="ti ti-chevron-left" />,
      }}
    />
  );
};

export default Datatable;
