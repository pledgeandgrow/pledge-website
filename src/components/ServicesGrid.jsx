import React from 'react';
import Link from 'next/link';

function ServicesGrid() {
  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab section-padding">
      <div className="container">
        <div className="row" id="tabs">
          <div className="col-lg-6 order2">
            <div className="serv-tab-cont mb-80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src={`https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                    </div>
                    <div className="text">
                      <p>Nous utilisons des technologies de pointe et des infrastructures sécurisées pour protéger vos données sensibles et garantir la fiabilité de vos systèmes.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`https://images.pexels.com/photos/7598024/pexels-photo-7598024.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`https://images.pexels.com/photos/7598024/pexels-photo-7598024.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                    </div>
                    <div className="text">
                      <p>Nous utilisons des technologies de pointe et des infrastructures sécurisées pour protéger vos données sensibles et garantir la fiabilité de vos systèmes</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                    </div>
                    <div className="text">
                      <p>Nous utilisons des technologies de pointe et des infrastructures sécurisées pour protéger vos données sensibles et garantir la fiabilité de vos systèmes</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
                    </div>
                    <div className="text">
                      <p>Nous utilisons des technologies de pointe et des infrastructures sécurisées pour protéger vos données sensibles et garantir la fiabilité de vos systèmes</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign order1">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80">
                <h6 className="dot-titl-non mb-15">Services</h6>
                <p>Notre équipe, issue des meilleures écoles d’ingénieurs, fusionne ses compétences variées en informatique et divers autres secteurs pour façonner des solutions sur mesure, répondant avec précision à vos défis et aspirations. </p>
              </div>
              <ul className="rest">
                <li className="item-link current mb-15" data-tab="tabs-1" onClick={openTab}><span>01</span> Web Development</li>
                <li className="item-link mb-15" data-tab="tabs-2" onClick={openTab}><span>02</span> Branding</li>
                <li className="item-link mb-15" data-tab="tabs-3" onClick={openTab}><span>03</span> Design</li>
                <li className="item-link" data-tab="tabs-4" onClick={openTab}><span>04</span> Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid