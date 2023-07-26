import "./main.scss";
import {useEffect} from "react";
import "../../module/test";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = ()=>{
    useEffect(() => {
        AOS.init(); //안에 {duration: 2000} 넣어주면 전부 딜레이 2초 생김
    })
    return (
        <div className={"MainArea"}>
            <div className={"mainTitleSection"}>
                <p data-aos={"fade-up"} data-aos-duration={1000}>
                    안녕하세요. 사진과 기록을 좋아하는 주니어 웹 개발자 박준영입니다. <br />
                    BackEnd, FrontEnd 가릴 것 없이 작업하는걸 좋아하며, 새로운 기술에 대하여 공부하는데 주저하지 않습니다. <br />
                </p>
                <h1 data-aos={"fade-down"} data-aos-duration={1000} data-aos-delay={300}>
                    PARK JUN YOUNG<br />
                    PORTFOLIO.
                </h1>
                <p data-aos={"fade-left"} data-aos-duration={1000} data-aos-delay={500}>
                    When I look back, I'm training myself so that the road I walked on can shine.
                </p>
            </div>
        </div>

    )
}
export default Main;