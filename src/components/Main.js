import React from 'react'
import Link from 'gatsby-link'

import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import grsrtshero from '../images/grsrtshero.png'
import skills from '../images/skills.png'
import qode from '../images/qode.png'
import resume from '../images/resume.pdf'

class Main extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )
    let { numPage, pageNumber } = this.state
    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey there! I'm Destiny. I'm an ex-campaign manager and Returned
            Peace Corps Volunteer turned full stack dev. I have a passion for
            data and a tireless drive for work that I care about.
          </p>
          <p>
            While I'm By the way, check out my <a href="#work">awesome work</a>.
          </p>

          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={skills} alt="" />
          </span>
          <p />
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Document file={resume} onLoadSuccess={this.onDocumentLoad}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          {close}
        </article>

        <article
          id="portfolio"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Portfolio</h2>
          <h1>Grassroots</h1>
          <h2>Personally Developed App</h2>
          <span className="image main">
            <a href="http://grassroots-app-demo.com" target="__blank">
              <img
                src={grsrtshero}
                alt=""
                width=""
                style={{ filter: 'brightness(110%)' }}
              />
            </a>
          </span>
          <p>
            During the 2016 Presidential Election, I worked as a Regional Field
            Director for a National political campaign. Before that, I was a
            local community organizer working on a range of issues spanning from
            community beautification to health equity to racial equality and
            restorative justice. During my time spent organizing people, I
            realized that the tools that enabled us to do so were hard on the
            eye and confusing to use. Grassroots was born.
          </p>
          <p>
            The application was built as a capstone project over the course of
            three weeks during DevMountain's 13-week Immersive Web Development
            program. It was built using a SERN stack (PostgreSQL, Express,
            React, Node). Redux was used for application-wide state management.
            GoogleMaps Api, D3, and ChartJS were integrated into the project to
            visualize data and volunteer performance. It was developed using a
            mobile-first design strategy and is completly mobile responsive.
          </p>

          {close}
        </article>

        <article
          id="portfolio"
          className={`${this.props.article === 'portfolio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none', marginTop: '5vh' }}
        >
          <h1>Qode</h1>
          <h2>Lead Front-End Developer</h2>
          <span className="image main">
            <a href="http://qode.club" target="__blank">
              <img
                src={qode}
                alt=""
                width=""
                style={{ filter: 'brightness(110%)' }}
              />
            </a>
          </span>
          <p>
            Qode was built for DevMountain's group capstone project. It was
            developed to be a crash-course introduction for beginners to code,
            who aren't satisified with other free options.
          </p>
          <p>Qode was developed on </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>

          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/destiny-ross/"
                target="__blank"
                className="icon fa-linkedin"
              >
                <span className="label">Twitter</span>
              </a>
              <p>/in/destinylross</p>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">/destinylross</span>
              </a>
              <p>/destinylross</p>
            </li>
            <li>
              <a
                href="http://github.com/des-tinyDM"
                target="__blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
              <p>/des-tinyDM</p>
            </li>
            <li>
              <a
                href="mailto:destinyleaross@gmail.com"
                target="__blank"
                className="icon fa-envelope"
              >
                <span className="label">Twitter</span>
              </a>
              <p>destinyleaross@gmail.com</p>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
