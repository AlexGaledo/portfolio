


import { useState } from "react";
import alex from '../assets/alex_sample_photo.jpeg';
import reactPlaceholder from '../assets/react.svg';

export default function Portfolio() {
    const [active, setActive] = useState('all')

    // 1 personal 2 hackathon 3 organization
    const showProjects = (category) => {
            switch(category) {
                case 'all':
                    return projects;
                case 'personal':
                    return projects.filter(project=>project.category === category)
                case 'hackathon':
                    return projects.filter(project=>project.category === category)
                case 'organization':
                    return projects.filter(project=>project.category === category)
                default:
                    return projects;
    }}

    const projects = ([
        {id: 1, title: 'Project 1', 
            category: 'personal', 
            image: '', 
            description: 'Description for Project 1'
        },

        {id: 2, title: 'Project 2', 
            category: 'hackathon', 
            image: '', 
            description: 'Description for Project 2'
        },

        {id: 3, title: 'Project 3', 
            category: 'organization', 
            image: '', 
            description: 'Description for Project 3'
        },
    ])

    const education = ([
        {
        school : 'APEC Schools - Bacoor', 
        degree: 'Highschool', 
        date: '2016 - 2023',
        description:' Graduated with honors'
        },

        {
        school : 'Technological University of the Philippines - Manila', 
        degree: 'Bachelor of Science in Computer Science', 
        date: '2023 - Present',
        description: 'Currently in 3rd year'
        }
    ])

    const experience = ([
        {
        company: 'Google Developers Group on Campus - TUP Manila',
        position: 'Operations Support',
        date: '2023 - 2025',
        description: ''
        },

        {
        company: '2024 Hackers League Hackathon',
        position: 'Project Manager / Backend Developer',
        date: '2024',
        description: '3-day Hackathon, building dapps around TON ecosystem.'
        },

        {
        company: '2025 UI/UX Hawk-A-Thon',
        position: 'Project Manager',
        date: '2025',
        description: '1-day Hackathon, showcasing UI/UX & SDG Solutions.'
        },

        {
        company: 'ISEAC Hackathon',
        position: 'Backend Developer',
        date: '2025',
        description: '30-day hackathon, AI & Cybersecurity innovations. '
        },

        {
        company: '2025 HackFest Horizon',
        position: 'Project Manager',
        date: '2025',
        description: `7-day Hackathon, building SDG solutions with AI and IoT.`
        },

        {
        company: '2025 Create & Conquer Hackathon',
        position: 'Project Manager / Fullstack Developer',
        date: '2025',
        description: '7-day Hackathon, Innovative solutions for specific themes.'
        },

        {
        company: '2025 APAC Solution Challenge Hackathon',
        position: 'Backend Developer',
        date: '2025',
        description: '30-day Hackathon, Innovative solutions with Google Cloud & Gemini.'
        },

        {
        company: 'Google Developers Group on Campus - TUP Manila',
        position: 'Backend Developer Lead',
        date: '2025 - Present',
        description: ''
        }
    ])

    


    return (
        <main>
        {/* Hero Section */}
        <section className="hero" id="home">
            <div className="container">
                <img src={alex} alt="Hero" className="hero-image" />
            <h1 className="heading">Hello, I'm <strong>Alex Galedo</strong></h1>
            <span className="subheading">and this is My Portfolio</span>
            </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio" id="portfolio">
            <div className="container">
            <div className="section-title">
                <h2>Featured <strong>Portfolio</strong></h2>
            </div>
            <div className="portfolio-filters">
                <ul>
                <li className={active ==='all'?'active':'inactive'} onClick={()=>{setActive('all')}}>All</li>
                <li className={active ==='personal'?'active':'inactive'} onClick={()=>{setActive('personal')}}>Personal Projects</li>
                <li className={active ==='hackathon'?'active':'inactive'} onClick={()=>{setActive('hackathon')}}>Hackathon Projects</li>
                <li className={active ==='organization'?'active':'inactive'} onClick={()=>{setActive('organization')}}>Organization Projects</li>
                </ul>
            </div>
            <div className="portfolio-list">
            {showProjects(active).map((project) => (
                <div className="portfolio-item mockup" key={project.id}>
                    <div className="portfolio-thumb">
                        <img src={project.image || reactPlaceholder} alt={project.title} />
                    </div>
                    <div className="portfolio-info">
                        <h4>{project.title}</h4>
                        <span className="portfolio-cat">{project.description}</span>
                    </div>
                </div>
            ))}
            </div>    
            </div>
        </section>

        {/* Resume Section */}
        <section className="resume" id="resume">
            <div className="container">
            <div className="section-title">
                <h2>My <strong>Resume</strong></h2>
            </div>
            <div className="resume-content">
                <div className="resume-education"><h2>Education</h2>
                {education.map((item, index) => (
                    <div className="resume-entry" key={index}>
                        <span className="resume-date">{item.date}</span>
                        <h3>{item.degree}</h3>
                        <p>{item.description}</p>
                        <span className="resume-school">{item.school}</span>
                    </div>
                ))}
                </div>


                <div className="resume-experience">
                <h2>Experience</h2>
                {experience.map((item,index)=>(
                    <div className="resume-entry" key={index}>
                    <span className="resume-date">{item.date}</span>
                    <h3>{item.position}</h3>
                    <p>{item.description}</p>
                    <span className="resume-school">{item.company}</span>
                </div>
                ))}          
                </div>

            </div>
            </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
            <div className="container">
            <div className="about-content">
                <div className="about-image">
                <img src={reactPlaceholder} alt="Image placeholder" />
                </div>
                <div className="about-info">
                <div className="section-title">
                    <h2>About <strong>Me</strong></h2>
                </div>
                <p className="about-lead">3rd year BS-Computer Science with a passion for building and creating tech solutions.</p>
                <p className="about-desc">Hello, i'm Alex!, an aspiring software developer and tech enthusiast based in the Philippines. 
                    <br/>I love building web applications and exploring new technologies. 
                    <br/>I've participated in several development projects from personal projects to hackathons and organizational projects.
                    <br/>I'm always open to learn new technologies and grow my skills along the way.
                </p>
                <div className="about-actions">
                    <a href="#contact" className="btn btn-primary">Hire Me</a>
                    <a href="https://drive.google.com/uc?export=download&id=13EgQU6rQh4q-v85R59Rdt1LHrUiAgEvd" className="btn btn-secondary" download='AlexGaledo_CV'>Download CV</a>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
            <div className="container">
            <div className="section-title">
                <h2>Get <strong>In Touch</strong></h2>
            </div>
            <div className="contact-content">
                <form className="contact-form">
                <h3>Get In Touch</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" cols="30" rows="5" placeholder="Write a Message"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
                </form>
                <div className="contact-details">
                <h3>My Contact Details</h3>
                <ul className="details-list">
                    <li><span className="details-label">Email</span> galedoalex@gmail.com</li>
                    <li><span className="details-label">Phone</span> +63 928 767 0529</li>
                    <li><span className="details-label">Address</span> Cavite, Philippines</li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
            <div className="container">
            <div className="footer-social">
                <a href="#" className="social-item"><span className="icon-facebook2"></span></a>
                <a href="#" className="social-item"><span className="icon-twitter"></span></a>
                <a href="#" className="social-item"><span className="icon-instagram2"></span></a>
                <a href="#" className="social-item"><span className="icon-linkedin2"></span></a>
                <a href="#" className="social-item"><span className="icon-vimeo"></span></a>
            </div>
            </div>
        </footer>
        </main>
    );
}