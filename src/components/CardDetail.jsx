import React from 'react'  
import mobile from '../assets/img/Mobile.jpeg'; 
import web from '../assets/img/Web-development.jpg'; 
import Product from '../assets/img/product.png'; 
import UX from '../assets/img/UX.jpg'; 
import QA from '../assets/img/Quility.jpg'; 
import Hosting from '../assets/img/web-hosting.jpg'; 
import Digital from '../assets/img/digitalmarket.png';

const CardDetail = () => { 
 
    return(  
        <> 
        <div className = "container-fluid mb-5 p-3 mb-5 bg-white rounded"> 
          <div className = "row"> 
            <div className = "col-10 mx-auto"> 
              <div className = "row"> 
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card ">
                   <img src={mobile} alt="Card image cap"  />
                    <div className="card-body">
                      <h5 className="card-title">Mobility Solutions</h5> 
                      <h6>
                      <small className="text-muted">Developing smarter mobile applications for your business
With modern mobile apps accelerate speed to market, achieve compliance, and initiate a new channel for growth.
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div> 
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={web} alt="Card image cap" height="159px" width="319px"/>
                    <div className="card-body"> 
                    <h5>
                    <h5 className="card-title">Web Development</h5>
                    </h5> 
                    <h6>
                      <small className="text-muted">We understand your business needs. Here, we are to deliver you the quality custom-built software. Our well-defined web services ensure you get it 
                      </small> 
                      </h6>
                        
                  </div>
                 </div>

                 </div>
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={Product} alt="Card image cap" height="159px" width="319px" />
                    <div className="card-body">
                      <h5 className="card-title">Product Services</h5>
                        <h6>
                      <small className="text-muted">Are you ready to build a successful product?
We develop products that deliver a positive experience by bridging the gap between the stakeholder goals and user expectations.
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div>
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={UX} alt="Card image cap" height="159px" width="319px" />
                    <div className="card-body">
                      <h5 className="card-title"> UI/UX Design</h5>
                         <h6>
                      <small className="text-muted"> We are creating intuitive and memorable digital experiences. The result of our professional UI/UX services will satisfy your business objectives and customer needs
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div>
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={QA} alt="Card image cap"  height="159px" width="319px"/>
                    <div className="card-body">
                      <h5 className="card-title">Quality Assurance Services</h5>
                     
                        <h6> 
                        <small className="text-muted">
                      With our software testing services, compress time to market, reduce costs, and earn customer loyalty by delivering product to perfection. Our QAs and testing engineers use Shift-left and Continuous Delivery approach in all stages of development to ensure stability, usability, and scalability of the product or services
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div>
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={Hosting} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Hosting and Deployment Services</h5>
                      <h6>
                      <small className="text-muted"> Website Hosting and Maintenance Services
To get noticeably faster value added Hosting Services with BhadaniTech where you can also get a perfect starting point to boost your online presence.
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div> 
                 <div className="col-md-3 col-10 mx-auto">
                 <div className="card">
                   <img className="card-img-top" src={Digital} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">Digital Marketing</h5>
                        <h6>
                      <small className="text-muted"> We are a 360-degree digital marketing company that improves online brand visibility with effective marketing strategies. We achieve your business goals with custom digital marketing services that deliver tangible results
                      </small> 
                      </h6>
                  </div>
                 </div>

                 </div>

              </div>

            </div>
        </div> 

        </div>
     </>   
    );

} ; 

export default CardDetail;