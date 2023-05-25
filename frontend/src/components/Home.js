import React from "react";

 const Home = () => {
  return (
    <div className="container container-fluid">
      <h1 id="prduct_heading">Latest product</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex align-items-center">
            <div className="card p-3 rounded ">
              <img
                className="card-img-top mx-auto"
                src="https://res.cloudinary.com/dkxobqvqb/image/upload/v1684833125/sample.jpg"
                alt=""
                srcset=""
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">
                  <p className="card-text">
                    <a href=""> Flowers are the reproductive structures of angiosperms, or flowering plants. 
                    </a>
                  </p>
                </h5>
                <div className="ratings mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner"></div>
                  </div>
                  <span d="no_of_reviews" className="rating-count">
                    ( 5 )
                  </span>
                </div>
              </div>
              <p className="card-text">$20.50</p>
              <a href="#" id="view_btn" className="btn btn-block">            
                view details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home