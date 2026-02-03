import { Link } from "react-router";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import ImageWithBasePath from "../../../../../../../core/imageWithBasePath";


const initialItems = [
  {
    id: "1",
    background_color: "bg-primary",
    name: "Louis K. Bond",
    footer_content: "Someone famous in",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    id: "2",
    background_color: "bg-secondary",
    name: "Dennis N. Cloutier",
    footer_content: "Someone famous in ",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    id: "3",
    background_color: "bg-success",
    name: "Susan J. Sander",
    footer_content: "Someone famous in ",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    id: "4",
    background_color: "bg-info",
    name: "Susan J. Sander",
    footer_content: "Someone famous in ",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    id: "5",
    background_color: "bg-warning",
    name: "Susan J. Sander",
    footer_content: "Someone famous in ",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    id: "6",
    background_color: "bg-danger",
    name: "Susan J. Sander",
    footer_content: "Someone famous in ",
    text_style: "Source Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
];
const initialItems2 = [
  {
    id: "1",
    img: "user-01.jpg",
    background_color: "bg-primary",
    name: "Louis K. Bond",
    founder: " Founder & CEO",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: "2",
    img: "user-02.jpg",
    background_color: "bg-secondary",
    founder: " Founder & CEO",
    name: "Dennis N. Cloutier",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: "3",
    img: "user-03.jpg",
    background_color: "bg-success",
    founder: " Founder & CEO",
    name: "Susan J. Sander",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: "4",
    img: "user-04.jpg",
    background_color: "bg-info",
    founder: " Founder & CEO",
    name: "Susan J. Sander",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: "5",
    img: "user-05.jpg",
    background_color: "bg-warning",
    founder: " Founder & CEO",
    name: "Susan J. Sander",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
  {
    id: "6",
    img: "user-06.jpg",
    background_color: "bg-danger",
    founder: " Founder & CEO",
    name: "Susan J. Sander",
    content:
      "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
  },
];

const UiDragula = () => {
  const [items, setItems] = useState(initialItems);
  const [items2, setItems2] = useState(initialItems2);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };
  const onDragEnd2 = (result: any) => {
    if (!result.destination) return;

    const reorderedItems2 = Array.from(items2);
    const [removed] = reorderedItems2.splice(result.source.index, 1);
    reorderedItems2.splice(result.destination.index, 0, removed);

    setItems2(reorderedItems2);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Dragula</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Advanced UI</Link>
                </li>
                <li className="breadcrumb-item active">Dragula</li>
              </ol>
            </div>
          </div>

          {/* Drag and Drop Section */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">Simple Drag and Drop Example</h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Just specify the data attribute
                    <code>data-plugin='dragula'</code> to have drag and drop
                    support in your container.
                  </p>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="row"
                        >
                          {items.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="col-md-4"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div
                                    className={`card mb-0 mt-3 text-white ${item.background_color}`}
                                  >
                                    <div className="card-body">
                                      <blockquote className="card-bodyquote mb-0">
                                        <p>{item.content}</p>
                                        <footer>
                                          {item.footer_content}
                                          <cite title="Source Title">
                                            {item.text_style}
                                          </cite>
                                        </footer>
                                      </blockquote>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
            </div>
          </div>
          {/* start row */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">
                    Move stuff between containers
                  </h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Just specify the data attribute
                    <code>data-plugin='dragula'</code> and
                    <code>
                      data-containers='["first-container-id",
                      "second-container-id"]'
                    </code>
                    .
                  </p>
                  <DragDropContext onDragEnd={onDragEnd2}>
                    <Droppable droppableId="droppable">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="row"
                        >
                          {items2.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="col-md-6"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="bg-light bg-opacity-50">
                                    <div className={`card`}>
                                      <div className="card-body">
                                        <div className="d-flex align-items-start">
                                          <ImageWithBasePath
                                            src={`assets/img/users/${item.img}`}
                                            alt="image"
                                            className="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                          />
                                          <div className="w-100 overflow-hidden">
                                            <h5 className="fs-16 mb-1 mt-0">
                                              {item.name}
                                            </h5>
                                            <p>{item.content}</p>
                                            <p className="mb-0 text-muted">
                                              <span className="fst-italic">
                                                <b>"</b>
                                                {item.content}
                                              </span>
                                            </p>
                                          </div>
                                          {/* end w-100 */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  {/* end row */}
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">
                    Move stuff between containers using handle
                  </h4>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Just specify the data attribute
                    <code>data-plugin='dragula'</code>,
                    <code>
                      data-containers='["first-container-id",
                      "second-container-id"]'
                    </code>
                    and
                    <code>data-handle-class='dragula-handle'</code>.
                  </p>
                  <DragDropContext onDragEnd={onDragEnd2}>
                    <Droppable droppableId="droppable">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="row"
                        >
                          {items2.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="col-md-6"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="bg-light bg-opacity-50">
                                    <div className={`card`}>
                                      <div className="card-body">
                                        <div className="d-flex align-items-center">
                                          <ImageWithBasePath
                                            src={`assets/img/users/${item.img}`}
                                            alt="image"
                                            className="me-3 d-none d-sm-block avatar-sm rounded-circle"
                                          />
                                          <div className="w-100 overflow-hidden">
                                            <h5 className="fs-16 mb-1">
                                              {item.name}
                                            </h5>
                                            <p className="mb-0">
                                              
                                              {item.founder}
                                            </p>
                                          </div>
                                          {/* end w-100 */}
                                          <span className="dragula-handle" />
                                        </div>
                                        {/* end d-flex */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  {/* end row */}
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>

        {/* Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            © 2025
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
      </div>
    </>
  );
};

export default UiDragula;
