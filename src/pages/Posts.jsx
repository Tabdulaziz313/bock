import Img from "../img/el288.png";
import Img2 from "../img/el28.png";
import "./posts.css"


const Posts = () =>{
    return (
        <>
        <section>
            <div className="container">
                <div className="posts">
                    <h2>Kenapa Kita Harus Membaca Buku?</h2>
                    <div className="posts_wrapper">
                        <div className="postes_card">
                            <h3>“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</h3>
                            <div className="posts_body">
                                <img src={Img} alt="immg" />
                                <b>Mohammad Hatta</b>
                                {/* <span>Wakil Presiden Indonesia Pertama</span> */}
                            </div>
                        </div>
                        <div className="postes_card">
                            <h3>“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</h3>
                            <div className="posts_body">
                                <img src={Img2} alt="immg" />
                                <b>Mohammad Hatta</b>
                                {/* <span>Wakil Presiden Indonesia Pertama</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Posts;