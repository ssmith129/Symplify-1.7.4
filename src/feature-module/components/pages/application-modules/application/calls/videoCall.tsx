import { Link } from "react-router";
import { useState } from "react";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";

const VideoCall = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content content-two">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Video Call</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Applications</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Video Call
                </li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}

          {/* start row */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="single-video d-flex">
                <div className="join-video flex-fill">
                  <ImageWithBasePath
                    src="assets/img/media/video.jpg"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="chat-active-users">
                    <div className="video-avatar">
                      <ImageWithBasePath
                        src="./assets/img/users/user-01.jpg"
                        className="img-fluid"
                        alt="Logo"
                      />
                      <div className="user-name">
                        <span>Joanne Conner</span>
                      </div>
                    </div>
                  </div>
                  <div className="record-item d-flex align-items-center">
                    <div className="record-time me-2">
                      <span>40:12</span>
                    </div>
                    <Link
                      to="#"
                      className="video-expand btnFullscreen	"
                      onClick={toggleFullscreen}
                    >
                      <i className="ti ti-maximize" />
                    </Link>
                  </div>
                  <div className="more-icon">
                    <Link to="#" className="mic-off">
                      <i className="bx bx-microphone-off" />
                    </Link>
                  </div>
                  <div className="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">
                    <Link
                      to="#"
                      className="bg-light btn-icon btn-sm d-flex align-items-center justify-content-center guest-off rounded"
                    >
                      <i className="ti ti-user-off" />
                    </Link>
                    <div className="call-option rounded-pill d-flex justify-content-center align-items-center">
                      <Link
                        to="#"
                        className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-microphone" />
                      </Link>
                      <Link
                        to="#"
                        className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-video" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-lg text-white bg-danger d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-phone" />
                      </Link>
                      <Link
                        to="#"
                        className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded mx-2"
                      >
                        <i className="ti ti-volume" />
                      </Link>
                      <Link
                        to="#"
                        className="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-device-imac-share" />
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="bg-light btn-icon btn-sm bg-light d-flex align-items-center justify-content-center rounded"
                      id="show-message"
                    >
                      <i className="ti ti-dots" />
                    </Link>
                  </div>
                </div>
                <div className="right-user-side chat-rooms" id="chat-room">
                  <div className="card slime-grp border-0 mb-0">
                    <div className="card-header p-3 pb-0 border-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>Chat</h5>
                        <Link
                          to="#"
                          className="close_profile close_profile4 avatar avatar-sm mb-0 rounded-circle bg-danger"
                        >
                          <i className="ti ti-x" />
                        </Link>
                      </div>
                    </div>
                    {/* end card-header */}
                    <div className="card-body slimscroll p-3">
                      <div>
                        <div className="chat-msg-blk p-0">
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>Hi Everyone.!</h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats chats-right">
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>
                                  Good Morning..! Today we have meeting about
                                  the new policy.
                                </h4>
                              </div>
                              <div className="chat-profile-name text-end">
                                <h6>
                                  <i className="bx bx-check-double" /> 10:00
                                </h6>
                              </div>
                            </div>
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-02.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>
                                  Great.! This is the second new product that
                                  comes in this week.
                                </h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>Nice..which category it belongs to?</h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>
                                  Great.! This is the second new product that
                                  comes in this week.
                                </h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>Hi.! Good Morning all.</h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>Nice..which category it belongs to?</h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                          <div className="chats chats-right">
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>
                                  Good Morning..! Today we have meeting about
                                  the new product.
                                </h4>
                              </div>
                              <div className="chat-profile-name text-end">
                                <h6>
                                  <i className="bx bx-check-double" /> 10:00
                                </h6>
                              </div>
                            </div>
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-02.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                          <div className="chats mb-0">
                            <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="image"
                              />
                            </div>
                            <div className="chat-content flex-fill">
                              <div className="message-content">
                                <h4>
                                  Great.! This is the second new product that
                                  comes in this week.
                                </h4>
                              </div>
                              <div className="chat-profile-name d-flex justify-content-end">
                                <h6>10:00 AM</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-footer">
                          <form>
                            <div className="smile-col comman-icon">
                              <Link to="#">
                                <i className="ti ti-mood-smile-beam" />
                              </Link>
                            </div>
                            <div className="attach-col comman-icon">
                              <Link to="#">
                                <i className="ti ti-paperclip" />
                              </Link>
                            </div>
                            <div className="micro-col comman-icon">
                              <Link to="#">
                                <i className="ti ti-microphone" />
                              </Link>
                            </div>
                            <input
                              type="text"
                              className="form-control chat_form"
                              placeholder="Enter Message....."
                            />
                            <div className="send-chat comman-icon">
                              <Link to="#" className="rounded">
                                <i className="ti ti-send" />
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end card */}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default VideoCall;
