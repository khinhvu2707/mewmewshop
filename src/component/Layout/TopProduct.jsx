import React from 'react'
import './layout.css'
import logo1 from '../../assets/logo1.webp'
import logo2 from '../../assets/logo2.webp'
import logo3 from '../../assets/logo3.webp'
import logo4 from '../../assets/logo4.webp'
import logo5 from '../../assets/logo5.webp'
import logo6 from '../../assets/logo6.webp'

export default function TopProduct() {
    return (
        <>
            <h3 className="h3-services mt-4">MẪU HOA MỚI NĂM 2022</h3>
            <div id="icon_flower">
                <div id="div_top_hypers" className="wrapper">
                    <ul id="ul_top_hypers" className="items">
                        <li><a title="Hoa tình yêu" href="#"><img title="Hoa tình yêu" className="lozad" src={logo1} data-src="https://www.flowercorner.vn/image/catalog/hoa-tinh-yeu.webp" alt="Hoa tình yêu" data-loaded="true" /></a> <a className="title-top" title="Hoa tình yêu" href="#">Hoa tình yêu</a></li>
                        <li><a title="Hoa sinh nhật" href="#"><img title="Hoa sinh nhật" className="lozad" src={logo2} data-src="https://www.flowercorner.vn/image/catalog/hoa-sinh-nhat.webp" alt="Hoa sinh nhật" data-loaded="true" /></a> <a title="Hoa sinh nhật" href="#">Hoa sinh nhật</a></li>
                        <li><a title="Hoa chia buồn" href="#"><img title="Hoa chia buồn" className="lozad" src={logo3} data-src="https://www.flowercorner.vn/image/catalog/hoa-tang-le.webp" alt="Hoa chia buồn" data-loaded="true" /></a> <a title="Hoa chia buồn" href="#">Hoa chia buồn</a></li>
                        <li><a title="Hoa lan" href="#"><img title="Hoa tặng mẹ" className="lozad" src={logo4} data-src="https://www.flowercorner.vn/image/catalog/hoa-lan-ho-diep.webp" alt="Hoa tặng mẹ" data-loaded="true" /></a> <a title="Hoa tặng mẹ" href="#">Hoa lan</a></li>
                        <li><a title="Hoa khai trương" href="#"><img title="Hoa khai trương" className="lozad" src={logo5} alt="Hoa khai trương" data-loaded="true" /></a> <a title="Hoa khai trương" href="#">Hoa khai trương</a></li>
                        <li><a title="Hoa cưới" href="#"><img title="Hoa cưới" className="lozad" src={logo6} alt="Hoa cưới" data-loaded="true" /></a> <a title="Hoa cưới" href="#">Hoa cưới</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
