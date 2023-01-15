import Img from "../img/di.png"

const Foiz = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="foiz">
                        <div className="foiz_card">
                            <img src={Img} alt="" />
                            <div className="foiz_body">
                                <h3>500+</h3>
                                <p>Judul Buku</p>
                            </div>
                        </div>
                        <div className="foiz_card">
                            <img src={Img} alt="" />
                            <div className="foiz_body">
                                <h3>500+</h3>
                                <p>Judul Buku</p>
                            </div>
                        </div>
                        <div className="foiz_card">
                            <img src={Img} alt="" />
                            <div className="foiz_body">
                                <h3>500+</h3>
                                <p>Judul Buku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Foiz;