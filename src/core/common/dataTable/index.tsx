// index.tsx
import React, { useEffect, useState } from "react";
import { Select, Table } from "antd";
import type { DatatableProps } from "../../data/interface";

const { Option } = Select;

// Skeleton loading rows for table loading state
const SkeletonCell = () => (
  <div
    style={{
      height: 14,
      borderRadius: 4,
      backgroundColor: "var(--light, #F5F6F8)",
      width: `${60 + Math.random() * 30}%`,
      animation: "skeleton-pulse 1.5s ease-in-out infinite",
    }}
  />
);

const Datatable: React.FC<DatatableProps> = ({
  columns,
  dataSource,
  Selection,
  searchText,
  loading = false,
  emptyText,
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

  // Generate skeleton data source for loading state
  const skeletonData = loading
    ? Array.from({ length: pageSize }, (_, i) => ({
        key: `skeleton-${i}`,
        ...Object.fromEntries(
          columns.map((col) => [
            col.dataIndex || col.key || `col-${Math.random()}`,
            "",
          ])
        ),
      }))
    : undefined;

  const skeletonColumns = loading
    ? columns.map((col) => ({
        ...col,
        render: () => <SkeletonCell />,
      }))
    : columns;

  const emptyState = (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <i
        className="ti ti-database-off d-block mb-2"
        style={{
          fontSize: 32,
          opacity: 0.4,
          color: "var(--gray-400, #858D9C)",
        }}
      />
      <p
        style={{
          fontSize: 14,
          color: "var(--gray-500, #595F6E)",
          marginBottom: 4,
        }}
      >
        {emptyText || "No records found"}
      </p>
      {searchText && (
        <p
          style={{
            fontSize: 12,
            color: "var(--gray-400, #858D9C)",
            margin: 0,
          }}
        >
          Try adjusting your search or filters
        </p>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <Table
        className="table table-nowrap datatable"
        rowSelection={Selections ? rowSelection : undefined}
        columns={skeletonColumns}
        rowHoverable={false}
        dataSource={loading ? skeletonData : filteredDataSource}
        locale={loading ? undefined : { emptyText: emptyState }}
        pagination={
          loading
            ? false
            : {
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
              }
        }
      />
    </>
  );
};

export default Datatable;
