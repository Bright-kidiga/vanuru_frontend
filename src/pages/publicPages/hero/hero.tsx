import { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../../../assets/logo.png";
import vanessa from "../../../assets/founders/vanessa.png";
import timothy from "../../../assets/founders/tim.png";
import Card from "../../../components/Cards/Cards.tsx";
import FooterCus from "../../../components/footer/Footer.tsx";
import EmailForm from "../../../components/emailForm/EmailForm.tsx";
import bin from "../../../assets/images/e-waste-bin.png";

export default function Hero() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <section id="home" className="hero">
            <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="company-name">Vanuru</span>
                </div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#team">Team</a>
                    <a href="#contact">Contact us</a>
                </nav>
            </header>

            <div className="hero-content">

            </div>
        </section>

        <section id="services" className="hero home-section">
            <h1>What we do.</h1>
            <div className="card-grid">
                <Card
                    title="Protecting Communities"
                    description="Safe disposal that prevents harmful exposure."
                />
                <Card
                    title="Protecting the Planet"
                    description="Cutting down landfill waste through recycling."
                />
                <Card
                    title="Driving Change"
                    description="Encouraging a culture of sustainability and responsibility."
                />
                {/*<Card*/}
                {/*    title="Protecting Communities"*/}
                {/*    description="Safe disposal that prevents harmful exposure."*/}
                {/*/>*/}
            </div>
        </section>
            <section id="about" className="hero about-section">
                <div className="about-container">
                    <div className="about-content">
                        <p className="section-intro">
                            At <span>VANURU CO</span>, we are redefining how communities handle electronic waste — turning what was once harmful into something hopeful.
                            We believe in using technology not just to innovate, but to heal our planet and protect the people who depend on it.
                        </p>

                        <div>
                            <h3>Our Story</h3>
                            <p>
                                Vanuru Co was born out of a shared concern for the growing crisis of electronic waste. Each year, millions of discarded devices end up in landfills, leaching dangerous materials into our soil and water.
                                What began as a local initiative to safely collect and recycle old electronics has grown into a movement — one that empowers individuals, businesses, and institutions to take responsibility for the technology they use.
                            </p>
                        </div>

                        <div>
                            <h3>Our Mission</h3>
                            <p>
                                Our mission is simple yet profound: to build a circular future where technology and sustainability coexist.
                                Through responsible e-waste collection, education, and innovation, we aim to minimize pollution, promote recycling, and protect future generations from the dangers of toxic waste.
                            </p>
                        </div>

                        <div>
                            <h3>Our Commitment</h3>
                            <p>
                                At Vanuru, we don’t just manage waste — we create opportunities for renewal.
                                From community awareness programs to partnerships that drive sustainable design, every initiative we take is guided by the belief that environmental protection is everyone’s responsibility.
                                Together, we can power progress without poisoning the planet.
                            </p>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src={bin} alt="Vanuru sustainability efforts" />
                    </div>
                </div>
            </section>


            <section id="team" className="hero team-section">
                <div className="team-content">
                    <div className="team-header">
                        <h2 className="team-title">Meet the Team</h2>
                        <p className="team-intro">
                            Behind <span className="highlight">VANURU CO</span> is a passionate team of innovators,
                            technologists, and environmental advocates committed to building a cleaner and smarter future.
                        </p>
                    </div>

                    <div className="team-grid">
                        {/* Vanessa */}
                        <div className="team-card">
                            <div className="image-wrapper">
                                <img src={vanessa} alt="Vanessa Wangui" className="team-img" />
                            </div>
                            <h3>Vanessa Wangui</h3>
                            <p className="role">Founder & CEO</p>
                        </div>

                        {/* Timothy */}
                        <div className="team-card">
                            <div className="image-wrapper">
                                <img src={timothy} alt="Timothy Mburu" className="team-img" />
                            </div>
                            <h3>Timothy Mburu</h3>
                            <p className="role">Founder & Managing Director</p>
                        </div>
                    </div>
                </div>
            </section>
        <section id="contact-us" className="hero contact-section">

            <div className="contact-content">
                <div className="contact-left">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-right">
                    <EmailForm/>
                </div>
            </div>
            <FooterCus/>

        </section>
        </>
    );
}
