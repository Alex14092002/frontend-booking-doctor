
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";
import { useState , useEffect } from "react";

function AdminNavbar(props) {
  const id = localStorage.getItem('id')
  
  console.log(id);
  const navigate = useNavigate();
  const [data , setData] = useState(null)
  const [collapseOpen, setcollapseOpen] = React.useState(false);
  const [modalSearch, setmodalSearch] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  useEffect(()=>{
    const getData = async ()  =>{
      const res = await fetch(`http://localhost:8000/api/user/${id}`)
      const dataAPI = await res.json()
      console.log(dataAPI);
      setData(dataAPI)
    }
    getData()
  },[])
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("bg-white");
    } else {
      setcolor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("bg-white");
    }
    setcollapseOpen(!collapseOpen);
  };
  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setmodalSearch(!modalSearch);
  };

  const logOut = () => {
    localStorage.removeItem('id')
    window.location.href = '/';
  }
  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
             
            
              { data && (
                 <UncontrolledDropdown nav>
                 <DropdownToggle
                   caret
                   color="default"
                   nav
                   onClick={(e) => e.preventDefault()}
                 >
                   <div className="photo">
                     <img alt="..." src={`http://localhost:8000/`+ data.avatar} />
                   </div>
                   <b className="caret d-none d-lg-block d-xl-block" />
                   <p className="d-lg-none">Đăng xuất</p>
                 </DropdownToggle>
                 <DropdownMenu className="dropdown-navbar" right tag="ul">
                   <NavLink tag="li">
                    
                        <Link className='text-black-50' to='/profileadmin'>Profile</Link>
                     
                   </NavLink>
                  
                   <DropdownItem divider tag="li" />
                   <NavLink tag="li">
                     <DropdownItem onClick={()=>logOut()} className="nav-item">Đăng xuất</DropdownItem>
                   </NavLink>
                 </DropdownMenu>
               </UncontrolledDropdown>
              )
                
              }
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <ModalHeader>
          <Input placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </ModalHeader>
      </Modal>
    </>
  );
}

export default AdminNavbar;
