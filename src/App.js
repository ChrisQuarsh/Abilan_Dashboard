import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 first-sidebar">
              <div className="list-glyph">
                <span
                  className="glyphicon glyphicon-align-justify"
                  aria-hidden="true"
                  style={{ fontSize: "24px" }}
                ></span>
              </div>

              <div className="first-sidebar-glyphs">
                <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">
                    <a href="...">
                      <span
                        className="glyphicon glyphicon-flash"
                        aria-hidden="true"
                        style={{ fontSize: "24px" }}
                      ></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="...">
                      <i
                        className="fa fa-diamond"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </a>
                  </li>
                  <li role="presentation" className="active">
                    <a href="...">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                        style={{ fontSize: "24px" }}
                      ></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="...">
                      <i
                        className="fa fa-flask"
                        style={{ fontSize: "24px" }}
                      ></i>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="...">
                      <span
                        className="glyphicon glyphicon-send"
                        aria-hidden="true"
                        style={{ fontSize: "24px" }}
                      ></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="...">
                      <span
                        className="glyphicon glyphicon-inbox"
                        aria-hidden="true"
                        style={{ fontSize: "24px" }}
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div style={{ marginLeft: "10px" }}>
                <img
                  className="profile-pic img-responsive"
                  src={require("./Images/captain.jpg")}
                  alt="..."
                />
              </div>
            </div>

            <div className="col-md-2 second-sidebar">
              <div
                className="row abilan"
                style={{ marginLeft: "10px", marginBottom: "50px" }}
              >
                <div className="albin">
                  <div className="circle">
                    <div className="child">
                      <div className="kidi"></div>
                    </div>
                  </div>
                  <h2
                    className="logo-name"
                    style={{
                      marginLeft: "10px",
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    ABILAN
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="compose">
                  <button
                    type="button"
                    className="btn btn-default compose-button"
                    style={{
                      backgroundColor: "pink",
                      color: " white",
                    }}
                  >
                    <h4>+ Compose Mail</h4>
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="second-sidebar-glyphs">
                  <h5 style={{ color: "#9b9a9a", marginLeft: "10px" }}>
                    Folders
                  </h5>
                  <ul className="nav nav-pills nav-stacked">
                    <li role="presentation" className="active">
                      <a href="...">
                        <span
                          className="glyphicon glyphicon-envelope"
                          aria-hidden="true"
                        ></span>{" "}
                        Inbox{" "}
                        <span className="badge" style={{ marginLeft: "40px" }}>
                          42
                        </span>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="...">
                        <span
                          className="glyphicon glyphicon-send"
                          aria-hidden="true"
                        ></span>{" "}
                        Send Mail
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="...">
                        <span
                          className="glyphicon glyphicon-star"
                          aria-hidden="true"
                        ></span>{" "}
                        Important
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="...">
                        <span style={{ paddingRight: "20px" }}>
                          <i
                            className="material-icons"
                            style={{ fontSize: "18px" }}
                          >
                            drafts
                          </i>
                        </span>{" "}
                        Draft
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="...">
                        <span style={{ paddingRight: "20px" }}>
                          <i
                            className="material-icons"
                            style={{ fontSize: "20px" }}
                          >
                            bug_report
                          </i>
                        </span>
                        Spam
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="...">
                        <span
                          className="glyphicon glyphicon-trash"
                          aria-hidden="true"
                        ></span>{" "}
                        Trash
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="row"
                style={{
                  marginLeft: "2px",
                  marginBottom: "50px",
                  marginTop: "50px",
                }}
              >
                <h5 style={{ color: "#9b9a9a", marginLeft: "10px" }}>
                  Online Friend
                </h5>
                <div className="online-section">
                  <div style={{ marginBottom: "10px" }}>
                    <img
                      className="profile-pic img-responsive"
                      src={require("./Images/sky.jpg")}
                      alt="..."
                    />
                  </div>
                  <div className="online-name">Liam Miller</div>
                </div>

                <div className="online-section">
                  <div style={{ marginBottom: "10px" }}>
                    <img
                      className="profile-pic img-responsive"
                      src={require("./Images/f.jpg")}
                      alt="..."
                    />
                  </div>
                  <div className="online-name">Fiona Smith</div>
                </div>

                <div className="online-section">
                  <div>
                    <img
                      className="profile-pic img-responsive"
                      src={require("./Images/adidas.png")}
                      alt="..."
                    />
                  </div>
                  <div className="online-name">Ivor Watson</div>
                </div>
              </div>

              <div className="row" style={{ marginLeft: "2px" }}>
                <h5 style={{ color: "#9b9a9a", marginLeft: "10px" }}>Labels</h5>
                <div className="labels">
                  <span className="label important">
                    <span
                      className="glyphicon glyphicon-tags"
                      aria-hidden="true"
                    ></span>{" "}
                    Important
                  </span>
                  <span className="label new">
                    <span
                      className="glyphicon glyphicon-tags"
                      aria-hidden="true"
                    ></span>{" "}
                    New
                  </span>
                  <span className="label old">
                    <span
                      className="glyphicon glyphicon-tags"
                      aria-hidden="true"
                    ></span>{" "}
                    Old
                  </span>
                  <span className="label priority">
                    <span
                      className="glyphicon glyphicon-tags"
                      aria-hidden="true"
                    ></span>{" "}
                    Priority
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-9 main-area">
              <div className="row">
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="...">
                      Inbox
                    </a>

                    <ul className="nav navbar-nav navbar-right">
                      <div className="navbar-glyphs">
                        <ul className="nav nav-pills">
                          <li role="presentation">
                            <a href="...">
                              <span
                                className="glyphicon glyphicon-bell"
                                aria-hidden="true"
                                style={{ fontSize: "18px" }}
                              ></span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="...">
                              <span
                                className="glyphicon glyphicon-envelope"
                                aria-hidden="true"
                                style={{ fontSize: "18px" }}
                              ></span>
                            </a>
                          </li>

                          <li role="presentation" className="dropdown">
                            <a
                              className="dropdown-toggle languages"
                              data-toggle="dropdown"
                              href="..."
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span
                                className="glyphicon glyphicon-globe"
                                aria-hidden="true"
                                style={{ fontSize: "18px" }}
                              >
                                English{" "}
                              </span>
                              <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu ">
                              <li className="languages">
                                <a href="...">
                                  <img
                                    className="language img-responsive"
                                    src={require("./Images/deutsch.png")}
                                    alt="..."
                                  />
                                  <span>Deutsch</span>
                                </a>
                              </li>
                              <li className="languages">
                                <a href="...">
                                  <img
                                    className="language img-responsive"
                                    src={require("./Images/britain.png")}
                                    alt="..."
                                  />
                                  <span>English</span>
                                </a>
                              </li>
                              <li className="languages">
                                <a href="...">
                                  <img
                                    className="language img-responsive"
                                    src={require("./Images/france.png")}
                                    alt="..."
                                  />
                                  <span>François</span>
                                </a>
                              </li>
                              <li className="languages">
                                <a href="...">
                                  <img
                                    className="language img-responsive"
                                    src={require("./Images/china.png")}
                                    alt="..."
                                  />
                                  <span>Mandarin</span>
                                </a>
                              </li>
                              <li className="languages">
                                <a href="...">
                                  <img
                                    className="language img-responsive"
                                    src={require("./Images/spain.png")}
                                    alt="..."
                                  />
                                  <span>Español</span>
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li role="presentation">
                            <div className="online-section">
                              <div>
                                <img
                                  className="main-area-profile-pic img-responsive"
                                  src={require("./Images/gold.jpg")}
                                  alt="..."
                                />
                              </div>
                              <div className="online-name"> Chris Quarsh</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </ul>
                  </div>

                  <div className="second-navbar">
                    <ul className="nav navbar-nav navbar-left">
                      <div>
                        {" "}
                        <span
                          className="glyphicon glyphicon-unchecked"
                          style={{
                            fontSize: "20px",
                            marginLeft: "20px",
                            marginTop: "15px",
                          }}
                          aria-hidden="true"
                        ></span>{" "}
                        <span className="caret"></span>
                      </div>
                      <div className="secondnav-middle-glyphs">
                        <div className="secondnav-glyphs">
                          <ul>
                            <a className="custom-gray" href="...">
                              <span
                                className="glyphicon glyphicon-repeat"
                                style={{ padding: "0px 10px" }}
                                aria-hidden="true"
                              ></span>
                            </a>
                            <a className="custom-white" href="...">
                              <span
                                className="glyphicon glyphicon-eye-open"
                                aria-hidden="true"
                              ></span>
                            </a>
                            <a className="custom-gray" href="...">
                              <span
                                className="glyphicon glyphicon-trash"
                                style={{ padding: "0px 10px" }}
                                aria-hidden="true"
                              ></span>
                            </a>
                          </ul>
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          style={{
                            marginTop: "15px",
                            marginLeft: "20px",
                            backgroundColor: "#E9EAEF",
                          }}
                          placeholder="Search here..."
                        />
                      </div>
                    </ul>

                    <ul
                      className="nav navbar-nav navbar-right"
                      style={{
                        fontSize: "20px",
                        marginRight: "20px",
                        marginTop: "15px",
                      }}
                    >
                      <span
                        className="glyphicon glyphicon-menu-left"
                        style={{ marginRight: "15px" }}
                        aria-hidden="true"
                      ></span>
                      <span
                        className="glyphicon glyphicon-menu-right"
                        style={{ marginRight: "15px" }}
                        aria-hidden="true"
                      ></span>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div></div>

            <div className="row real">
              <div className="col-md-3">
                <div className="users-comment">
                  <div className="online-section">
                    <div>
                      <img
                        className="main-area-profile-pic img-responsive"
                        src={require("./Images/a.png")}
                        alt="..."
                      />
                    </div>
                    <div className="online-name">Albert Johnson</div>
                  </div>
                  <p style={{ padding: "20px 0px" }}>
                    How To Write Better Advertising <br /> Copy Heading
                  </p>
                  <div className="options">
                    <span
                      className="glyphicon glyphicon-unchecked"
                      style={{ marginRight: "15px" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      style={{ marginRight: "15px", color: "rgb(223, 96, 23)" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-paperclip"
                      aria-hidden="true"
                    ></span>
                    <div className="date" style={{ float: "right" }}>
                      8.30 AM
                    </div>
                  </div>
                </div>

                <div className="second-users-comment">
                  <div className="online-section">
                    <div>
                      <img
                        className="main-area-profile-pic img-responsive"
                        src={require("./Images/b.png")}
                        alt="..."
                      />
                    </div>
                    <div className="online-name">Bertha Allen</div>
                  </div>
                  <p style={{ padding: "20px 0px" }}>
                    Old Fashioned Recipes For Preventing Allergies And Chemical
                  </p>
                  <div className="options">
                    <span
                      className="glyphicon glyphicon-unchecked"
                      style={{ marginRight: "15px" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      style={{ marginRight: "15px", color: "rgb(223, 96, 23)" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-paperclip"
                      aria-hidden="true"
                    ></span>
                    <div className="date" style={{ float: "right" }}>
                      May 10,2020
                    </div>
                  </div>
                </div>

                <div className="users-comment">
                  <div className="online-section">
                    <div>
                      <img
                        className="main-area-profile-pic img-responsive"
                        src={require("./Images/lambo.jpg")}
                        alt="..."
                      />
                    </div>
                    <div className="online-name">Carlos Diaz</div>
                  </div>
                  <p style={{ padding: "20px 0px" }}>
                    How To Write Better Advertising <br /> Copy Heading
                  </p>
                  <div className="options">
                    <span
                      className="glyphicon glyphicon-unchecked"
                      style={{ marginRight: "15px" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      style={{
                        marginRight: "15px",
                        color: " rgb(223, 96, 23)",
                      }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-paperclip"
                      aria-hidden="true"
                    ></span>
                    <div className="date" style={{ float: "right" }}>
                      8.30 AM
                    </div>
                  </div>
                </div>

                <div className="users-comment">
                  <div className="online-section">
                    <div>
                      <img
                        className="main-area-profile-pic img-responsive"
                        src={require("./Images/b.jpg")}
                        alt="..."
                      />
                    </div>
                    <div className="online-name">Barry Allen</div>
                  </div>
                  <p style={{ padding: "20px 0px" }}>
                    How To Write Better Advertising <br /> Copy Heading
                  </p>
                  <div className="options">
                    <span
                      className="glyphicon glyphicon-unchecked"
                      style={{ marginRight: "15px" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      style={{ marginRight: "15px", color: "rgb(223, 96, 23)" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-paperclip"
                      aria-hidden="true"
                    ></span>
                    <div className="date" style={{ float: "right" }}>
                      8.30 AM
                    </div>
                  </div>
                </div>
                <div className="users-comment">
                  <div className="online-section">
                    <div>
                      <img
                        className="main-area-profile-pic img-responsive"
                        src={require("./Images/n.png")}
                        alt="..."
                      />
                    </div>
                    <div className="online-name">Nathaniel Burton</div>
                  </div>
                  <p style={{ padding: "20px 0px" }}>
                    How To Write Better Advertising <br /> Copy Heading
                  </p>
                  <div className="options">
                    <span
                      className="glyphicon glyphicon-unchecked"
                      style={{ marginRight: "15px" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-star"
                      style={{ marginRight: "15px", color: "rgb(223, 96, 23)" }}
                      aria-hidden="true"
                    ></span>
                    <span
                      className="glyphicon glyphicon-paperclip"
                      aria-hidden="true"
                    ></span>
                    <div className="date" style={{ float: "right" }}>
                      8.30 AM
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 opened-mail">
                <h5>May 1, 2020</h5>
                <div className="row">
                  <div className="col-md-9">
                    <p style={{ fontSize: "25px" }}>
                      Old Fashioned Recipe For Preventing Allergies And Chemical
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="options">
                      <span
                        className="glyphicon glyphicon-share-alt"
                        style={{ marginRight: "15px" }}
                        aria-hidden="true"
                      ></span>
                      <span
                        className="glyphicon glyphicon-print"
                        style={{ color: "blue", marginRight: "15px" }}
                        aria-hidden="true"
                      ></span>
                      <span
                        className="glyphicon glyphicon-trash"
                        style={{ color: "rgb(199, 15, 15)" }}
                        aria-hidden="true"
                      ></span>
                    </div>
                  </div>

                  <p style={{ paddingLeft: "20px", marginBottom: "50px" }}>
                    <strong>From:</strong>chrisquarsh54@gmail.com
                  </p>

                  <div
                    className="message"
                    style={{ paddingLeft: "20px", marginBottom: "50px" }}
                  >
                    <h5>Hello Benjamin!</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                      <br />
                      Lorem Ipsum has been the industry's dummy text ever since
                      the 1500's, when an unknow printer took a galley of type
                      and scrambled it to make a type spacimen book, remaining
                      essentially unchanged.
                    </p>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium inventore eius laudantium quas exercitationem?
                      Itaque
                    </p>
                    <br />
                    <p>
                      Have nice day,
                      <br /> Chris
                    </p>
                    <br />
                    <div className="message-options">
                      <div>
                        <span
                          className="glyphicon glyphicon-paperclip"
                          aria-hidden="true"
                          style={{ marginRight: "10px" }}
                        ></span>{" "}
                        Attachment
                      </div>
                      <div style={{ margin: "0px 10px" }}>(80 MB)</div>
                      <div>
                        <span className="label view-all"> View All</span>
                        <span className="label download-all">
                          {" "}
                          Download All
                        </span>
                      </div>
                    </div>

                    <div className="mail-images">
                      <div>
                        {" "}
                        <img
                          className="mail-pic img-responsive"
                          src={require("./Images/work1.jpg")}
                          alt="..."
                        />
                      </div>
                      <div>
                        {" "}
                        <img
                          className="mail-pic img-responsive"
                          src={require("./Images/work2.jpg")}
                          alt="..."
                        />
                      </div>
                      <div>
                        {" "}
                        <img
                          className="mail-pic img-responsive"
                          src={require("./Images/work3.jpg")}
                          alt="..."
                        />
                      </div>
                      <div>
                        {" "}
                        <img
                          className="mail-pic img-responsive"
                          src={require("./Images/work4.jpg")}
                          alt="..."
                        />
                      </div>
                      <div className="remaining-mail-pic">20+</div>
                    </div>

                    <div className="last-buttons">
                      <button className="reply-button">
                        <i
                          className="fa fa-reply"
                          aria-hidden="true"
                          style={{ marginRight: "10px" }}
                        ></i>
                        Reply
                      </button>
                      <button className="forward-button">
                        <i
                          className="fas fa-share"
                          aria-hidden="true"
                          style={{ marginRight: "10px" }}
                        ></i>
                        Forward
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
