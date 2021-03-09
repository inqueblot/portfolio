import React from "react";
import Image from "../images/DSC_0305.jpg"
import "./index.css"


function Index() {
    return (
        <div>
            <div>
                <h1>About Me</h1>

            </div>
            <hr />
            <div className="row">
                <img src={Image} className="profilePic" alt="average white guy" />
                <ul>
                    <li>Minneapolis, MN</li>
                    <li>
                        <a href="mailto:notminebydesign@gmail.com">notminebydesign@gmail.com</a>
                    </li>
                    <li>
                        <a href="https://github.com/inqueblot/protofolio" target="_blank" rel="noreferrer">github.com/inqueblot</a>
                    </li>
                    <li>
                        <a href="Assets/Resume 2020.pdf" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>

            <div className="col-md-6">
                Jimi was jettisoned into existence on July, 26 1983. Raised in rural Wisconsin by a small town metal-working
                father and a mother raised in the jungles of Peru. This abandoned pitch for an 80's sitcom matured into a
                awkward kid at school and in church.
            <br />
                    More into dinosaurs than people, and probably somewhere on the spectrum, Jimi reached adolescence devoid of any
                    social skill. Finding his only companionship with the "bad" kids didn't help Jimi climb that social ladder any
                    faster. A few run-ins with the law and faculty saw the punk expelled from school, his promise of a bright future
                    quickly dwindling. Fortunately a kindly tutor, kinda looked like Ina Garten honestly, took him in and taught our
                    young man self-worth. At the credit roll of his own personal Good Will Hunting, Jimi resumed school, ready to
                    prove everybody wrong. In 2001, he did it, by barely graduating.
            <br />
                        That fall he began college with every intention of changing the world, but mostly just got really high. A pesky
                        drug addiction picked up by the "bad" kids derailed him into a blurry joyride. A joyride that careened to a
                        fiery crash in a drug-soaked mea culpa handcuffed to a hospital gurney.
            <br />
                            Our titular hero hit bottom and in an act of desperation, and keeping with standard tropes, found Jesus. Or did
                            Jesus find him? Ah yes, the big questions. But addiction sometimes needs a little extra help and 2 years later,
                            rehab had seem to do the
                            trick.
            <br />
                                Ready to attempt college again Jimi attended a small tech college in the middle of Amish Pennsylvania and
                                graduated with high honors. A man of now higher education, he headed off into the sunset to claim his right as a
                                middle className white male. A mostly well-adjusted adult leading a life of mostly little report.
                    </div>
        </div>
    );
}

export default Index;