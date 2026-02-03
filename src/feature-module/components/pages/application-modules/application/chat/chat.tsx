import { Link } from "react-router";
import { useState } from "react";
import { all_routes } from "../../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import 'overlayscrollbars/overlayscrollbars.css';
import { SmartMessageRouter, MessageUrgencyIndicator } from "../../../ai";

const Chat = () => {
  const [showSmartComposer, setShowSmartComposer] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const handleSendSmartMessage = (content: string, recipients: string[]) => {
    console.log('Sending message:', content, 'to:', recipients);
    setShowSmartComposer(false);
    // In a real app, this would send the message via API
  };

  // Sample messages with urgency detection
  const sampleMessages = [
    { id: 1, text: "Hey mark! Did you check out the new logo design?", sender: "Mark Smith", time: "02:39 PM", isMe: false },
    { id: 2, text: "Not yet. Can you send it here?", sender: "You", time: "02:39 PM", isMe: true },
    { id: 3, text: "URGENT: Patient in Room 302 needs immediate assistance!", sender: "Mark Smith", time: "02:45 PM", isMe: false },
    { id: 4, text: "On my way now - acknowledged!", sender: "You", time: "02:46 PM", isMe: true },
  ];

  return (
    <>
    {/* ========================
        Start Page Content
      ========================= */}
    <div className="page-wrapper">
      {/* Start Content */}
      <div className="content">
        {/* Page Header */}
        <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div className="flex-grow-1">
            <h4 className="fs-18 fw-semibold mb-0">Chat</h4>
          </div>
          <div className="text-end">
            <ol className="breadcrumb m-0 py-0">
              <li className="breadcrumb-item">
                <Link to={all_routes.dashboard}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Applications</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chat
              </li>
            </ol>
          </div>
        </div>
        {/* End Page Header */}
        <div className="card shadow-none mb-0">
          <div className="card-body p-0">
            <div className="d-md-flex">
              <div className="chat-user-nav">
                <div>
                  <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                    <div className="d-flex align-items-center">
                      <span className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath src="assets/img/users/user-01.jpg" alt="user" />
                      </span>
                      <div>
                        <h6 className="fs-14 mb-1">James Hong </h6>
                        <p className="mb-0">Admin</p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        className={`btn p-2 ${showSmartComposer ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => setShowSmartComposer(!showSmartComposer)}
                        title="AI-Powered Smart Compose"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                      >
                        <i className="ti ti-sparkles" />
                      </button>
                      <Link
                        to="#"
                        className="btn p-2 btn-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="New Chat"
                      >
                        <i className="ti ti-plus" />
                      </Link>
                    </div>
                  </div>

                  {/* AI Smart Message Router Panel */}
                  {showSmartComposer && (
                    <div className="p-3 border-bottom bg-light">
                      <div className="d-flex align-items-center mb-2">
                        <i className="ti ti-sparkles text-warning me-2" />
                        <h6 className="mb-0 fs-14">AI Smart Compose</h6>
                      </div>
                      <SmartMessageRouter
                        onSend={handleSendSmartMessage}
                        placeholder="Type your message... AI will analyze urgency and suggest routing"
                      />
                    </div>
                  )}
                  <div>
                    <div className="input-group w-auto input-group-flat p-4 pb-0">
                      <span className="input-group-text border-end-0">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Keyword"
                      />
                    </div>
                    <OverlayScrollbarsComponent
                        style={{ maxHeight: "calc(100vh - 18rem)" }}
                        className="chat-users p-4"
                        data-simplebar=""
                      >
                      <h6 className="mb-3">All Messages</h6>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list active mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-02.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Mark Smith</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Hey Sam! Did you Ch...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block">10:10 AM</span>
                          <span className="d-block text-success">
                            <i className="ti ti-checks" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-03.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Eugene Sikora</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              How are your Today
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">08:26 AM</span>
                          <span className="badge ms-auto bg-danger rounded-circle message-count">
                            5
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-04.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Robert Fassett</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Here are some of ve...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">
                            yesterday
                          </span>
                          <span className="badge ms-auto bg-danger rounded-circle message-count">
                            5
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-05.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Andrew Fletcher</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Use tools like Trello...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">
                            yesterday
                          </span>
                          <span className="d-block text-light">
                            <i className="ti ti-checks" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar badge-soft-purple fw-semibold me-2 flex-shrink-0"
                          >
                            TD
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Tyron Derby</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Let's reconvene next...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">12:55 PM</span>
                          <span className="d-block text-light">
                            <i className="ti ti-checks text-success" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-06.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Anna Johnson</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              How are your Today
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">12:54 PM</span>
                          <span className="d-block text-light">
                            <i className="ti ti-check text-light" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-07.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Emily Davis</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Sure, I can help with...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">11:47 PM</span>
                          <span className="d-block text-light">
                            <i className="ti ti-checks text-light" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list mb-1">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-08.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">Susan Denton</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              I'll share the meeting...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">10:43 PM</span>
                          <span className="d-block text-light">
                            <i className="ti ti-checks text-light" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between rounded p-3 user-list">
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-09.jpg" alt="user" />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#">David Cruz</Link>
                            </h6>
                            <p className="mb-0 text-truncate">
                              Let me know if you...
                            </p>
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-dark d-block mb-1">10:43 PM</span>
                          <span className="d-block text-light">
                            <i className="ti ti-checks text-light" />
                          </span>
                        </div>
                      </div>
                    </OverlayScrollbarsComponent>
                  </div>
                </div>
                {/* end card body */}
              </div>
              <div className="flex-fill chat-messages">
                {/* card start */}
                <div className="card border-0 mb-0">
                  <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3 p-3">
                    <div className="d-flex align-items-center">
                      <span className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
                      </span>
                      <div>
                        <h6 className="fs-14 fw-semibold mb-1">Mark Smith</h6>
                        <p className="mb-0 d-inline-flex align-items-center">
                          <i className="ti ti-point-filled text-success" />
                          Online
                        </p>
                      </div>
                    </div>
                    <div className="gap-2 d-flex align-items-center flex-wrap">
                      <Link
                        to="voice-call.html"
                        className="btn btn-icon btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Refresh"
                        data-bs-original-title="Voice Call"
                      >
                        <i className="ti ti-phone" />
                      </Link>
                      <Link
                        to="video-call.html"
                        className="btn btn-icon btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Refresh"
                        data-bs-original-title="Video Call"
                      >
                        <i className="ti ti-video" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        aria-label="Refresh"
                        data-bs-original-title="Info"
                      >
                        <i className="ti ti-info-circle" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-icon btn-light close-chat d-md-none"
                      >
                        <i className="ti ti-x" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <OverlayScrollbarsComponent  style={{ maxHeight: "calc(100vh - 18.5rem)" }} className="message-body p-4" data-simplebar="">
                      <div className="chat-list mb-3">
                        <div className="d-flex align-items-start">
                          <span className="avatar online me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
                          </span>
                          <div>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="fs-14 mb-0">Mark Smith</h6>
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-point-filled mx-2" />
                                02:39 PM
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="message-box receive-message p-3">
                                <p className="mb-0 fs-16">
                                  Hey mark! Did you check out the new logo design?
                                </p>
                              </div>
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-list ms-auto mb-3">
                        <div className="d-flex align-items-start justify-content-end">
                          <div>
                            <div className="d-flex align-items-center justify-content-end mb-1">
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-checks text-success me-1" />
                                02:39 PM
                                <i className="ti ti-point-filled mx-2" />
                              </p>
                              <h6 className="fs-14 fw-semibold mb-0">You</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="message-box sent-message p-3">
                                <p className="mb-0 fs-16">
                                  Not yet. Can you send it here?
                                </p>
                              </div>
                            </div>
                          </div>
                          <span className="avatar ms-2 online flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="chat-list mb-3">
                        <div className="d-flex align-items-start">
                          <span className="avatar online me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
                          </span>
                          <div>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="fs-14 mb-0">Mark Smith</h6>
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-point-filled mx-2" />
                                02:39 PM
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="message-box receive-message p-3">
                                <p className="mb-2 fs-16">
                                  Sure! Please check the below logo Attached!!!
                                </p>
                                <div className="d-flex align-items-center gap-2 d-none">
                                  <span className="bg-white d-block rounded p-1">
                                    <ImageWithBasePath
                                      src="assets/img/favicon.png"
                                      className="rounded"
                                      alt="attachment"
                                    />
                                  </span>
                                  <span className="bg-white d-block rounded p-1">
                                    <ImageWithBasePath
                                      src="assets/img/favicon.png"
                                      className="rounded"
                                      alt="attachment"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="badge bg-light rounded-pill px-3 text-dark fs-14">
                          Today
                        </span>
                      </div>
                      <div className="chat-list ms-auto mb-3">
                        <div className="d-flex align-items-start justify-content-end">
                          <div>
                            <div className="d-flex align-items-center justify-content-end mb-1">
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-checks text-success me-1" />
                                10:00 AM
                                <i className="ti ti-point-filled mx-2" />
                              </p>
                              <h6 className="fs-14 fw-semibold mb-0">You</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="message-box sent-message p-3">
                                <p className="mb-0 fs-16">
                                  Looks clean! I like the font. Maybe try a
                                  slightly darker blue?
                                </p>
                              </div>
                            </div>
                          </div>
                          <span className="avatar ms-2 online flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="chat-list mb-3">
                        <div className="d-flex align-items-start">
                          <span className="avatar online me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
                          </span>
                          <div>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="fs-14 mb-0">Mark Smith</h6>
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-point-filled mx-2" />
                                10:05 AM
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="message-box receive-message p-3">
                                <p className="mb-0 fs-16">
                                  Perfect! That layout will work great on the
                                  landing page. 👍
                                </p>
                              </div>
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-list ms-auto mb-3">
                        <div className="d-flex align-items-start justify-content-end">
                          <div>
                            <div className="d-flex align-items-center justify-content-end mb-1">
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-checks text-success me-1" />
                                10:00 AM
                                <i className="ti ti-point-filled mx-2" />
                              </p>
                              <h6 className="fs-14 fw-semibold mb-0">You</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="message-box sent-message p-3">
                                <p className="mb-0 fs-16">
                                  Perfect It looks Great!!!
                                </p>
                              </div>
                            </div>
                          </div>
                          <span className="avatar ms-2 online flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user" />
                          </span>
                        </div>
                      </div>
                      <div className="chat-list">
                        <div className="d-flex align-items-start">
                          <span className="avatar online me-2 flex-shrink-0">
                            <ImageWithBasePath src="assets/img/users/user-10.jpg" alt="user" />
                          </span>
                          <div>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="fs-14 mb-0">Mark Smith</h6>
                              <p className="mb-0 d-inline-flex align-items-center">
                                <i className="ti ti-point-filled mx-2" />
                                02:39 PM
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="message-box receive-message p-3">
                                <p className="mb-0 fs-16">
                                  Hey mark! Did you check out the new logo design?
                                </p>
                              </div>
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu p-2">
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Reply
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Forward
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-file-export me-1" />
                                      Copy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-heart me-1" />
                                      Mark as Favourite
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-trash me-1" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-check me-1" />
                                      Mark as Unread
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-box-align-right me-1" />
                                      Archeive Chat
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      <i className="ti ti-pinned me-1" />
                                      Pin Chat
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OverlayScrollbarsComponent>
                    <div className="message-footer d-flex align-items-center border-top p-3">
                      <div className="flex-fill">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Type Something..."
                        />
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Link
                          to="#"
                          className="btn btn-icon btn-light"
                        >
                          <i className="ti ti-photo-plus" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-light"
                        >
                          <i className="ti ti-mood-smile-beam" />
                        </Link>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-icon btn-outline-light"
                            data-bs-toggle="dropdown"
                            aria-label="more options"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu p-2">
                            <li>
                              <Link to="#" className="dropdown-item">
                                <i className="ti ti-camera-selfie me-2" />
                                Camera
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                <i className="ti ti-photo-up me-2" />
                                Gallery
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                <i className="ti ti-music me-2" />
                                Audio
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                <i className="ti ti-map-pin-share me-2" />
                                Location
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                <i className="ti ti-user-check me-2" />
                                Contact
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* card start */}
              </div>
            </div>
          </div>
          {/* end card body */}
        </div>
        {/* end card */}
      </div>
      {/* End Content */}
      {/* Footer Start */}
      <div className="footer text-center bg-white p-2 border-top">
        <p className="text-dark mb-0">
          2025 ©{" "}
          <Link to="#" className="link-primary">
            Preclinic
          </Link>
          , All Rights Reserved
        </p>
      </div>
      {/* Footer End */}
    </div>
    {/* ========================
        End Page Content
      ========================= */}
  </>
  
  );
};

export default Chat;
