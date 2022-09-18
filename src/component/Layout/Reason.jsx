import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import './layout.css'

export default function Reason() {
  return (
    <div className="wrapper">
      <h3 className="h3-services mb-3">Tại sao bạn nên dùng dịch vụ của Chúng tôi?</h3>
      <div className='container'>
        <div className='row'>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon1} />
              </div>
              <div className="service-text">
                <div className="service-title">Miễn phí giao hàng 63 tỉnh</div>
                <div className="service-desc">Free shipping (nội thành)</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon5} />
              </div>
              <div className="service-text">
                <div className="service-title">Phục vụ 24/24</div>
                <div className="service-desc">24-7 service</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon2} />
              </div>
              <div className="service-text">
                <div className="service-title">Giá đã gồm 10% VAT</div>
                <div className="service-desc">Price include VAT</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon6} />
              </div>
              <div className="service-text">
                <div className="service-title">Giao nhanh trong 60 phút</div>
                <div className="service-desc">60 minutes quick delivery</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon3} />
              </div>
              <div className="service-text">
                <div className="service-title">Cam kết hài lòng 100%</div>
                <div className="service-desc">100% guarantee smile</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon7} />
              </div>
              <div className="service-text">
                <div className="service-title">Cam kết hoa tươi 3+ ngày</div>
                <div className="service-desc">3+ days fresh warranty</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon4} />
              </div>
              <div className="service-text">
                <div className="service-title">Tặng thiệp cao cấp</div>
                <div className="service-desc">Free greeting cards</div>
              </div>
            </a>
          </div>
          <div className="services col-lg-3 col-md-6 col-12">
            <a href="#">
              <div className="service-img-outer">
                <img src={icon8} />
              </div>
              <div className="service-text">
                <div className="service-title">Giảm giá đến 40%</div>
                <div className="service-desc">Receive 5-40% discount</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
