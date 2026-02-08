import React from 'react';
import Breadcrumb from '../header/Breadcrumb';

interface PageHeaderProps {
  title: string;
  showBreadcrumb?: boolean;
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Reusable PageHeader component for consistent page header styling
 * 
 * @param title - The main page title/heading
 * @param showBreadcrumb - Whether to display breadcrumb navigation (default: true)
 * @param actions - Action buttons or elements to display on the right side
 * @param className - Additional CSS classes for the container
 * 
 * @example
 * ```tsx
 * <PageHeader 
 *   title="Admin Dashboard"
 *   actions={
 *     <>
 *       <Link to="/new" className="btn btn-primary">
 *         <i className="ti ti-plus me-1" />
 *         New Appointment
 *       </Link>
 *     </>
 *   }
 * />
 * ```
 */
const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  showBreadcrumb = true, 
  actions,
  className = ''
}) => {
  return (
    <div className={`d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4 ${className}`}>
      <div className="d-flex align-items-center gap-3">
        <h4 className="fw-bold mb-0">{title}</h4>
        {showBreadcrumb && <Breadcrumb />}
      </div>
      {actions && (
        <div className="d-flex align-items-center flex-wrap gap-2">
          {actions}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
