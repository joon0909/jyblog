import "./leftSideBar.scss";

const LeftSideBar = ()=>{
    return (
        <div className={"LeftSideBar"}>
            <img
                src={process.env.PUBLIC_URL + "/assets/img/logo_black.png"}
                width={"70px"}
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "20px",
                    cursor: "pointer"
                }}
                onClick={()=>{
                    window.scrollTo(0,0);
                }}
            ></img>
        </div>
    )
}
export default LeftSideBar;