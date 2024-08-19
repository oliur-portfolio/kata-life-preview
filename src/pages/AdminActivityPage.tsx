import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { Collapse } from "react-collapse";

const AdminActivityPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openEditIndex, setOpenEditIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleEditAccordion = (index: number) => {
    setOpenEditIndex(openEditIndex === index ? null : index);
  };

  return (
    <section className="admin-question-area">
      <div className="section__heading">
        <h1 className="font--24">Admin - Activity types</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="custom__btn custom__btn--default"
        >
          Create new
        </button>
      </div>

      {/* Question Items */}
      <div className="question__items question__items-activity">
        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--published">
                Published
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button onClick={() => setIsEditOpen(true)} className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--draft">
                Draft
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--deprecated">
                Deprecated
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}

        {/* Single Item */}
        <div className="question__item">
          <div className="question__item-content">
            <div className="question__item-title">
              <h2 className="font--18">Activity type name</h2>

              <span className="question__item-title-status question__item-title-status--published">
                Published
              </span>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              euismod iaculis lectus massa risus sit ac massa, vitae. Id platea
              ut risus ridiculus tempor eget aliquet. Elit viverra ligula
              blandit dignissim laoreet.
            </p>
          </div>

          <button className="edit__btn">
            <img src="/images/edit.svg" alt="edit" />
          </button>
        </div>
        {/* Single Item */}
      </div>
      {/* Question Items */}

      {/* Modal Area | View */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="modal-dialog modal-dialog--activity"
      >
        <DialogBackdrop transition className="modal-backdrop" />

        <div className="modal-container">
          <DialogPanel transition className="modal-panel">
            <div className="modal__header-area">
              <div className="modal__header">
                <div className="question__item-title">
                  <h2 className="font--18">Activity type name</h2>

                  <span className="question__item-title-status question__item-title-status--published">
                    Published
                  </span>
                </div>

                <div className="modal__header-btns">
                  <button className="edit__btn">
                    <img src="/images/edit.svg" alt="edit" />
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="modal__close-btn"
                  >
                    <img src="/images/close.svg" alt="" />
                  </button>
                </div>
              </div>

              <span className="question__item-title-status question__item-title-status--draft question__item-title-status--category">
                Category
              </span>

              <p className="font--16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
                euismod iaculis lectus massa risus sit ac massa, vitae. Id
                platea ut risus. Elit viverra ligula blandit dignissim laoreet.
              </p>
            </div>

            <div className="accordion-container">
              {/* Level 1 Accordion */}
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(1)}
                >
                  <div className="accordion-header__name">
                    <h3 className="font--18">Level 1</h3>

                    {openIndex === 1 && (
                      <button className="accordion-header__delete-btn">
                        <img src="/images/delete.svg" alt="delete" />
                      </button>
                    )}
                  </div>

                  <img
                    className="accordion-header__arrow"
                    src={
                      openIndex === 1
                        ? "/images/accordion-arrow-up.svg"
                        : "/images/accordion-arrow-down.svg"
                    }
                    alt="Arrow"
                  />
                </div>

                <Collapse isOpened={openIndex === 1}>
                  <div className="accordion-body">
                    <div className="accordion-body__content">
                      <div className="accordion-body__header">
                        <h3 className="font--16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ipsum dolor sit amet?
                        </h3>

                        <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                          Type
                          <img src="/images/down-arrow-fill.svg" alt="" />
                        </button>

                        <button className="accordion-header__delete-btn">
                          <img src="/images/delete.svg" alt="delete" />
                        </button>
                      </div>

                      <div className="accordion-body__details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Dapibus euismod iaculis lectus massa risus sit
                          ac massa, vitae.
                        </p>
                      </div>

                      <div className="level__rating-area">
                        <p className="font--16">Level up Rating (4.5)</p>

                        <div className="level__rating">
                          <div className="level__rating-value">
                            <img src="/images/rating-star.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              {/* Level 1 Accordion */}

              {/* Level 2 Accordion */}
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(2)}
                >
                  <div className="accordion-header__name">
                    <h3 className="font--18">Level 2</h3>

                    {openIndex === 2 && (
                      <button className="accordion-header__delete-btn">
                        <img src="/images/delete.svg" alt="delete" />
                      </button>
                    )}
                  </div>

                  <img
                    className="accordion-header__arrow"
                    src={
                      openIndex === 2
                        ? "/images/accordion-arrow-up.svg"
                        : "/images/accordion-arrow-down.svg"
                    }
                    alt="Arrow"
                  />
                </div>

                <Collapse isOpened={openIndex === 2}>
                  <div className="accordion-body">
                    <div className="accordion-body__content">
                      <div className="accordion-body__header">
                        <h3 className="font--16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ipsum dolor sit amet?
                        </h3>

                        <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                          Type
                          <img src="/images/down-arrow-fill.svg" alt="" />
                        </button>

                        <button className="accordion-header__delete-btn">
                          <img src="/images/delete.svg" alt="delete" />
                        </button>
                      </div>

                      <div className="accordion-body__details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Dapibus euismod iaculis lectus massa risus sit
                          ac massa, vitae.
                        </p>
                      </div>

                      <div className="level__rating-area">
                        <p className="font--16">Level up Rating (4.5)</p>

                        <div className="level__rating">
                          <div className="level__rating-value">
                            <img src="/images/rating-star.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              {/* Level 2 Accordion */}

              {/* Level 3 Accordion */}
              <div className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(3)}
                >
                  <div className="accordion-header__name">
                    <h3 className="font--18">Level 3</h3>

                    {openIndex === 3 && (
                      <button className="accordion-header__delete-btn">
                        <img src="/images/delete.svg" alt="delete" />
                      </button>
                    )}
                  </div>

                  <img
                    className="accordion-header__arrow"
                    src={
                      openIndex === 3
                        ? "/images/accordion-arrow-up.svg"
                        : "/images/accordion-arrow-down.svg"
                    }
                    alt="Arrow"
                  />
                </div>

                <Collapse isOpened={openIndex === 3}>
                  <div className="accordion-body">
                    <div className="accordion-body__content">
                      <div className="accordion-body__header">
                        <h3 className="font--16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ipsum dolor sit amet?
                        </h3>

                        <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                          Type
                          <img src="/images/down-arrow-fill.svg" alt="" />
                        </button>

                        <button className="accordion-header__delete-btn">
                          <img src="/images/delete.svg" alt="delete" />
                        </button>
                      </div>

                      <div className="accordion-body__details">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Dapibus euismod iaculis lectus massa risus sit
                          ac massa, vitae.
                        </p>
                      </div>

                      <div className="level__rating-area">
                        <p className="font--16">Level up Rating (4.5)</p>

                        <div className="level__rating">
                          <div className="level__rating-value">
                            <img src="/images/rating-star.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
              {/* Level 3 Accordion */}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Modal Area | View */}

      {/* Modal Area | Edit */}
      <Dialog
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        className="modal-dialog modal-dialog--activity-edit"
      >
        <DialogBackdrop transition className="modal-backdrop" />

        <div className="modal-container">
          <DialogPanel transition className="modal-panel">
            <div className="modal__header-area">
              <div className="modal__header">
                <div className="question__item-title">
                  <h2 className="font--18">Activity type name</h2>

                  <span className="question__item-title-status question__item-title-status--published">
                    Published
                  </span>
                </div>

                <div className="modal__header-btns">
                  <button
                    onClick={() => setIsEditOpen(false)}
                    className="modal__close-btn"
                  >
                    <img src="/images/close.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="modal__form-area">
              <form action="" className="modal__form">
                <div className="input__fields">
                  {/* Single Input */}
                  <div className="input__field">
                    <input
                      className="input__style"
                      type="text"
                      placeholder="Write Question"
                      value="Category"
                    />
                  </div>
                  {/* Single Input */}

                  {/* Single Input */}
                  <div className="input__field">
                    <textarea
                      name=""
                      id=""
                      className="input__style input__style--text-area"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dapibus euismod iaculis lectus massa risus sit ac massa,
                      vitae. Id platea ut risus ridiculus tempor eget aliquet.
                      Elit viverra ligula blandit dignissim laoreet.
                    </textarea>
                  </div>
                  {/* Single Input */}
                </div>

                <div className="accordion-container">
                  {/* Level 1 Accordion */}
                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleEditAccordion(1)}
                    >
                      <div className="accordion-header__name">
                        <h3 className="font--18">Level 1</h3>

                        {openEditIndex === 1 && (
                          <button className="accordion-header__delete-btn">
                            <img src="/images/delete.svg" alt="delete" />
                          </button>
                        )}
                      </div>

                      <img
                        className="accordion-header__arrow"
                        src={
                          openEditIndex === 1
                            ? "/images/accordion-arrow-up.svg"
                            : "/images/accordion-arrow-down.svg"
                        }
                        alt="Arrow"
                      />
                    </div>

                    <Collapse isOpened={openEditIndex === 1}>
                      <div className="accordion-body">
                        <div className="accordion-body__content">
                          <div className="accordion-body__header">
                            <h3 className="font--16">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ipsum dolor sit amet?
                            </h3>

                            <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                              Type
                              <img src="/images/down-arrow-fill.svg" alt="" />
                            </button>

                            <button className="accordion-header__delete-btn">
                              <img src="/images/delete.svg" alt="delete" />
                            </button>
                          </div>

                          <div className="accordion-body__details">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dapibus euismod iaculis lectus massa risus
                              sit ac massa, vitae.
                            </p>
                          </div>

                          <div className="level__rating-area level__rating--full">
                            <p className="font--16">Level up Rating</p>

                            <div className="level__rating">
                              <div className="level__rating-value">
                                <div className="level__rating-value-inner">
                                  <img src="/images/rating-big.svg" alt="" />

                                  <p className="font--12">4.5</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="custom__btn custom__btn--default custom__btn--center">
                          Add new question
                        </button>
                      </div>
                    </Collapse>
                  </div>
                  {/* Level 1 Accordion */}

                  {/* Level 2 Accordion */}
                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleEditAccordion(2)}
                    >
                      <div className="accordion-header__name">
                        <h3 className="font--18">Level 2</h3>

                        {openEditIndex === 2 && (
                          <button className="accordion-header__delete-btn">
                            <img src="/images/delete.svg" alt="delete" />
                          </button>
                        )}
                      </div>

                      <img
                        className="accordion-header__arrow"
                        src={
                          openEditIndex === 2
                            ? "/images/accordion-arrow-up.svg"
                            : "/images/accordion-arrow-down.svg"
                        }
                        alt="Arrow"
                      />
                    </div>

                    <Collapse isOpened={openEditIndex === 2}>
                      <div className="accordion-body">
                        <div className="accordion-body__content">
                          <div className="accordion-body__header">
                            <h3 className="font--16">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ipsum dolor sit amet?
                            </h3>

                            <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                              Type
                              <img src="/images/down-arrow-fill.svg" alt="" />
                            </button>

                            <button className="accordion-header__delete-btn">
                              <img src="/images/delete.svg" alt="delete" />
                            </button>
                          </div>

                          <div className="accordion-body__details">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dapibus euismod iaculis lectus massa risus
                              sit ac massa, vitae.
                            </p>
                          </div>

                          <div className="level__rating-area level__rating--full">
                            <p className="font--16">Level up Rating</p>

                            <div className="level__rating">
                              <div className="level__rating-value">
                                <div className="level__rating-value-inner">
                                  <img src="/images/rating-big.svg" alt="" />

                                  <p className="font--12">4.5</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="custom__btn custom__btn--default custom__btn--center">
                          Add new question
                        </button>
                      </div>
                    </Collapse>
                  </div>
                  {/* Level 2 Accordion */}

                  {/* Level 3 Accordion */}
                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleEditAccordion(3)}
                    >
                      <div className="accordion-header__name">
                        <h3 className="font--18">Level 3</h3>

                        {openEditIndex === 3 && (
                          <button className="accordion-header__delete-btn">
                            <img src="/images/delete.svg" alt="delete" />
                          </button>
                        )}
                      </div>

                      <img
                        className="accordion-header__arrow"
                        src={
                          openEditIndex === 3
                            ? "/images/accordion-arrow-up.svg"
                            : "/images/accordion-arrow-down.svg"
                        }
                        alt="Arrow"
                      />
                    </div>

                    <Collapse isOpened={openEditIndex === 3}>
                      <div className="accordion-body">
                        <div className="accordion-body__content">
                          <div className="accordion-body__header">
                            <h3 className="font--16">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit ipsum dolor sit amet?
                            </h3>

                            <button className="question__item-title-status question__item-title-status--draft question__item-title-status--category question__item-title-status--ans-type">
                              Type
                              <img src="/images/down-arrow-fill.svg" alt="" />
                            </button>

                            <button className="accordion-header__delete-btn">
                              <img src="/images/delete.svg" alt="delete" />
                            </button>
                          </div>

                          <div className="accordion-body__details">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Dapibus euismod iaculis lectus massa risus
                              sit ac massa, vitae.
                            </p>
                          </div>

                          <div className="level__rating-area level__rating--full">
                            <p className="font--16">Level up Rating</p>

                            <div className="level__rating">
                              <div className="level__rating-value">
                                <div className="level__rating-value-inner">
                                  <img src="/images/rating-big.svg" alt="" />

                                  <p className="font--12">4.5</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button className="custom__btn custom__btn--default custom__btn--center">
                          Add new question
                        </button>
                      </div>
                    </Collapse>
                  </div>
                  {/* Level 3 Accordion */}
                </div>

                <div className="add__level-btn-area">
                  <span></span>
                  <button className="add__level-btn">
                    <img src="images/plus-green.svg" alt="plus" /> Add level
                  </button>
                  <span></span>
                </div>

                <button className="custom__btn custom__btn--default custom__btn--center">
                  Save
                </button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Modal Area | Edit */}
    </section>
  );
};

export default AdminActivityPage;
