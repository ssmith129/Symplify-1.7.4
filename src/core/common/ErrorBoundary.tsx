import React, { Component, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  handleGoToDashboard = () => {
    window.location.href = '/dashboard';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: '40px 20px',
            textAlign: 'center',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'var(--clinical-critical-bg, #FEF2F2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24,
            }}
          >
            <i
              className="ti ti-alert-triangle"
              style={{
                fontSize: 36,
                color: 'var(--clinical-critical, #DC2626)',
              }}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: 'var(--heading-color, #0A1B39)',
              marginBottom: 8,
            }}
          >
            Something went wrong
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 15,
              color: 'var(--gray-500, #595F6E)',
              maxWidth: 440,
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            An unexpected error occurred while loading this section. Your data is
            safe. Please try again or return to the dashboard.
          </p>

          {/* Error detail (collapsed) */}
          {this.state.error && (
            <details
              style={{
                marginBottom: 24,
                maxWidth: 480,
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: 8,
                backgroundColor: 'var(--light, #F5F6F8)',
                border: '1px solid var(--border-color, #E7E8EB)',
                fontSize: 13,
                color: 'var(--gray-600, #545F74)',
              }}
            >
              <summary style={{ cursor: 'pointer', fontWeight: 500 }}>
                Error details
              </summary>
              <pre
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--gray-700, #3B4961)',
                }}
              >
                {this.state.error.message}
              </pre>
            </details>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={this.handleRetry}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 24px',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <i className="ti ti-refresh" style={{ fontSize: 18 }} />
              Try Again
            </button>
            <button
              onClick={this.handleGoToDashboard}
              className="btn btn-outline-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 24px',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <i className="ti ti-layout-dashboard" style={{ fontSize: 18 }} />
              Return to Dashboard
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
