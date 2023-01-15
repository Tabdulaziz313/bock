import Img from "../img/Group140.png"
import "./jon.css"

const Jon = () => {


    return (
        <>
            <section >
                <div className="container">
                    <div className="header">
                        <span>Pojok Baca Probolinggo</span>
                        <h1>Pinjam Buku Secara Gratis untuk Masyarakat</h1>
                        <div className="header__box">
                            <button className="btn-1">Cari Judul Buku</button>
                            <button className="btn-1">Donasi dengan Kami</button>
                        </div>
                        <img src={Img} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jon;