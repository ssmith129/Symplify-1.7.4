import { Link, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import type { RootState } from '../../redux/store';
import { ROLE_CONFIG } from '../../redux/roleSlice';
import { all_routes } from '../../../feature-module/routes/all_routes';

// Build a reverse map from path → label
const ROUTE_LABELS: Record<string, string> = {};
const entries = Object.entries(all_routes);
for (const [key, path] of entries) {
  // Convert camelCase key to readable label
  const label = key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/settings$/i, 'Settings')
    .trim();
  ROUTE_LABELS[path] = label;
}

// Manual overrides for cleaner labels
const LABEL_OVERRIDES: Record<string, string> = {
  [all_routes.dashboard]: 'Admin Dashboard',
  [all_routes.doctordashboard]: 'Doctor Dashboard',
  [all_routes.patientdashboard]: 'Patient Dashboard',
  [all_routes.chat]: 'Chat',
  [all_routes.calendar]: 'Calendar',
  [all_routes.notes]: 'Notes',
  [all_routes.email]: 'Email',
  [all_routes.todo]: 'Todo',
  [all_routes.todoList]: 'Todo List',
  [all_routes.voiceCall]: 'Voice Call',
  [all_routes.videoCall]: 'Video Call',
  [all_routes.fileManager]: 'File Manager',
  [all_routes.kanbanView]: 'Kanban View',
  [all_routes.invoice]: 'Invoice',
  [all_routes.contacts]: 'Contacts',
  [all_routes.shiftHandoff]: 'Shift Handoff',
  [all_routes.doctors]: 'Doctors',
  [all_routes.patients]: 'Patients',
  [all_routes.appointments]: 'Appointments',
  [all_routes.staffs]: 'Staffs',
  [all_routes.payroll]: 'Payroll',
  [all_routes.expenses]: 'Expenses',
  [all_routes.invoices]: 'Invoices',
  [all_routes.profilesettings]: 'Profile Settings',
};

// Section grouping: map path prefixes to section labels + links
const SECTION_MAP: { prefix: string; label: string; link?: string }[] = [
  { prefix: '/application/', label: 'Applications' },
  { prefix: '/doctor/', label: 'Doctor' },
  { prefix: '/patient/', label: 'Patient' },
  { prefix: '/super-admin/', label: 'Super Admin' },
  { prefix: '/ai/', label: 'AI Features' },
];

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const { currentRole } = useSelector((state: RootState) => state.role);
  const roleConfig = ROLE_CONFIG[currentRole];

  const breadcrumbs = useMemo((): BreadcrumbItem[] => {
    const path = location.pathname;
    const items: BreadcrumbItem[] = [];

    // Always start with Dashboard as root
    items.push({ label: 'Dashboard', path: roleConfig.dashboardPath });

    // Check if we're on a dashboard page itself
    if (
      path === all_routes.dashboard ||
      path === all_routes.doctordashboard ||
      path === all_routes.patientdashboard
    ) {
      const dashLabel = LABEL_OVERRIDES[path] || ROUTE_LABELS[path] || 'Dashboard';
      items.push({ label: dashLabel });
      return items;
    }

    // Add section if applicable
    const section = SECTION_MAP.find((s) => path.startsWith(s.prefix));
    if (section) {
      items.push({ label: section.label, path: section.link });
    }

    // Add the page label
    const pageLabel = LABEL_OVERRIDES[path] || ROUTE_LABELS[path];
    if (pageLabel) {
      items.push({ label: pageLabel });
    } else {
      // Fallback: use last path segment
      const segments = path.split('/').filter(Boolean);
      const last = segments[segments.length - 1] || '';
      const label = last
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      items.push({ label });
    }

    return items;
  }, [location.pathname, roleConfig.dashboardPath]);

  // Don't render on dashboard pages — only show on sub-pages
  const path = location.pathname;
  if (
    breadcrumbs.length <= 1 ||
    path === all_routes.dashboard ||
    path === all_routes.doctordashboard ||
    path === all_routes.patientdashboard
  ) return null;

  return (
    <nav aria-label="Breadcrumb navigation" className="d-flex align-items-center">
      <span className="text-muted mx-2 d-none d-sm-inline" style={{ fontSize: 18, fontWeight: 300 }}>|</span>
      <ol className="breadcrumb mb-0 d-flex align-items-center flex-wrap" style={{ gap: 2 }}>
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <li
              key={idx}
              className={`breadcrumb-item d-flex align-items-center ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
              style={{ fontSize: 13 }}
            >
              {isLast || !crumb.path ? (
                <span className={isLast ? 'text-muted' : 'text-dark'}>{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-dark text-decoration-none"
                  style={{ transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2E37A4')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {idx === 0 && <i className="ti ti-home fs-14 me-1 align-middle" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
