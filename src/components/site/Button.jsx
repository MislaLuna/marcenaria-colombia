import { Link } from 'react-router-dom'
export const Button = ({ to, dark, children }) => <Link to={to} className={`btn ${dark ? 'btn--dark' : ''}`}>{children}<span aria-hidden="true">→</span></Link>
export const TextLink = ({ to, children }) => <Link to={to} className="link">{children}</Link>
