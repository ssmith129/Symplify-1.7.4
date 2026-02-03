import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }: any) => {
  return (
    <nav>
      <ol className="breadcrumb mb-0">
        {items.map((item: any, index: number) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.active ? 'active' : ''}`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.active ? (
              item.label
            ) : (
              <Link to={item.path}>
                {item.icon && <i className={`${item.icon} me-1`} />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
