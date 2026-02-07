import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { RootState } from '../../redux/store';
import { setRole, setTransitioning, ROLE_CONFIG, type UserRole } from '../../redux/roleSlice';

const ROLES: UserRole[] = ['admin', 'doctor', 'patient'];

const RoleSelectorDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentRole, isTransitioning } = useSelector((state: RootState) => state.role);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const config = ROLE_CONFIG[currentRole];

  const handleRoleSwitch = useCallback((role: UserRole) => {
    if (role === currentRole) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    dispatch(setTransitioning(true));

    // Brief delay for visual transition feedback
    setTimeout(() => {
      dispatch(setRole(role));
      navigate(ROLE_CONFIG[role].dashboardPath);
      dispatch(setTransitioning(false));
    }, 200);
  }, [currentRole, dispatch, navigate]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="position-relative d-flex align-items-center" ref={dropdownRef}>
      <button
        className="btn d-flex align-items-center gap-2 px-2 px-sm-3 py-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current role: ${config.label}. Click to switch role.`}
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          backgroundColor: isTransitioning ? '#f3f4f6' : '#fff',
          transition: 'all 0.2s ease',
          minWidth: 0,
        }}
      >
        {isTransitioning ? (
          <span className="spinner-border spinner-border-sm" style={{ width: 16, height: 16 }} />
        ) : (
          <i
            className={`ti ${config.icon} fs-16`}
            style={{ color: config.color }}
          />
        )}
        <span className="fw-medium fs-13 d-none d-sm-inline text-truncate">{config.label}</span>
        <i className={`ti ti-chevron-down fs-12 text-muted ms-1 ${isOpen ? 'rotate-180' : ''}`}
          style={{ transition: 'transform 0.2s ease' }}
        />
      </button>

      {isOpen && (
        <div
          className="position-absolute shadow-lg bg-white rounded-3 border"
          role="listbox"
          aria-label="Select user role"
          style={{
            top: 'calc(100% + 6px)',
            left: 0,
            minWidth: 220,
            zIndex: 1060,
            animation: 'fadeIn 0.15s ease',
          }}
        >
          <div className="px-3 py-2 border-bottom">
            <span className="fs-11 text-uppercase fw-semibold text-muted">Switch Role</span>
          </div>
          {ROLES.map((role) => {
            const rc = ROLE_CONFIG[role];
            const isActive = role === currentRole;
            return (
              <button
                key={role}
                role="option"
                aria-selected={isActive}
                className="d-flex align-items-center gap-3 w-100 border-0 bg-transparent px-3 py-2"
                onClick={() => handleRoleSwitch(role)}
                onKeyDown={(e) => e.key === 'Enter' && handleRoleSwitch(role)}
                style={{
                  backgroundColor: isActive ? `${rc.color}08` : 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget.style.backgroundColor = '#f9fafb');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isActive ? `${rc.color}08` : 'transparent';
                }}
              >
                <span
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: `${rc.color}15`,
                  }}
                >
                  <i className={`ti ${rc.icon} fs-16`} style={{ color: rc.color }} />
                </span>
                <div className="text-start flex-grow-1" style={{ minWidth: 0 }}>
                  <span className="d-block fs-13 fw-medium text-dark">{rc.label}</span>
                  <span className="d-block fs-11 text-muted">{rc.description}</span>
                </div>
                {isActive && (
                  <i className="ti ti-check fs-16" style={{ color: rc.color }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoleSelectorDropdown;
