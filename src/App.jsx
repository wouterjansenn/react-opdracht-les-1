import './App.css';
import './assets/helpers/amountOfTvSold.css'
import './assets/helpers/amountOfTvBought.css'
import './assets/helpers/amountOfTvToSell.css'
import {totalSold} from "./assets/helpers/amountOfTvSold.js";
import {inventory} from "./constants/inventory.js";
import {totalBought} from "./assets/helpers/amountOfTVBought.js";
import {amountOfTvToSell} from "./assets/helpers/amountOfTvToSell.js";
import {tvInformation} from "./assets/helpers/tvInformation.js";
import {bestSellingTv} from "./constants/inventory.js";
import {screenSizes} from "./assets/helpers/screenSize.js";
import {imgOfTv} from "./assets/helpers/imgOfTv.js";
import {price} from "./assets/helpers/priceOfTv.js";
import checkbox from "./assets/check.png"
import minus from "./assets/minus.png"

function App() {
    function buttonInfo(event) {
        return console.log(event.target.textContent)
    }

    return (<>
            <header className="outer-container">
                <div className="innerContainer">
                    <h1>Tech it easy dashboard</h1>
                </div>
            </header>
            <main>
                <section className="outerContainer">
                    <div className="innerContainer dashboard">
                        <h2>Verkoop overzicht</h2>
                        <div className="dashboard-wrapper">
                            <article className="productInformation sold">
                                <p>aantal verkochte producten</p>
                                <p>{totalSold(inventory, bestSellingTv)}</p>
                            </article>
                            <article className="productInformation bought">
                                <p>aantal ingekochte producten</p>
                                <p>{totalBought(inventory, bestSellingTv)}</p>
                            </article>
                            <article className="productInformation toSell">
                                <p>aantal te verkopen producten</p>
                                <p>{amountOfTvToSell()} </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="outerContainer">
                    <div className="innerContainer">
                        <h3>Best verkochte tv</h3>
                        <figure className="bestSellingTv">
                            <div className="tvInformation">
                                <p>{tvInformation(bestSellingTv)}</p>
                                <p>{price(bestSellingTv)}</p>
                                <p>{screenSizes(bestSellingTv)}</p>
                                <div className="tvSpecification">
                                    <div className="feature">
                                        <img src={checkbox} alt="available"/>
                                        <p>wifi</p>
                                    </div>
                                    <div className="feature">
                                        <img src={minus} alt="not available"/>
                                        <p>speech</p>
                                    </div>

                                    <div className="feature">
                                        <img src={checkbox} alt="available"/>
                                        <p>hdr</p>
                                    </div>

                                    <div className="feature">
                                        <img src={checkbox} alt="available"/>
                                        <p>bluetooth</p>
                                    </div>

                                    <div className="feature">
                                        <img src={minus} alt="not available"/>
                                        <p>ambilight</p>
                                    </div>
                                </div>
                            </div>
                            <div className="imgWrapper">
                                <img src={imgOfTv(bestSellingTv)} alt="image of a television"/>
                            </div>
                        </figure>
                    </div>
                </section>

                <section>
                    <h3>Alle tvs</h3>
                    <button type="button" onClick={buttonInfo} className="tvButton">Meest verkocht eerst</button>
                    <button type="button" onClick={buttonInfo} className="tvButton">Goedkoopste eerst</button>
                    <button type="button" onClick={buttonInfo} className="tvButton">Meest geschikt voor sport eerst</button>
                </section>
            </main>


        </>
    )
}

export default App
