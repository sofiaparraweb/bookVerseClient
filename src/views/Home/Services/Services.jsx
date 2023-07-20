import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Services.css"

const Header = () => {
    return (
        <div className="FirstServices">
            <div className="Servicescontainer">
                <div className="GridThreeColumns">
                    <div className="services-1">
                        <div>
                            <TbTruckDelivery className="iconServices" />
                            <p>Super Fast and Free Delivery</p>
                        </div>
                    </div>

                    <div className="services-2">
                        <div className="services-colum-2">
                            <div>
                                <MdSecurity className="iconServices" />
                                <p>Non-contact Shipping</p>
                            </div>
                        </div>
                        <div className="services-colum-2">
                            <div>
                                <GiReceiveMoney className="iconServices" />
                                <p>Money-back Guaranteed</p>
                            </div>
                        </div>
                    </div>

                    <div className="services-3">
                        <div>
                            <RiSecurePaymentLine className="iconServices" />
                            <p>Secure Payment System</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;