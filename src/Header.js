import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    
    const navigate=useNavigate();
    
    const user = JSON.parse(localStorage.getItem('user-info'));
    //console.warn(user);
    
    function logout()
    {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark text-white">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {
                localStorage.getItem('user-info') ?
                <>
                    <Nav.Link href="/">Product List</Nav.Link>
                    <Nav.Link href="/add">Add Product</Nav.Link>
                    <Nav.Link href="/search">Search Product</Nav.Link>
                </>
                :
                <>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/add">Register</Nav.Link>
                </>
            }
            </Nav>
            <Nav className='ml-auto'>
                {
                    localStorage.getItem('user-info') ?
                    <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>                        
                    </Nav>
                    : null
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            /* <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        {
                            localStorage.getItem('user-info') ?
                            <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Product</Link>
                            <Link to="/update">Update Product</Link> */
                            /*<Link to="/search">Search Product</Link>
                            </>
                            :
                            <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </>
                        }

                    </Nav>
                    {
                        localStorage.getItem('user-info') ?
                        <Nav>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>                        
                        </Nav>
                        : null
                    }
                </Container>
            </Navbar> */

    )
}   

export default Header 