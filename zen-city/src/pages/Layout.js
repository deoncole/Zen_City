import { Outlet } from "react-router-dom";
import React from "react";

import {
    MDBNavbar,
    MDBContainer,
    // MDBNavbarBrand,
    // MDBNavbarNav,
    // MDBNavbarItem,
    MDBNavbarLink,
    // MDBFooter,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCarousel,
    MDBCarouselItem,
    MDBFooter,
  } from "mdb-react-ui-kit";

const Layout = () => {
    return (
      <>
        <MDBNavbar class="navbar navbar-expand-lg bg-light navbar-light">
          <div class="container d-flex justify-content-center">
            <div class="row">
              <div class="col-12 d-flex justify-content-center mb-3">
                <a class="navbar-brand" href="/">
                  <img
                    id="MDB-logo"
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                    alt="MDB Logo"
                    draggable="false"
                    height="30"
                  />
                </a>
              </div>
              <div class="col-12 d-flex justify-content-around">
                <MDBNavbarLink active aria-current="page" href="/about">
                  About
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current="page" href="/videos">
                  Videos
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current="page" href="/interviews">
                  Interviews
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current="page" href="/photos">
                  Photos
                </MDBNavbarLink>
              </div>
            </div>
          </div>
        </MDBNavbar>
        <MDBRow>
      <MDBCol class="col-md-2 p-0">
      <img class="h-100 w-100" src="https://media.istockphoto.com/id/1314616897/photo/3d-render-abstract-urban-futuristic-background-cityscape-with-neon-light-starry-night-sky-and.jpg?s=612x612&w=is&k=20&c=P2jm7NoTS7Ppk29k1Yam91x4f0nv5wQkYOr5wiCfREw=" alt="Wild Landscape" />
      </MDBCol>
      <MDBCol className='bg-danger shadow-1-strong' class="col-md-8 p-0" >
        <Outlet />
      </MDBCol>
      <MDBCol class="col-md-2 p-0">
      <img class="h-100 w-100" src="https://media.istockphoto.com/id/1314616897/photo/3d-render-abstract-urban-futuristic-background-cityscape-with-neon-light-starry-night-sky-and.jpg?s=612x612&w=is&k=20&c=P2jm7NoTS7Ppk29k1Yam91x4f0nv5wQkYOr5wiCfREw=" alt="Wild Landscape" />
      </MDBCol>
    </MDBRow>

        {/* <Outlet /> */}

        <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">

          <div class="container p-4 pb-0">
            {/* <!-- Section: Form --> */}
            <section class="">
              <form action="">
                {/* <!--Grid row--> */}
                <div class="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Join in to be a part of the city and get updates:</strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        class="form-control"
                      />
                      <label class="form-label" for="form5Example2">
                        Click to enter your Email address
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-auto">
                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}
          </div>

          <section className="d-flex justify-content-center p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="facebook-f" />
              </a>
              <a href="/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="twitter" />
              </a>
              <a href="https://www.instagram.com/zencityofficially/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="instagram" />
              </a>
              <a href="/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="soundcloud" />
              </a>
              <a href="/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="tiktok" />
              </a>
              <a href="/" target="blank" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="spotify" />
              </a>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>


        {/* <MDBCarousel showControls dealy={3000}>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://mdbootstrap.com/img/new/slides/041.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://mdbootstrap.com/img/new/slides/042.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://mdbootstrap.com/img/new/slides/043.jpg"
            alt="..."
          />
        </MDBCarousel> */}
      </>
    );
}

export default Layout;