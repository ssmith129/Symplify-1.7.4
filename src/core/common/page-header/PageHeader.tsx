import React from 'react';
import Breadcrumb from '../header/Breadcrumb';

interface PageHeaderProps {
  title?: string | React.ReactNode;
  showBreadcrumb?: boolean;
  actions?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

/**
 * Reusable PageHeader component for consistent page header styling
 *
 * @param title - The main page title/heading (string or custom React node)
 * @param showBreadcrumb - Whether to display breadcrumb navigation (default: true)
 * @param actions - Action buttons or elements to display on the right side
 * @param className - Additional CSS classes for the container
 * @param titleClassName - CSS classes for the title element
 * @param children - Alternative to title for fully custom left-side content
 *
 * @example Basic usage
 * ```tsx
 * <PageHeader
 *   title="Admin Dashboard"
 *   actions={
 *     <Link to="/new" className="btn btn-primary">
 *       <i className="ti ti-plus me-1" />
 *       New Appointment
 *     </Link>
 *   }
 * />
 * ```
 *
 * @example With custom title content
 * ```tsx
 * <PageHeader
 *   title={
 *     <>
 *       Patient Grid
 *       <span className="badge">Total: 565</span>
 *     </>
 *   }
 * />
 * ```
 */
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBreadcrumb = true,
  actions,
  className = '',
  titleClassName = 'fw-bold mb-0',
  children
}) => {
  return (
    <div className={`d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4 ${className}`}>
      <div className="d-flex align-items-center gap-3">
        {children ? children : (
          <>
            {typeof title === 'string' ? (
              <h4 className={titleClassName}>{title}</h4>
            ) : (
              <>{title}</>
            )}
            {showBreadcrumb && <Breadcrumb />}
          </>
        )}
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
