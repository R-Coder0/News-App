import React, { Component } from 'react'
import {Facebook, Instagram, Twitter } from 'react-bootstrap-icons'

export class Footer extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">© 2023-All Right are Reserved | NewsHub</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className="ms-3"><a className="text-body-secondary" href="/"><Twitter className="bi" width="24" height="24"/></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="/"><Instagram className="bi" width="24" height="24"/></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="/"><Facebook className="bi" width="24" height="24"/></a></li>
    </ul>
  </footer>
      </div>
    )
  }
}

export default Footer
